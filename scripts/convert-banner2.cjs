const sharp = require('sharp');
const fs = require('fs');

const input = 'public/images/hero/메인배너2.jpg';
const output = 'public/images/hero/메인배너2.webp';

const before = fs.statSync(input).size;
console.log(`변환 시작: ${input} (${(before/1024/1024).toFixed(1)}MB)`);

sharp(input)
  .resize({ width: 1920, withoutEnlargement: true })
  .webp({ quality: 85 })
  .toFile(output)
  .then(() => {
    const after = fs.statSync(output).size;
    console.log(`✅ 완료: ${output} (${(after/1024).toFixed(0)}KB, -${((1-after/before)*100).toFixed(1)}%)`);
  })
  .catch(err => console.error('❌ 오류:', err));
