// scripts/optimize-images.cjs
// PREVIEW (default): writes optimized copies into -optimized folders
// APPLY (--apply): overwrites originals in place, backing them up first

const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const APPLY = process.argv.includes("--apply");

// These two folders match your repo structure
const IMAGE_DIRS = ["public/images", "src/assets"];

// Skip list (normalize slashes for Windows/Posix)
const SKIP_FILES = new Set([
  "public/images/Bloghero.jpeg" // odd encoding; skip for now
]);
function isSkipped(absPath) {
  const rel = path.relative(process.cwd(), absPath).replace(/\\/g, "/");
  return SKIP_FILES.has(rel);
}

// Where preview copies go / where backups go (for apply)
const PREVIEW_SUFFIX = "-optimized";
const BACKUP_ROOT = ".image_backup_originals";

// Tuning
const JPG_QUALITY = 75;   // good for your concrete photos
const MAX_WIDTH   = 1600; // avoid shipping 4–6K sources
const EXTS        = new Set([".jpg", ".jpeg", ".png", ".JPG", ".JPEG", ".PNG"]);

function* walk(dir) {
  for (const d of fs.readdirSync(dir, { withFileTypes: true })) {
    const fp = path.join(dir, d.name);
    if (d.isDirectory()) yield* walk(fp);
    else yield fp;
  }
}

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

async function optimizeOne(srcAbs, dstAbs, ext) {
  const stat = fs.statSync(srcAbs);
  if (stat.size < 60 * 1024) {
    if (!APPLY && dstAbs) {
      ensureDir(path.dirname(dstAbs));
      fs.copyFileSync(srcAbs, dstAbs);
    }
    return { from: stat.size, to: stat.size, skipped: true };
  }

  // Try decoding with sharp; if it throws (e.g., HEIF), skip gracefully
  let img;
  try {
    img = sharp(srcAbs, { unlimited: false }).rotate();
  } catch (err) {
    console.warn(`[SKIP decode] ${path.relative(process.cwd(), srcAbs)} → ${err.message}`);
    if (!APPLY && dstAbs) {
      ensureDir(path.dirname(dstAbs));
      fs.copyFileSync(srcAbs, dstAbs);
    }
    return { from: stat.size, to: stat.size, skipped: true };
  }

  let meta = {};
  try {
    meta = await img.metadata();
  } catch (err) {
    console.warn(`[SKIP metadata] ${path.relative(process.cwd(), srcAbs)} → ${err.message}`);
    if (!APPLY && dstAbs) {
      ensureDir(path.dirname(dstAbs));
      fs.copyFileSync(srcAbs, dstAbs);
    }
    return { from: stat.size, to: stat.size, skipped: true };
  }

  let pipeline = img;
  if ((meta.width || 0) > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH });
  }

  // Keep SAME extension (PNG stays PNG, JPG stays JPG)
  let buf;
  if (ext.toLowerCase().includes("png")) {
    buf = await pipeline.png({ compressionLevel: 9, palette: true }).toBuffer();
  } else {
    buf = await pipeline.jpeg({ quality: JPG_QUALITY, mozjpeg: true }).toBuffer();
  }

  if (APPLY) {
    const rel = path.relative(process.cwd(), srcAbs);
    const backupAbs = path.join(BACKUP_ROOT, rel);
    ensureDir(path.dirname(backupAbs));
    if (!fs.existsSync(backupAbs)) fs.copyFileSync(srcAbs, backupAbs); // one-time backup
    fs.writeFileSync(srcAbs, buf); // overwrite original
  } else if (dstAbs) {
    ensureDir(path.dirname(dstAbs));
    fs.writeFileSync(dstAbs, buf); // write preview copy
  }

  return { from: stat.size, to: buf.length };
}

(async () => {
  let files = 0, totalSaved = 0;
  for (const dir of IMAGE_DIRS) {
    if (!fs.existsSync(dir)) continue;

    const previewRoot = APPLY ? null : dir + PREVIEW_SUFFIX;
    if (!APPLY) ensureDir(previewRoot);

    for (const srcAbs of walk(dir)) {
      if (!fs.statSync(srcAbs).isFile()) continue;
      const ext = path.extname(srcAbs);
      if (!EXTS.has(ext)) continue;
      if (isSkipped(srcAbs)) {
        console.log(`[SKIP] ${path.relative(process.cwd(), srcAbs)}`);
        continue;
      }

      const rel = path.relative(dir, srcAbs);
      const dstAbs = APPLY ? null : path.join(previewRoot, rel);

      try {
        const r = await optimizeOne(srcAbs, dstAbs, ext);
        files++;
        const saved = Math.max(0, (r.from - r.to));
        totalSaved += saved;
        const pct = r.from ? Math.round(saved * 100 / r.from) : 0;
        const fromKB = Math.round(r.from / 1024);
        const toKB = Math.round(r.to / 1024);
        const tag = APPLY ? "[APPLY]" : "[PREVIEW]";
        if (r.skipped) console.log(`${tag} (skip) ${path.join(dir, rel)}`);
        else console.log(`${tag} ${path.join(dir, rel)}  ${fromKB}KB → ${toKB}KB (saved ${pct}%)`);
      } catch (e) {
        console.error(`Error: ${srcAbs}: ${e.message}`);
      }
    }
  }
  console.log("Done.");
})();
