// src/utils/assetUrl.ts
// Resolves asset paths correctly in prod/dev and under subpaths if you ever use one.
export function assetUrl(path: string) {
  if (!path.startsWith('/')) path = `/${path}`;
  // Vite first, then Node env fallback, default '/'
  const prefix =
    (typeof import.meta !== 'undefined' &&
      (import.meta as any).env &&
      (import.meta as any).env.VITE_ASSET_PREFIX) ||
    process.env.VITE_ASSET_PREFIX ||
    '';
  return `${prefix}${path}` || path;
}
