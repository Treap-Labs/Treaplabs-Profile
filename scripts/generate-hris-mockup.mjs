import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const output = path.join(root, "public/images/portfolio");
const webSource = process.argv[2] || "D:/Github/HRIS/AE/FE_Attendance_preview.png";
const mobileSource = path.join(root, "src/images/optimized/mobile-hris.webp");
const svg = (body) => Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="2400" height="1800">${body}</svg>`);
const background = svg(`
  <defs>
    <linearGradient id="bg" x2="1" y2="1"><stop stop-color="#111113"/><stop offset=".55" stop-color="#1b1b1e"/><stop offset="1" stop-color="#29292d"/></linearGradient>
    <radialGradient id="light"><stop stop-color="#ffffff" stop-opacity=".08"/><stop offset="1" stop-color="#ffffff" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="2400" height="1800" fill="url(#bg)"/>
  <ellipse cx="1770" cy="790" rx="1200" ry="1080" fill="url(#light)"/>
`);
const frame = svg(`
  <defs><filter id="shadow" x="-30%" y="-30%" width="170%" height="190%"><feGaussianBlur stdDeviation="28"/></filter>
  <linearGradient id="metal" x2="0" y2="1"><stop stop-color="#eef1fa"/><stop offset="1" stop-color="#8794b5"/></linearGradient></defs>
  <rect x="188" y="573" width="1780" height="1010" rx="40" fill="#08112f" opacity=".4" filter="url(#shadow)"/>
  <rect x="170" y="500" width="1780" height="1042" rx="30" fill="#172036" stroke="#8693b5" stroke-width="3"/>
  <rect x="185" y="515" width="1750" height="48" rx="17" fill="#263047"/>
  <g fill="#93a1bd"><circle cx="211" cy="539" r="5"/><circle cx="230" cy="539" r="5"/><circle cx="249" cy="539" r="5"/></g>
  <path d="M130 1540 H1990 L2020 1560 Q2010 1583 1960 1583 H190 Q140 1583 130 1560Z" fill="url(#metal)"/>
  <path d="M910 1541 H1210 L1192 1553 H928Z" fill="#6c7998"/>
  <rect x="1750" y="800" width="440" height="820" rx="55" fill="#10182e" opacity=".5" filter="url(#shadow)"/>
  <rect x="1742" y="750" width="410" height="858" rx="42" fill="#141820" stroke="#b6bfd3" stroke-width="4"/>
`);
const web = await sharp(webSource).resize(1750, 984).png().toBuffer();
// Reuse only the screen area from the existing illustrative phone artwork.
const mobile = await sharp(mobileSource)
  .extract({ left: 468, top: 119, width: 262, height: 558 })
  .resize(378, 805)
  .composite([{ input: Buffer.from('<svg width="378" height="805"><rect width="378" height="805" rx="27" fill="white"/></svg>'), blend: "dest-in" }])
  .png().toBuffer();
const details = svg(`
  <rect x="1886" y="765" width="122" height="20" rx="10" fill="#141820"/>
  <rect x="1893" y="1587" width="108" height="5" rx="2.5" fill="#b0b7c5"/>
`);
await mkdir(output, { recursive: true });
const devices = await sharp(svg("")).composite([
  { input: frame },
  { input: web, left: 185, top: 563 },
  { input: svg('<rect x="1742" y="750" width="410" height="858" rx="42" fill="#141820" stroke="#b6bfd3" stroke-width="4"/>') },
  { input: mobile, left: 1758, top: 773 },
  { input: details },
]).png().toBuffer();
// Center the devices now that the editorial heading and captions are removed.
const centeredDevices = await sharp(devices)
  .extract({ left: 0, top: 300, width: 2400, height: 1500 })
  .png().toBuffer();
const result = await sharp(background)
  .composite([{ input: centeredDevices, left: 0, top: 150 }])
  .png().toBuffer();
await sharp(result).png().toFile(path.join(output, "ikigawe-hris-mockup.png"));
await sharp(result).webp({ quality: 88 }).toFile(path.join(output, "ikigawe-hris-mockup.webp"));
console.log("Created 2400 x 1800 HRIS PNG and WebP in", output);
