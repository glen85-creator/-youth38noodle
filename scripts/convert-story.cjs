const sharp = require('sharp');
const fs = require('fs');

const input = 'public/images/common/육수컨셉2.png';
const output = 'public/images/common/육수컨셉2.webp';

if (!fs.existsSync(input)) {
    console.error(`❌ 파일 없음: ${input}`);
    process.exit(1);
}

const before = fs.statSync(input).size;
console.log(`변환 시작: ${input} (${(before/1024/1024).toFixed(1)}MB)`);

sharp(input)
  .resize({ width: 1200, withoutEnlargement: true })
  .webp({ quality: 85 })
  .toFile(output)
  .then(() => {
    const after = fs.statSync(output).size;
    console.log(`✅ 완료: ${output} (${(after/1024).toFixed(0)}KB, -${((1-after/before)*100).toFixed(1)}%)`);
  })
  .catch(err => console.error('❌ 오류:', err));
