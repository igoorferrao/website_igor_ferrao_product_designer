export function assetPath(path: string) {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

  if (!basePath || normalizedPath.startsWith(basePath)) {
    return normalizedPath;
  }

  return `${basePath}${normalizedPath}`;
}
