import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";

import sharp from "sharp";

const output = new URL("../public/images/articles/heelwa/", import.meta.url);
await mkdir(output, { recursive: true });

// Original media supplied for the 10 January 2026 Heelwa event:
// https://drive.google.com/drive/folders/1dbYjH7ftG2buGCbLnAw4-fgt-raW_KvK
const photos = [
  { id: "190o3LWvquV6qkJlBI-ya_lDpHZT4cnjv", name: "fashion-show", source: "NEW_5383.jpg" },
  { id: "1IZjV5442ejzD7AeUbpJxhp6A71iLG_Vz", name: "event-operations", source: "NEW_4778.jpg" },
  { id: "1J_SL_j7rG004qG2RaKAHty_cUjc9f4Uh", name: "collection-display", source: "NEW_4824.jpg" },
  { id: "13_6UIe9-9y7HAGfpExHVVJNWIHHDKGFv", name: "event-atmosphere", source: "NEW_4908.jpg" },
  { id: "1YWdPxFNYhI5lqMRqP8WEyg94DBWzDgug", name: "collection-presentation", source: "NEW_5428.jpg" },
];

async function downloadImage(url) {
  const response = await fetch(url, { signal: AbortSignal.timeout(60_000) });
  if (!response.ok || !response.headers.get("content-type")?.startsWith("image/")) {
    throw new Error(`Cannot download image: ${response.status} ${url}`);
  }
  return Buffer.from(await response.arrayBuffer());
}

for (const photo of photos) {
  const original = await downloadImage(`https://drive.usercontent.google.com/download?id=${photo.id}&export=download`);
  const image = sharp(original).rotate();
  const result = await image.clone()
    .resize({ width: 2000, height: 1800, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 82, effort: 6 })
    .toFile(fileURLToPath(new URL(`${photo.name}.webp`, output)));
  console.log(`${photo.source} → ${photo.name}.webp (${result.width}×${result.height}, ${result.size} bytes)`);

  if (photo.name === "fashion-show") {
    await image.clone()
      .resize(1200, 630, { fit: "cover", position: "centre" })
      .webp({ quality: 85, effort: 6 })
      .toFile(fileURLToPath(new URL("social.webp", output)));
  }
}

// P_AX7098.MP4 is in heelwa 2026 (file raw) / Cam 1. Its frame shows
// the runway in the same venue as the January photographs.
const poster = await downloadImage("https://drive.google.com/thumbnail?id=16BeMaCnpX_bYEKvzNlLDZ2eQhuhJ_pB5&sz=w1600");
const result = await sharp(poster)
  .resize(1600, 900, { fit: "cover", withoutEnlargement: true })
  .webp({ quality: 82, effort: 6 })
  .toFile(fileURLToPath(new URL("runway-video-poster.webp", output)));
console.log(`Video poster prepared (${result.width}×${result.height}, ${result.size} bytes).`);
