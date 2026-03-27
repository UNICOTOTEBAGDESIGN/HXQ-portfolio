export const assetPath = (path: string) => {
  if (!path) {
    return path;
  }

  if (/^(?:[a-z]+:)?\/\//i.test(path)) {
    return path;
  }

  const normalizedBase = import.meta.env.BASE_URL || './';
  const normalizedPath = path.replace(/^\/+/, '');

  return `${normalizedBase}${normalizedPath}`;
};
