import sharp from "sharp";

await Promise.all([
  sharp("src/images/hero.png")
    .resize(1600, 1067, { fit: "cover" })
    .webp({ quality: 78, effort: 6 })
    .toFile("src/images/optimized/hero.webp"),
  sharp("src/images/caseStudies/mobile_hris.png")
    .resize(1200, 800, { fit: "cover" })
    .webp({ quality: 78, effort: 6 })
    .toFile("src/images/optimized/mobile-hris.webp"),
  sharp("src/images/caseStudies/defect_ai.png")
    .resize(1200, 800, { fit: "cover" })
    .webp({ quality: 78, effort: 6 })
    .toFile("src/images/optimized/defect-ai.webp"),
  sharp("public/images/treaplabs-og.svg")
    .png({ compressionLevel: 9 })
    .toFile("public/images/treaplabs-og.png"),
  sharp("public/icons/icon-source.svg")
    .resize(192, 192)
    .png()
    .toFile("public/icons/icon-192.png"),
  sharp("public/icons/icon-source.svg")
    .resize(512, 512)
    .png()
    .toFile("public/icons/icon-512.png"),
]);

console.log("Optimized website images generated.");
