import sharp from "sharp";
import path from "node:path";

const output = path.join(process.cwd(), "public/images/portfolio");
const source = process.argv[2] || "D:/android_studio_projects/walk_around_check_mobile/screenshots/home-page-raw.png";
const svg = (body, width = 2400, height = 1800) => Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">${body}</svg>`);
const background = svg(`
  <defs>
    <linearGradient id="bg" x2="1" y2="1"><stop stop-color="#111113"/><stop offset=".55" stop-color="#1b1b1e"/><stop offset="1" stop-color="#29292d"/></linearGradient>
    <radialGradient id="light"><stop stop-color="#fff" stop-opacity=".08"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>
    <filter id="shadow"><feGaussianBlur stdDeviation="35"/></filter>
  </defs>
  <rect width="2400" height="1800" fill="url(#bg)"/>
  <ellipse cx="1200" cy="800" rx="1050" ry="900" fill="url(#light)"/>
  <ellipse cx="1200" cy="1550" rx="510" ry="85" fill="#000" opacity=".6" filter="url(#shadow)"/>
`);
const phoneFrame = svg(`
  <defs><linearGradient id="edge" x2="1" y2="1"><stop stop-color="#adb0b8"/><stop offset=".4" stop-color="#44464e"/><stop offset="1" stop-color="#8b8e96"/></linearGradient></defs>
  <rect x="9" y="3" width="650" height="1440" rx="70" fill="url(#edge)"/>
  <rect x="14" y="8" width="640" height="1430" rx="66" fill="#101113"/>
  <rect x="2" y="245" width="7" height="105" rx="3" fill="#777981"/>
  <rect x="2" y="374" width="7" height="105" rx="3" fill="#777981"/>
  <rect x="659" y="320" width="7" height="145" rx="3" fill="#777981"/>
`, 670, 1450);
const screen = await sharp(source).resize(612, 1360)
  .composite([{ input: svg('<rect width="612" height="1360" rx="46" fill="#fff"/>', 612, 1360), blend: "dest-in" }])
  .png().toBuffer();
const assembledPhone = await sharp(phoneFrame).composite([
  { input: screen, left: 28, top: 42 },
  { input: svg('<rect x="276" y="22" width="116" height="6" rx="3" fill="#3a3b40"/><rect x="270" y="1415" width="128" height="5" rx="2.5" fill="#85878d"/>', 670, 1450) },
]).png().toBuffer();
const phone = await sharp(assembledPhone).rotate(-7, { background: "#00000000" }).png().toBuffer();
const dimensions = await sharp(phone).metadata();
const result = await sharp(background).composite([
  { input: phone, left: Math.round((2400 - dimensions.width) / 2), top: Math.round((1800 - dimensions.height) / 2) },
]).png().toBuffer();
await sharp(result).png().toFile(path.join(output, "walk-around-check-mockup.png"));
await sharp(result).webp({ quality: 88 }).toFile(path.join(output, "walk-around-check-mockup.webp"));
console.log("Created 2400 x 1800 Walk Around Check PNG and WebP in", output);
