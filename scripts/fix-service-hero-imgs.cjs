#!/usr/bin/env node
/**
 * Fix malformed <img> class attribute in service pages
 * Example broken line:
 *   <img src={HERO} alt="..." "absolute inset-0 w-full h-full object-cover" loading="eager" />
 * Fixed version:
 *   <img src={HERO} alt="..." className="absolute inset-0 w-full h-full object-cover" loading="eager" fetchpriority="high" />
 */
const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const TARGET_DIR = path.join(ROOT, "src", "pages", "services");

function walk(dir) {
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((d) => {
      const p = path.join(dir, d.name);
      if (d.isDirectory()) return walk(p);
      return [p];
    })
    .filter((p) => p.endsWith(".jsx") || p.endsWith(".tsx"));
}

function fixFile(file) {
  const src = fs.readFileSync(file, "utf8");

  let out = src.replace(
    /(alt="[^"]*")\s*"([^"]*absolute[^"]*)"/g,
    (_m, altAttr, cls) => `${altAttr} className="${cls}"`
  );

  out = out.replace(
    /<img([^>]*?)loading="eager"([^>]*?)\/>/g,
    '<img$1loading="eager" fetchpriority="high"$2/>'
  );

  if (out !== src) {
    fs.writeFileSync(file, out, "utf8");
    console.log("✅ Fixed:", path.relative(ROOT, file));
  }
}

if (!fs.existsSync(TARGET_DIR)) {
  console.error("❌ Services dir not found:", TARGET_DIR);
  process.exit(1);
}

walk(TARGET_DIR).forEach(fixFile);
console.log("🎯 Done.");
