# 알림 신청 Google Sheets 연결

1. [지정한 Google 시트](https://docs.google.com/spreadsheets/d/1zQuUVl_-B9W8hpa_eDjO9uvMTmbZFL-nL6KLCGxv3wE/edit)에서 **확장 프로그램 → Apps Script**를 엽니다.
2. 저장소의 scripts/bloom-notifications.gs를 붙여넣고 저장합니다. 함수 목록에서 setupBloomSheet를 한 번 실행하고 Google 권한을 승인합니다. 시트 제목을 동백이 굿즈 알림받기로 설정하고 이름·전화번호 열을 준비합니다. 기존 배포가 있다면 배포 관리에서 새 버전을 선택해 /exec 주소를 유지할 수 있습니다.
3. Apps Script의 **프로젝트 설정 → 스크립트 속성**에서 BLOOM_SHEETS_SECRET에 임의의 긴 비밀값을 넣습니다.
4. **배포 → 새 배포 → 웹 앱**에서 실행 계정을 본인, 액세스 권한을 모든 사용자로 설정합니다. 시트 공유 권한 자체는 제한된 상태로 둡니다.
5. Vercel의 서버 환경 변수 BLOOM_SHEETS_WEB_APP_URL에 발급된 /exec URL을, BLOOM_SHEETS_SECRET에 같은 비밀값을 넣고 재배포합니다. 로컬 테스트에는 .env.local에 같은 값을 넣습니다. NEXT_PUBLIC 접두사는 사용하지 않습니다.
6. 테스트 이메일로 제출해 알림 신청 탭에 행이 추가되는지 확인합니다. 같은 이메일로 다시 제출하면 관심 항목을 갱신합니다.
