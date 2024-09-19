export const localHost = 3000;

export const port = process.env.PORT || localHost;
export const host = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${port}`;
