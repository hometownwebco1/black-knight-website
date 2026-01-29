// src/components/EstimateCalculator.jsx
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Calculator, Info, Phone, Mail, Download } from "lucide-react";

const PHONE_DISPLAY = "(704) 787-4975";
const PHONE_TEL = "7047874975";
const EMAIL = "info@bksconcrete.com";

const money = (n) =>
  n.toLocaleString(undefined, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

const clampNum = (v) => {
  const n = Number(v);
  return Number.isFinite(n) ? n : 0;
};

// Pricing Sheet (provided by contractor) — estimating only.
const PRICING = {
  laborPerSqft: { min: 2.0, max: 3.0 },
  finishPerSqft: {
    Broom: { min: 6.5, max: 8.0 },
    Slick: { min: 7.0, max: 9.0 },
    Stamped: { min: 13.5, max: 15.5 },
  },
  integralColorPerYd: {
    None: 0,
    "Level I": 23.5,
    "Level II": 47.65,
    "Level III": 73.45,
    "Level IV": 101.1,
  },
  decorative: {
    powderRelease5Gal: 94.16,
    colorAntique3lb: 69.55,
  },
  sealer: {
    None: 0,
    "Cure & Seal – 1st Day Plus (5 gal)": 217.21,
    "Cure & Seal – Luster Shield (5 gal)": 171.2,
  },
  coverageSqftPer5Gal: 1000,
};

const FINISH_HELP = {
  Broom:
    "Most common. Great traction and durability for driveways, sidewalks, and patios.",
  Slick:
    "Smoother finish often used for slabs/covered areas. Can be slippery when wet.",
  Stamped:
    "Decorative finish with pattern/texture. Higher complexity and materials.",
};

export default function EstimateCalculator() {
  const [projectType, setProjectType] = useState("Driveway");
  const [areaMode, setAreaMode] = useState("Rectangle");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [areaSqft, setAreaSqft] = useState("");
  const [thicknessIn, setThicknessIn] = useState("4");

  const [finish, setFinish] = useState("Broom");
  const [colorLevel, setColorLevel] = useState("None");

  const [includeRelease, setIncludeRelease] = useState(false);
  const [includeAntique, setIncludeAntique] = useState(false);
  const [sealer, setSealer] = useState("None");

  const computed = useMemo(() => {
    const L = clampNum(length);
    const W = clampNum(width);
    const manualArea = clampNum(areaSqft);
    const thickness = Math.max(0, clampNum(thicknessIn));

    const sqft = areaMode === "Rectangle" ? L * W : manualArea;

    const finishRate =
      PRICING.finishPerSqft[finish] || PRICING.finishPerSqft.Broom;

    // Base per-sqft range = contract labor + finish
    const basePerSqftMin = PRICING.laborPerSqft.min + finishRate.min;
    const basePerSqftMax = PRICING.laborPerSqft.max + finishRate.max;

    const baseMin = sqft * basePerSqftMin;
    const baseMax = sqft * basePerSqftMax;

    // Cubic yards estimate for integral color: sqft * (thickness/12) cubic feet / 27
    const cubicYards =
      sqft > 0 && thickness > 0 ? (sqft * (thickness / 12)) / 27 : 0;

    const colorPerYd = PRICING.integralColorPerYd[colorLevel] ?? 0;
    const colorCost = cubicYards * colorPerYd;

    // Coverage-based items: 1 container per ~1000 sqft
    const containers =
      sqft > 0 ? Math.ceil(sqft / PRICING.coverageSqftPer5Gal) : 0;

    const releaseCost = includeRelease
      ? containers * PRICING.decorative.powderRelease5Gal
      : 0;

    const antiqueCost = includeAntique ? PRICING.decorative.colorAntique3lb : 0;

    const sealerCost =
      sealer !== "None" ? containers * (PRICING.sealer[sealer] || 0) : 0;

    const addOns = colorCost + releaseCost + antiqueCost + sealerCost;

    const totalMin = baseMin + addOns;
    const totalMax = baseMax + addOns;

    return {
      sqft,
      thickness,
      cubicYards,
      containers,
      basePerSqftMin,
      basePerSqftMax,
      baseMin,
      baseMax,
      colorCost,
      releaseCost,
      antiqueCost,
      sealerCost,
      addOns,
      totalMin,
      totalMax,
    };
  }, [
    projectType,
    areaMode,
    length,
    width,
    areaSqft,
    thicknessIn,
    finish,
    colorLevel,
    includeRelease,
    includeAntique,
    sealer,
  ]);

  const summaryText = useMemo(() => {
    const lines = [
      `BKS Concrete — Estimate Summary`,
      `Project type: ${projectType}`,
      `Finish: ${finish}`,
      `Area: ${computed.sqft ? computed.sqft.toFixed(0) : 0} sq ft`,
      `Thickness: ${computed.thickness ? computed.thickness.toFixed(1) : 0} in`,
      `Integral color: ${colorLevel}${
        colorLevel !== "None"
          ? ` (≈ ${computed.cubicYards.toFixed(2)} yd³)`
          : ""
      }`,
      `Release: ${
        includeRelease ? `Yes (≈ ${computed.containers} x 5-gal)` : "No"
      }`,
      `Antique: ${includeAntique ? "Yes" : "No"}`,
      `Sealer: ${
        sealer !== "None"
          ? `${sealer} (≈ ${computed.containers} x 5-gal)`
          : "None"
      }`,
      ``,
      `Base range (labor + finish): ${money(computed.baseMin)} – ${money(
        computed.baseMax
      )}`,
      `Add-ons: ${money(computed.addOns)}`,
      `Estimated total: ${money(computed.totalMin)} – ${money(
        computed.totalMax
      )}`,
      ``,
      `Not an official quote. Final pricing depends on site conditions, access, grading/earthwork, reinforcement, removal, drainage, and design complexity.`,
      `Call ${PHONE_DISPLAY} or email ${EMAIL} for a free on-site estimate.`,
    ];
    return lines.join("\n");
  }, [
    projectType,
    finish,
    colorLevel,
    includeRelease,
    includeAntique,
    sealer,
    computed,
  ]);

  const downloadSummary = () => {
    const blob = new Blob([summaryText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "bks-concrete-estimate-summary.txt";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-8 flex items-start gap-4">
        <div className="mt-1 rounded-2xl border border-[var(--border)] bg-white p-3 shadow-sm">
          <Calculator className="h-6 w-6" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            Instant Concrete Estimate
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Uses real pricing ranges for a fast ballpark.{" "}
            <strong>Not</strong> an official quote.
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
        {/* Inputs */}
        <div className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium">Project type</label>
              <select
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                className="mt-1 w-full rounded-lg border border-[var(--border)] bg-white px-3 py-2"
              >
                <option>Driveway</option>
                <option>Patio</option>
                <option>Sidewalk / Walkway</option>
                <option>Slab</option>
                <option>Foundation</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium">Finish</label>
              <select
                value={finish}
                onChange={(e) => setFinish(e.target.value)}
                className="mt-1 w-full rounded-lg border border-[var(--border)] bg-white px-3 py-2"
              >
                <option value="Broom">Broom Finished</option>
                <option value="Slick">Slick Finish</option>
                <option value="Stamped">Stamped Concrete</option>
              </select>
              <p className="mt-2 text-xs text-muted-foreground">
                {FINISH_HELP[finish]}
              </p>
            </div>

            <div>
              <label className="text-sm font-medium">Area input method</label>
              <select
                value={areaMode}
                onChange={(e) => setAreaMode(e.target.value)}
                className="mt-1 w-full rounded-lg border border-[var(--border)] bg-white px-3 py-2"
              >
                <option value="Rectangle">Rectangle (length × width)</option>
                <option value="Manual">Enter total sq ft</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium">Thickness (inches)</label>
              <input
                inputMode="decimal"
                value={thicknessIn}
                onChange={(e) => setThicknessIn(e.target.value)}
                className="mt-1 w-full rounded-lg border border-[var(--border)] px-3 py-2"
                placeholder="4"
              />
              <p className="mt-2 text-xs text-muted-foreground">
                Used only to estimate color additive (by cubic yard).
              </p>
            </div>

            {areaMode === "Rectangle" ? (
              <>
                <div>
                  <label className="text-sm font-medium">Length (ft)</label>
                  <input
                    inputMode="decimal"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-[var(--border)] px-3 py-2"
                    placeholder="30"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Width (ft)</label>
                  <input
                    inputMode="decimal"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-[var(--border)] px-3 py-2"
                    placeholder="12"
                  />
                </div>
              </>
            ) : (
              <div className="md:col-span-2">
                <label className="text-sm font-medium">Total area (sq ft)</label>
                <input
                  inputMode="decimal"
                  value={areaSqft}
                  onChange={(e) => setAreaSqft(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-[var(--border)] px-3 py-2"
                  placeholder="400"
                />
              </div>
            )}

            <div>
              <label className="text-sm font-medium">
                Integral color (optional)
              </label>
              <select
                value={colorLevel}
                onChange={(e) => setColorLevel(e.target.value)}
                className="mt-1 w-full rounded-lg border border-[var(--border)] bg-white px-3 py-2"
              >
                <option value="None">None</option>
                <option value="Level I">Level I</option>
                <option value="Level II">Level II</option>
                <option value="Level III">Level III</option>
                <option value="Level IV">Level IV</option>
              </select>
              <p className="mt-2 text-xs text-muted-foreground">
                Based on ~1 bag per cubic yard. We estimate yd³ from area &
                thickness.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <input
                  id="release"
                  type="checkbox"
                  checked={includeRelease}
                  onChange={(e) => setIncludeRelease(e.target.checked)}
                  className="mt-1"
                />
                <label htmlFor="release" className="text-sm">
                  Powder release w/ secondary color (≈ 1,000 sq ft per 5-gal)
                </label>
              </div>

              <div className="flex items-start gap-2">
                <input
                  id="antique"
                  type="checkbox"
                  checked={includeAntique}
                  onChange={(e) => setIncludeAntique(e.target.checked)}
                  className="mt-1"
                />
                <label htmlFor="antique" className="text-sm">
                  Color antique (one 3 lb unit)
                </label>
              </div>

              <div>
                <label className="text-sm font-medium">Sealer (optional)</label>
                <select
                  value={sealer}
                  onChange={(e) => setSealer(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-[var(--border)] bg-white px-3 py-2"
                >
                  {Object.keys(PRICING.sealer).map((k) => (
                    <option key={k} value={k}>
                      {k}
                    </option>
                  ))}
                </select>
                <p className="mt-2 text-xs text-muted-foreground">
                  Estimated as{" "}
                  {PRICING.coverageSqftPer5Gal.toLocaleString()} sq ft per 5-gal.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={downloadSummary}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-black px-4 py-2.5 text-sm font-semibold text-white hover:bg-black/90"
            >
              <Download className="h-4 w-4" />
              Download estimate summary
            </button>

            <div className="text-sm text-muted-foreground">
              Prefer a real quote?{" "}
              <Link to="/contact" className="underline">
                Request a free estimate
              </Link>
              .
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold">Estimated total</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Range uses labor + finish. Add-ons are fixed based on selections.
                </p>
              </div>
              <div className="rounded-xl border border-[var(--border)] bg-white px-3 py-1.5 text-xs">
                {computed.sqft ? `${computed.sqft.toFixed(0)} sq ft` : "Enter area"}
              </div>
            </div>

            <div className="mt-4 rounded-2xl bg-gray-50 p-5">
              <div className="text-3xl font-bold tracking-tight">
                {computed.sqft
                  ? `${money(computed.totalMin)} – ${money(computed.totalMax)}`
                  : "$0 – $0"}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                Base rate:{" "}
                {computed.sqft
                  ? `${money(computed.basePerSqftMin)}/sqft – ${money(
                      computed.basePerSqftMax
                    )}/sqft`
                  : "--"}
              </div>
            </div>

            <div className="mt-5 space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">
                  Base range (labor + finish)
                </span>
                <span className="font-medium">
                  {computed.sqft
                    ? `${money(computed.baseMin)} – ${money(computed.baseMax)}`
                    : "--"}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Add-ons</span>
                <span className="font-medium">
                  {computed.sqft ? money(computed.addOns) : "--"}
                </span>
              </div>

              <div className="h-px bg-[var(--border)]" />

              <div className="grid gap-2 text-xs text-muted-foreground">
                {colorLevel !== "None" && (
                  <div className="flex items-center justify-between">
                    <span>Integral color ({colorLevel})</span>
                    <span>{money(computed.colorCost)}</span>
                  </div>
                )}
                {includeRelease && (
                  <div className="flex items-center justify-between">
                    <span>Powder release (≈ {computed.containers} × 5-gal)</span>
                    <span>{money(computed.releaseCost)}</span>
                  </div>
                )}
                {includeAntique && (
                  <div className="flex items-center justify-between">
                    <span>Color antique</span>
                    <span>{money(computed.antiqueCost)}</span>
                  </div>
                )}
                {sealer !== "None" && (
                  <div className="flex items-center justify-between">
                    <span>Sealer (≈ {computed.containers} × 5-gal)</span>
                    <span>{money(computed.sealerCost)}</span>
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <span>Estimated concrete volume</span>
                  <span>
                    {computed.cubicYards ? `${computed.cubicYards.toFixed(2)} yd³` : "—"}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm">
              <div className="flex gap-2">
                <Info className="mt-0.5 h-4 w-4 flex-none text-amber-800" />
                <div className="text-amber-900">
                  <strong>Estimate only.</strong> Not an official quote. Final pricing depends on site conditions,
                  access, grading/earthwork, removal, reinforcement, drainage, and design complexity.
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Get a free on-site estimate</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Want an exact quote? Call or email and we’ll schedule a site visit.
            </p>
            <div className="mt-4 space-y-2 text-sm">
              <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-2 underline">
                <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
              </a>
              <div>
                <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 underline">
                  <Mail className="h-4 w-4" /> {EMAIL}
                </a>
              </div>
            </div>
            <div className="mt-5">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-black px-4 py-2.5 text-sm font-semibold text-white hover:bg-black/90"
              >
                Request a free estimate
              </Link>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-10 text-xs text-muted-foreground">
        Coverage note: release & seal products typically cover ~1,000 sq ft per 5-gal container. Pricing is for estimating purposes only and may change.
      </p>
    </div>
  );
}
