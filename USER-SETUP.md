# 회원관리 실행
기준 문서: docs/PRD-USER.md

## 환경 변수
.env.local에 다음 공개 설정을 넣습니다.
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY

## Supabase 설정
가입 즉시 로그인하기 위해 Authentication → Sign In / Providers → Email에서 Confirm email을 꺼야 합니다.
현재 MCP에는 이 인증 설정을 갱신하는 도구가 없으므로 대시보드에서 적용해야 합니다.
secret key는 사용하지 않습니다.

## 실행
npm install
npm run dev

## 구현
utils/supabase/server.ts: 쿠키 기반 서버 클라이언트.
utils/supabase/client.ts: 브라우저 클라이언트.
utils/supabase/middleware.ts: 세션 갱신과 비로그인 마이페이지 차단.
proxy.ts: Next.js 16 middleware 진입점.
signup은 options.data.nickname으로 닉네임을 전달하고 DB 트리거가 profiles를 생성합니다.
탈퇴는 본인 전용 delete_own_account RPC → 로컬 signOut → 메인 이동 순서입니다.
DB가 모든 세션과 계정을 먼저 삭제하므로 signOut은 로컬 쿠키를 정리합니다.

## 수동 확인
회원가입 → 메인 → 헤더 닉네임 → 마이페이지 → 닉네임 수정 → 로그아웃 → 로그인 → 회원 탈퇴.
잘못된 로그인에는 "이메일 또는 비밀번호가 틀렸습니다"가 표시됩니다.
탈퇴 확인 창을 취소하면 계정이 유지됩니다.
