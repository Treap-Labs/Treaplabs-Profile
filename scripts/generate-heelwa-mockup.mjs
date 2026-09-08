import sharp from "sharp";
import path from "node:path";

const output = path.join(process.cwd(), "public/images/portfolio");
const source = process.argv[2] || "D:/Github/heelwa-react-supabase/my-app/exports/heelwa-homepage.jpg";
const name = process.argv[3] || "heelwa";
const svg = (body) => Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="2400" height="1800">${body}</svg>`);
const background = svg(`
  <defs>
    <linearGradient id="bg" x2="1" y2="1"><stop stop-color="#111113"/><stop offset=".55" stop-color="#1b1b1e"/><stop offset="1" stop-color="#29292d"/></linearGradient>
    <radialGradient id="light"><stop stop-color="#fff" stop-opacity=".08"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>
    <filter id="shadow" x="-30%" y="-100%" width="160%" height="300%"><feGaussianBlur stdDeviation="35"/></filter>
    <linearGradient id="metal" x2="0" y2="1"><stop stop-color="#c9cace"/><stop offset=".45" stop-color="#929499"/><stop offset="1" stop-color="#43454b"/></linearGradient>
  </defs>
  <rect width="2400" height="1800" fill="url(#bg)"/>
  <ellipse cx="1200" cy="800" rx="1200" ry="1000" fill="url(#light)"/>
  <ellipse cx="1200" cy="1480" rx="990" ry="65" fill="#000" opacity=".6" filter="url(#shadow)"/>
  <rect x="205" y="330" width="1990" height="1196" rx="38" fill="#101113" stroke="#777a82" stroke-width="4"/>
  <rect x="226" y="351" width="1948" height="55" rx="18" fill="#242528"/>
  <g fill="#74767d"><circle cx="256" cy="378" r="6"/><circle cx="281" cy="378" r="6"/><circle cx="306" cy="378" r="6"/></g>
  <path d="M120 1520 H2280 V1538 Q2270 1562 2210 1562 H190 Q130 1562 120 1538Z" fill="url(#metal)"/>
  <path d="M1020 1521 H1380 L1360 1535 H1040Z" fill="#55575e"/>
`);
const screen = await sharp(source).resize(1948, 1096, { fit: "cover", position: "top" }).png().toBuffer();
const result = await sharp(background).composite([
  { input: screen, left: 226, top: 406 },
]).png().toBuffer();
await sharp(result).png().toFile(path.join(output, `${name}-mockup.png`));
await sharp(result).webp({ quality: 88 }).toFile(path.join(output, `${name}-mockup.webp`));
console.log(`Created 2400 x 1800 ${name} PNG and WebP in`, output);
