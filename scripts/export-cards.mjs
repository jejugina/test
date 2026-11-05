import sharp from 'sharp';
for (let i = 1; i <= 5; i++) {
  await sharp(`public/campaign/card-${i}.svg`).png().toFile(`public/campaign/card-${i}.png`);
  const {width,height} = await sharp(`public/campaign/card-${i}.png`).metadata();
  if(width!==1080 || height!==1350) throw new Error(`Unexpected card size: ${i}`);
  console.log(`Card ${i}: ${width}×${height} PNG`);
}
await sharp({create:{width:1350,height:338,channels:3,background:'#f5f1e6'}}).composite(await Promise.all(Array.from({length:5},async(_,i)=>({input:await sharp(`public/campaign/card-${i+1}.png`).resize(270,338).toBuffer(),left:i*270,top:0})))).png().toFile('public/campaign/contact-sheet.png');
