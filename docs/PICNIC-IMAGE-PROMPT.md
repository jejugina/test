# 동백이 피크닉 이미지 편집 기록
- 도구: 내장 image_gen (CLI 미사용).
- 적용 에셋: ../public/campaign/dongbaeki-picnic.png
- 입력 1: 사용자가 첨부한 동백숲 피크닉 화면.
- 입력 2: 동백이 공식 캐릭터 디자인 가이드.
- 원본 여성·피크닉 소품·숲을 유지하고 녹색 캐릭터를 분홍 동백이로 교체.
- 이미지에 포함된 문자는 제거. 제목·설명은 다국어 HTML로 제공.
- 최종 화면 제목: 동백숲 피크닉은 이렇게. 계절 문구 제거.

## 생성에 사용한 프롬프트
Use case: precise-object-edit / compositing. Edit Image 1, the existing winter picnic forest campaign image. Image 2 is ONLY the official Dongbaeki character identity reference. Replace the small pale green/yellow cartoon mascot sitting on the left picnic chair in Image 1 with Dongbaeki from Image 2: soft plush round hot-pink camellia petals, ivory oval face, glossy black eyes, pink cheeks, three yellow stamens above face, one green leaf at upper right, short black feet and a yellow strap with a small seed basket. Match its scale, seated pose, forest lighting and contact shadows. Keep the real seated woman, her umbrella, clothing, picnic objects, rocks and forest recognizably the same; do not add other people or mascots. Remove ALL baked-in typography from Image 1, including the yellow eyebrow, large Korean heading and thin Korean description, and naturally restore forest foliage behind that area. The output is a photographic web background asset, not a screenshot or UI. No text, labels, borders, watermark or new logos. Output a high-resolution landscape 3:2 image by extending the same forest environment to the sides as needed; retain the woman, picnic chair and Dongbaeki fully within the central 70% of the frame so responsive cropping can keep them visible. Keep open, calm dark forest in the upper portion for real HTML text to be added later. Preserve the supplied official character design precisely; do not substitute the old green mascot.
