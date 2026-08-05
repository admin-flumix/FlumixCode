import fs from "fs";
import path from "path";

export default function handler(req: any, res: any) {
  const file = path.join(process.cwd(), "public", "siteStatus.json");

  fs.writeFileSync(
    file,
    JSON.stringify({ live: true }, null, 2)
  );

  res.json({ success: true });
}