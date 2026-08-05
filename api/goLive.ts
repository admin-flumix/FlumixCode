export default async function handler(req: any, res: any) {
  return res.status(200).json({
    live: process.env.VITE_PUBLIC_SITE_LIVE === "true",
  });
}