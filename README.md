# bloom — 동백마을 × A2O Lite

동백숲의 이야기가, 당신의 일상에 피어납니다.

## 실행

Node.js와 npm이 설치된 환경에서 `npm install` 후 `npm run dev`를 실행합니다.
기본 개발 주소: http://localhost:3000

- `/`: 캠페인 웹사이트
- `/cards`: 5장 SNS 카드뉴스 미리보기 및 PNG·SVG 다운로드
- `public/campaign/card-1.png` ~ `card-5.png`: 1080×1350 SNS 업로드용 시안

## 알림 신청 폼 — 추후 연결

현재는 준비 중 안내만 표시하며, 이메일 등 개인정보를 수집하거나 저장하지 않습니다.
구글 폼을 만든 뒤 `app/campaign-config.ts`의 `signupFormUrl`에 공개 응답자 링크를 입력합니다.
편집 링크나 Google Drive 목록 주소를 넣지 않습니다.
연결 후 홈 화면과 마지막 알림 섹션의 버튼을 눌러 실제 폼이 열리는지 확인합니다.

## 콘텐츠 상태

꽃님이·블룸이·동백요정, 제품과 체험 장면은 콘셉트 일러스트입니다.
가방·엽서·키링은 제안용 예시이며 출시 확정 제품이 아닙니다.
공개 전 공식 로고·캐릭터·굿즈 이미지와 실제 체험 정보로 교체합니다.
출시 일정과 가격은 확정 후 반영합니다.

## 카드뉴스 수정과 내보내기

`node scripts/generate-campaign.mjs`로 SVG 시안을 생성합니다.
`node scripts/export-cards.mjs`로 PNG를 내보냅니다.
PNG 내보내기는 현재 Next.js 의존성에 포함된 sharp를 사용합니다.

## 검증

- `npm run lint`
- `npm run build`

SNS의 ‘더 알아보기’에는 배포된 웹사이트 주소를 연결합니다.
현재 로컬 개발 주소는 외부 방문자가 접속할 수 있는 공개 주소가 아닙니다.
