const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const IMAGE_DIRS = [
  'public/images/menu',
  'public/images/hero',
];

// 변환 설정
const MENU_OPTIONS = {
  width: 800,
  quality: 82,
};
const HERO_OPTIONS = {
  width: 1920,
  quality: 85,
};

async function convertDir(dirPath, opts) {
  const files = fs.readdirSync(dirPath);
  const targets = files.filter(f => /\.(jpg|jpeg|png)$/i.test(f) && !f.endsWith('.webp'));

  console.log(`\n📁 ${dirPath} (${targets.length}개 처리 예정)`);

  for (const file of targets) {
    const inputPath = path.join(dirPath, file);
    const ext = path.extname(file);
    const baseName = path.basename(file, ext);
    const outputPath = path.join(dirPath, baseName + '.webp');

    const statBefore = fs.statSync(inputPath).size;

    await sharp(inputPath)
      .resize({ width: opts.width, withoutEnlargement: true })
      .webp({ quality: opts.quality })
      .toFile(outputPath);

    const statAfter = fs.statSync(outputPath).size;
    const ratio = ((1 - statAfter / statBefore) * 100).toFixed(1);

    console.log(`  ✅ ${file} → ${baseName}.webp  (${(statBefore/1024/1024).toFixed(1)}MB → ${(statAfter/1024).toFixed(0)}KB, -${ratio}%)`);
  }
}

async function main() {
  console.log('🚀 이미지 WebP 변환 시작...');
  await convertDir(IMAGE_DIRS[0], MENU_OPTIONS);
  await convertDir(IMAGE_DIRS[1], HERO_OPTIONS);
  console.log('\n🎉 변환 완료! 이제 App.tsx에서 .webp 확장자를 사용하세요.');
}

main().catch(console.error);
