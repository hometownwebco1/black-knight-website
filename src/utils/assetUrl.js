// src/utils/assetUrl.js
// Minimal, safe helper for building asset URLs in Vite
export function assetUrl(path) {
  let p = path || '';
  if (!p.startsWith('/')) p = '/' + p;

  // Read prefix only if present; default to empty string
  let prefix = '';
  try {
    if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_ASSET_PREFIX) {
      prefix = import.meta.env.VITE_ASSET_PREFIX;
    }
  } catch (_) {
    // ignore
  }

  return `${prefix}${p}`;
}
