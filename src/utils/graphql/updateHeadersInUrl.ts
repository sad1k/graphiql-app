export const updateHeadersInUrl = (newHeaders: Record<string, string>) => {
  const currentUrl = window.location.href;
  const urlParts = currentUrl.split('?');

  const headers = new URLSearchParams(newHeaders);

  urlParts[1] = headers.toString();

  return urlParts.join('?');
};
