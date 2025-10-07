// src/utils/assetUrl.js
// One source of truth for asset paths.
// Set ASSET_PREFIX in Vercel → Project → Settings → Environment Variables.
// Example values:
//   ""                               ← normal (root) deploy
//   "/black-knight-website/public"   ← nested deploy like your current zip
export const ASSET_PREFIX =
  (typeof process !== 'undefined' && process.env?.ASSET_PREFIX) ||
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_ASSET_PREFIX) ||
  '';

export function assetUrl(path) {
  // path like "/images-optimized/galleryhero.jpeg"
  // ensure single slash when concatenated
  if (!path.startsWith('/')) path = '/' + path;
  if (!ASSET_PREFIX) return path;
  return `${ASSET_PREFIX}${path}`;
}
