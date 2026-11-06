export type Locale = "ko" | "en" | "zh";
export const languageTags: Record<Locale, string> = {ko:"ko", en:"en", zh:"zh-CN"};
export function isLocale(value: unknown): value is Locale { return value === "ko" || value === "en" || value === "zh"; }
const messages: Record<string, {en:string;zh:string}> = {
  "본문으로 바로가기": {
    "en": "Skip to content",
    "zh": "跳转到正文"
  },
  "bloom 피라미드 보기": {
    "en": "View bloom story pyramid",
    "zh": "查看 bloom 故事金字塔"
  },
  "주 메뉴": {
    "en": "Main navigation",
    "zh": "主导航"
  },
  "우리의 이야기": {
    "en": "Our story",
    "zh": "我们的故事"
  },
  "굿즈 이야기": {
    "en": "Our collection",
    "zh": "周边系列"
  },
  "SNS 이야기 ↗": {
    "en": "Social stories ↗",
    "zh": "社交故事 ↗"
  },
  "알림받기": {
    "en": "Get updates",
    "zh": "接收动态"
  },
  "동백숲의 이야기가,": {
    "en": "Stories from the camellia forest,",
    "zh": "山茶林的故事，"
  },
  "당신의 일상에": {
    "en": "into your everyday,",
    "zh": "在你的日常中"
  },
  "피어납니다.": {
    "en": "in bloom.",
    "zh": "绽放。"
  },
  "마을소녀 꽃님이와 작은 친구 블룸이가 전하는": {
    "en": "With Kkotnimi and her little friend Bloomie,",
    "zh": "跟随村庄少女 Kkotnimi 和小伙伴 Bloomie，"
  },
  "동백마을의 아름다움. 곧, 일상에서 만나세요.": {
    "en": "discover Dongbaek Village, coming soon to your everyday.",
    "zh": "发现山茶村之美，即将走进你的日常。"
  },
  "출시 소식 알림받기": {
    "en": "Get launch updates",
    "zh": "接收上线动态"
  },
  "이야기 따라가기": {
    "en": "Explore the story",
    "zh": "探索故事"
  },
  "피라미드 보기": {
    "en": "Story pyramid",
    "zh": "故事金字塔"
  },
  "COMING SOON · 제품과 출시 일정은 추후 공개됩니다.": {
    "en": "COMING SOON · Products and launch dates to be announced.",
    "zh": "COMING SOON · 产品与上线日期将另行公布。"
  },
  "동백마을 학생 체험 영상": {
    "en": "Student experiences at Dongbaek Village",
    "zh": "山茶村学生体验视频"
  },
  "이 브라우저에서는 영상을 재생할 수 없습니다.": {
    "en": "Your browser cannot play this video.",
    "zh": "此浏览器无法播放视频。"
  },
  "체험 영상 열기": {
    "en": "Open experience video",
    "zh": "打开体验视频"
  },
  "동백의 마음을": {
    "en": "The spirit of camellias,",
    "zh": "山茶的心意，"
  },
  "일상 가까이": {
    "en": "closer to everyday.",
    "zh": "融入日常。"
  },
  "01 — 동백마을 학생 체험": {
    "en": "01 — Students at Dongbaek Village",
    "zh": "01 — 山茶村学生体验"
  },
  "동백의 마음을 일상 가까이": {
    "en": "Camellia spirit, closer to everyday",
    "zh": "让山茶心意融入日常"
  },
  "BLOOM YOUR WAY — 동백꽃이 핀 제주 마을에서 동백이와 함께하는 산책과 동백유 체험 키비주얼": {
    "en": "BLOOM YOUR WAY — Dongbaeki and visitors explore camellias and camellia oil in Jeju",
    "zh": "BLOOM YOUR WAY — Dongbaeki 与游客在济州山茶村散步、体验山茶油的主视觉"
  },
  "BLOOM YOUR WAY · 동백마을 키비주얼": {
    "en": "BLOOM YOUR WAY · Dongbaek Village key visual",
    "zh": "BLOOM YOUR WAY · 山茶村主视觉"
  },
  "마을의 온기를,": {
    "en": "A little village warmth,",
    "zh": "将村庄的温暖，"
  },
  "오래 간직하는 방법.": {
    "en": "a memory to keep.",
    "zh": "珍藏在心中。"
  },
  "동백꽃 아래를 걷는 시간. 작은 풍경 앞에 잠시 멈추는 마음. 우리가 동백마을에서 만나고 싶은 아름다움입니다.": {
    "en": "A walk beneath camellias. A pause to notice a small view. These are the moments we hope to find in Dongbaek Village.",
    "zh": "漫步山茶花下，为一处小小风景驻足。这就是我们想在山茶村遇见的美好。"
  },
  "동백마을과 A2O LITE는 그 마음을 일상으로 옮기는 콜라보레이션을 준비합니다. 꽃님이의 시선으로 마을을 만나고, 블룸이와 함께 새로운 이야기를 발견해 보세요.": {
    "en": "This concept collaboration brings Dongbaek Village and A2O LITE into everyday life. See the village through Kkotnimi's eyes and discover new stories with Bloomie.",
    "zh": "这项概念联名让山茶村与 A2O LITE 走进日常。以 Kkotnimi 的视角认识村庄，与 Bloomie 发现新故事。"
  },
  "꽃님이": {
    "en": "Kkotnimi",
    "zh": "Kkotnimi"
  },
  "블룸이": {
    "en": "Bloomie",
    "zh": "Bloomie"
  },
  "마을의 아름다움을 안내하는 소녀": {
    "en": "A girl sharing the village's beauty",
    "zh": "带你发现村庄之美的少女"
  },
  "함께 걷고 발견하는 작은 친구": {
    "en": "A little friend for every discovery",
    "zh": "陪你漫步与探索的小伙伴"
  },
  "천천히 걸을수록,": {
    "en": "Walk a little slower,",
    "zh": "脚步越慢，"
  },
  "더 많이 피어나는.": {
    "en": "discover a little more.",
    "zh": "发现越多。"
  },
  "꽃님이와 블룸이의 눈으로 만나는 마을.": {
    "en": "Discover the village with Kkotnimi and Bloomie.",
    "zh": "和 Kkotnimi、Bloomie 一起认识村庄。"
  },
  "아래 장면은 체험 콘텐츠를 위한 연출 시안입니다.": {
    "en": "The scenes below are concepts for possible experiences.",
    "zh": "以下场景为体验内容的概念示意。"
  },
  "숲을 만나는 시간": {
    "en": "A moment in the forest",
    "zh": "与森林相遇"
  },
  "동백꽃과 잎의 색, 숲 사이의 빛을 따라 걷는 이야기.": {
    "en": "Follow camellia colors and the light through the forest.",
    "zh": "追随山茶花叶的色彩与林间光影。"
  },
  "마을의 손길을 따라서": {
    "en": "Made with village care",
    "zh": "感受村庄的手作温度"
  },
  "마을의 재료와 손길을 가까이 만나는 체험 이야기.": {
    "en": "A closer look at local ingredients and village craft.",
    "zh": "近距离感受村庄的食材与手艺。"
  },
  "작은 발견을 간직하기": {
    "en": "Keep a little discovery",
    "zh": "珍藏小小发现"
  },
  "꽃님이와 블룸이가 찾은 장면을 일상에 담는 이야기.": {
    "en": "Bring Kkotnimi and Bloomie's discoveries into everyday life.",
    "zh": "把 Kkotnimi 与 Bloomie 发现的风景带进日常。"
  },
  "실제 운영 체험과 일정은 확정 후 안내합니다.": {
    "en": "Programs and schedules will be shared once confirmed.",
    "zh": "实际体验项目与时间将在确定后公布。"
  },
  "숲의 작은 요정이,": {
    "en": "A little forest fairy,",
    "zh": "森林里的小精灵，"
  },
  "하나의 이름으로 피어나는 순간.": {
    "en": "a name coming into bloom.",
    "zh": "绽放成一个名字。"
  },
  "동백요정의 꽃잎과 빛이 모여 bloom이 됩니다.": {
    "en": "Petals and light from the camellia fairy come together as bloom.",
    "zh": "山茶精灵的花瓣与光芒汇聚成 bloom。"
  },
  "동백요정을 상징하는 꽃잎들이 모여 bloom 워드마크가 되는 애니메이션": {
    "en": "Camellia fairy petals gathering into the bloom wordmark",
    "zh": "象征山茶精灵的花瓣汇聚成 bloom 标识的动画"
  },
  "숲에서 시작해, 당신 곁에 피어날 이름. bloom.": {
    "en": "From the forest, a name blooming by your side. bloom.",
    "zh": "从森林出发，在你身边绽放的名字。bloom。"
  },
  "다음 이야기가 피어날 때,": {
    "en": "When the next story blooms,",
    "zh": "下一个故事绽放时，"
  },
  "가장 먼저 만나세요.": {
    "en": "be the first to know.",
    "zh": "第一时间与你相遇。"
  },
  "동백마을 × A2O LITE 콜라보 제품의 출시 소식을 전해드려요.": {
    "en": "Updates on the Dongbaek Village × A2O LITE concept collection.",
    "zh": "获取山茶村 × A2O LITE 概念联名系列动态。"
  },
  "구글 폼에서 알림 신청 · 구매 예약이 아닙니다.": {
    "en": "Notification form planned · Not a purchase reservation.",
    "zh": "通知表单筹备中 · 并非购买预约。"
  },
  "동백마을 × A2O LITE": {
    "en": "Dongbaek Village × A2O LITE",
    "zh": "山茶村 × A2O LITE"
  },
  "동백의 마음을 일상 가까이.": {
    "en": "Camellia spirit, closer to everyday.",
    "zh": "让山茶心意融入日常。"
  },
  "본 페이지의 캐릭터·제품·체험 이미지는 기획 시안입니다.": {
    "en": "Characters, products and experience visuals are concept designs.",
    "zh": "本页面角色、产品及体验图片均为概念设计。"
  },
  "5장의 이야기 보기 ↗": {
    "en": "View five social stories ↗",
    "zh": "查看五则社交故事 ↗"
  },
  "닫기": {
    "en": "Close",
    "zh": "关闭"
  },
  "알림 신청 폼을": {
    "en": "Our notification form",
    "zh": "通知申请表单"
  },
  "준비하고 있어요.": {
    "en": "is getting ready.",
    "zh": "正在准备中。"
  },
  "구글 폼이 연결되면 이곳에서 출시 알림을 신청하실 수 있어요. 지금은 신청이 접수되지 않습니다.": {
    "en": "You can request updates here when the form is connected. No requests are being collected yet.",
    "zh": "表单接入后可在此申请上线通知。目前不收集申请。"
  },
  "확인": {
    "en": "OK",
    "zh": "确定"
  },
  "동백 가방": {
    "en": "Camellia bag",
    "zh": "山茶束口包"
  },
  "블룸 머그컵": {
    "en": "Bloom mug",
    "zh": "Bloom 马克杯"
  },
  "동백 모자": {
    "en": "Camellia cap",
    "zh": "山茶帽"
  },
  "동백 앞치마": {
    "en": "Camellia apron",
    "zh": "山茶围裙"
  },
  "블룸 텀블러": {
    "en": "Bloom tumbler",
    "zh": "Bloom 随行杯"
  },
  "컬러풀한 BLOOM YOUR WAY 패턴을 담은 스트링 가방.": {
    "en": "A drawstring bag with a colorful BLOOM YOUR WAY pattern.",
    "zh": "印有缤纷 BLOOM YOUR WAY 图案的束口包。"
  },
  "따뜻한 크림 컬러에 BLOOM YOUR WAY 레터링을 담은 머그컵.": {
    "en": "A warm cream mug with BLOOM YOUR WAY lettering.",
    "zh": "暖奶油色杯身搭配 BLOOM YOUR WAY 字样的马克杯。"
  },
  "동백꽃 와펜과 선명한 핑크 컬러가 어우러진 모자.": {
    "en": "A vivid pink cap with a camellia flower patch.",
    "zh": "亮粉色帽身搭配山茶花徽章。"
  },
  "크림 컬러 원단에 동백꽃과 블룸 로고를 담은 앞치마.": {
    "en": "A cream apron featuring camellias and the bloom logo.",
    "zh": "奶油色面料搭配山茶花与 bloom 标识的围裙。"
  },
  "블룸 로고와 컬러풀한 레터 패턴을 담은 손잡이 텀블러.": {
    "en": "A handled tumbler with the bloom logo and colorful lettering.",
    "zh": "带手柄的随行杯，印有 bloom 标识与缤纷字母图案。"
  },
  "상세보기 닫기": {
    "en": "Close product details",
    "zh": "关闭详情"
  },
  "디자인 전체 보기": {
    "en": "full design view",
    "zh": "完整设计图"
  },
  "각도별 디자인 전체 보기": {
    "en": "design from every angle",
    "zh": "多角度设计图"
  },
  "최종 소재·규격·가격·출시 일정은 추후 공개됩니다.": {
    "en": "Final materials, dimensions, prices and launch dates will be announced.",
    "zh": "最终材质、规格、价格及上线时间将另行公布。"
  },
  "목록으로 돌아가기": {
    "en": "Back to collection",
    "zh": "返回系列"
  },
  "다양한 각도로 보기": {
    "en": "View all angles",
    "zh": "查看不同角度"
  },
  "동백마을의 마음을,": {
    "en": "The spirit of the village,",
    "zh": "山茶村的心意，"
  },
  "다섯 가지로 담았어요.": {
    "en": "in five everyday pieces.",
    "zh": "融入五款日常好物。"
  },
  "하나의 이야기로 이어지는 굿즈 5종 세트.": {
    "en": "Five pieces connected by one story.",
    "zh": "一个故事串起五款周边。"
  },
  "가방부터 텀블러까지, 일상 가까이 만나는 블룸.": {
    "en": "From bags to tumblers, bring bloom into everyday life.",
    "zh": "从包袋到随行杯，让 bloom 走进日常。"
  },
  "동백마을 굿즈 5종": {
    "en": "Five Dongbaek Village goods",
    "zh": "山茶村五款周边"
  },
  "동백꽃과 제주 풍경 속에 놓인 동백 앞치마, 가방, 모자, 텀블러와 머그컵 굿즈 5종": {
    "en": "Five goods among camellias and Jeju scenery: apron, bag, cap, tumbler and mug",
    "zh": "济州山茶花景色中的围裙、束口包、帽子、随行杯与马克杯五款周边"
  },
  "숲에서 시작된 이야기,": {
    "en": "A story from the forest,",
    "zh": "从森林开始的故事，"
  },
  "일상으로 가져오는 한 세트.": {
    "en": "a collection for everyday.",
    "zh": "化作陪伴日常的系列。"
  },
  "메고, 마시고, 쓰고, 요리하는 일상. 동백의 색과 블룸의 이야기를 가방·머그컵·모자·앞치마·텀블러에 담았어요.": {
    "en": "Carry, sip, wear and cook. Camellia colors and bloom stories find their way into bags, mugs, caps, aprons and tumblers.",
    "zh": "背上包、喝口茶、戴上帽、享受烹饪。山茶色彩与 bloom 故事融入束口包、马克杯、帽子、围裙和随行杯。"
  },
  "5종 세트 출시 알림받기": {
    "en": "Get collection updates",
    "zh": "接收五款系列动态"
  },
  "구성: 가방·머그컵·모자·앞치마·텀블러": {
    "en": "Includes: bag, mug, cap, apron and tumbler",
    "zh": "系列：束口包、马克杯、帽子、围裙、随行杯"
  },
  "최종 구성·소재·규격·세트 가격·출시 일정은 추후 공개됩니다.": {
    "en": "Final contents, materials, dimensions, set price and launch dates will be announced.",
    "zh": "最终组合、材质、规格、套装价格和上线时间将另行公布。"
  },
  "이메일": {
    "en": "Email",
    "zh": "邮箱"
  },
  "비밀번호": {
    "en": "Password",
    "zh": "密码"
  },
  "6자 이상 입력해 주세요.": {
    "en": "Use at least 6 characters.",
    "zh": "请输入至少6个字符。"
  },
  "닉네임": {
    "en": "Nickname",
    "zh": "昵称"
  },
  "처리 중…": {
    "en": "Processing…",
    "zh": "处理中…"
  },
  "회원가입": {
    "en": "Sign up",
    "zh": "注册"
  },
  "로그인": {
    "en": "Log in",
    "zh": "登录"
  },
  "로그아웃 중…": {
    "en": "Signing out…",
    "zh": "正在退出…"
  },
  "로그아웃": {
    "en": "Log out",
    "zh": "退出登录"
  },
  "저장 중…": {
    "en": "Saving…",
    "zh": "保存中…"
  },
  "닉네임 수정": {
    "en": "Update nickname",
    "zh": "修改昵称"
  },
  "정말 탈퇴하시겠습니까? 계정과 프로필이 삭제됩니다.": {
    "en": "Delete your account? Your account and profile will be permanently removed.",
    "zh": "确定注销吗？你的账号和个人资料将被删除。"
  },
  "탈퇴 중…": {
    "en": "Deleting…",
    "zh": "注销中…"
  },
  "회원 탈퇴": {
    "en": "Delete account",
    "zh": "注销账号"
  },
  "이메일, 비밀번호(6자 이상), 닉네임(1~30자)을 확인해 주세요.": {
    "en": "Check your email, password (6+ characters) and nickname (1–30 characters).",
    "zh": "请检查邮箱、密码（至少6个字符）和昵称（1至30个字符）。"
  },
  "회원가입에 실패했습니다. 입력 내용을 확인하고 다시 시도해 주세요.": {
    "en": "Sign-up failed. Check your details and try again.",
    "zh": "注册失败，请检查输入信息后重试。"
  },
  "가입 후 로그인하지 못했습니다. 사이트의 회원가입 설정을 확인해 주세요.": {
    "en": "Unable to sign in after registration. Please contact the site owner.",
    "zh": "注册后无法登录，请联系网站负责人。"
  },
  "이메일 또는 비밀번호가 틀렸습니다": {
    "en": "Incorrect email or password",
    "zh": "邮箱或密码错误"
  },
  "로그아웃하지 못했습니다. 다시 시도해 주세요.": {
    "en": "Unable to log out. Please try again.",
    "zh": "退出登录失败，请重试。"
  },
  "닉네임은 1~30자로 입력해 주세요.": {
    "en": "Your nickname must be 1–30 characters.",
    "zh": "昵称须为1至30个字符。"
  },
  "닉네임을 수정하지 못했습니다. 다시 시도해 주세요.": {
    "en": "Unable to update your nickname. Please try again.",
    "zh": "昵称修改失败，请重试。"
  },
  "닉네임이 수정되었습니다.": {
    "en": "Nickname updated.",
    "zh": "昵称已修改。"
  },
  "탈퇴하지 못했습니다. 다시 시도해 주세요.": {
    "en": "Unable to delete your account. Please try again.",
    "zh": "注销失败，请重试。"
  },
  "메인으로": {
    "en": "Home",
    "zh": "首页"
  },
  "회원 메뉴": {
    "en": "Account navigation",
    "zh": "账号导航"
  },
  "회원": {
    "en": "Member",
    "zh": "用户"
  },
  "님": {
    "en": "",
    "zh": ""
  },
  "마이페이지": {
    "en": "My account",
    "zh": "个人中心"
  },
  "프로필을 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.": {
    "en": "Unable to load your profile. Please try again later.",
    "zh": "无法加载个人资料，请稍后重试。"
  },
  "← bloom 웹사이트": {
    "en": "← Back to bloom",
    "zh": "← 返回 bloom"
  },
  "다섯 장으로 만나는": {
    "en": "Five stories from",
    "zh": "用五则故事走进"
  },
  "동백숲의 이야기.": {
    "en": "the camellia forest.",
    "zh": "山茶森林。"
  },
  "동백숲에서 발견한, 조금 특별한 만남.": {
    "en": "A special encounter in the camellia forest.",
    "zh": "山茶林中的特别相遇。"
  },
  "마을과 일상이 만나, 새로운 이야기가 피어납니다.": {
    "en": "Village and everyday life meet, and a new story blooms.",
    "zh": "村庄与日常相遇，新的故事由此绽放。"
  },
  "꽃님이와 걷고, 블룸이와 발견하는 마을.": {
    "en": "Walk with Kkotnimi, discover with Bloomie.",
    "zh": "和 Kkotnimi 漫步，与 Bloomie 探索村庄。"
  },
  "마을에서 만난 아름다움이, 곧 당신의 일상으로.": {
    "en": "Village beauty, soon in your everyday.",
    "zh": "村庄之美，即将走进你的日常。"
  },
  "동백숲의 이야기는 어떤 모습으로 피어날까요?": {
    "en": "How will the forest's stories bloom?",
    "zh": "山茶林的故事将如何绽放？"
  },
  "1080 × 1350 · SNS 카드뉴스 콘셉트 시안": {
    "en": "1080 × 1350 · Social story concepts",
    "zh": "1080 × 1350 · 社交故事概念稿"
  },
  "캐릭터·굿즈·체험 정보는 최종 확정 전입니다.": {
    "en": "Characters, goods and experiences are not yet final.",
    "zh": "角色、周边与体验信息尚未最终确定。"
  },
  "PNG 다운로드 ↓": {
    "en": "Download PNG ↓",
    "zh": "下载 PNG ↓"
  },
  "SVG 원본 ↓": {
    "en": "Original SVG ↓",
    "zh": "SVG 原文件 ↓"
  },
  "게시용 캡션: 동백숲의 이야기가, 당신의 일상에 피어납니다. 동백마을과 A2O LITE가 준비하는 새로운 만남. 꽃님이와 블룸이의 이야기를 웹사이트에서 만나고, 출시 알림을 신청해 주세요.": {
    "en": "Suggested caption: Camellia forest stories bloom in everyday life. Discover Dongbaek Village × A2O LITE with Kkotnimi and Bloomie, and look out for launch updates.",
    "zh": "发布文案：山茶林的故事在日常中绽放。和 Kkotnimi、Bloomie 一起探索山茶村 × A2O LITE 的新故事，关注上线动态。"
  },
  "더 알아보기 ↗": {
    "en": "Learn more ↗",
    "zh": "了解更多 ↗"
  },
  "동백숲에서 알림까지, 다섯 단계의 이야기를 담은 UI 시안입니다.": {
    "en": "A five-stage story, from the forest to launch updates.",
    "zh": "从山茶林到上线通知，以五个层次展开故事的界面概念。"
  },
  "각 단은 마우스·터치·키보드로 선택할 수 있습니다.": {
    "en": "Explore each level with mouse, touch or keyboard.",
    "zh": "可使用鼠标、触屏或键盘选择各层。"
  },
  "알림": {
    "en": "Updates",
    "zh": "动态"
  },
  "다음 이야기를 기다리기": {
    "en": "Wait for the next story",
    "zh": "期待下一个故事"
  },
  "출시 알림으로 동백마을과 블룸이의 다음 이야기를 만나세요.": {
    "en": "Look out for the next Dongbaek Village and Bloomie story.",
    "zh": "关注山茶村与 Bloomie 的下一段故事。"
  },
  "굿즈": {
    "en": "Goods",
    "zh": "周边"
  },
  "일상에 담아가기": {
    "en": "Bring it into everyday",
    "zh": "带入日常"
  },
  "마을에서 만난 아름다움을 다섯 가지 굿즈로 간직하는 단계입니다.": {
    "en": "Keep a little village beauty in five everyday goods.",
    "zh": "用五款周边珍藏村庄之美。"
  },
  "친구": {
    "en": "Friends",
    "zh": "朋友"
  },
  "꽃님이와 블룸이 만나기": {
    "en": "Meet Kkotnimi and Bloomie",
    "zh": "认识 Kkotnimi 与 Bloomie"
  },
  "마을을 안내하는 꽃님이와 함께 발견하는 블룸이의 이야기를 알아가요.": {
    "en": "Discover Kkotnimi, our village guide, and her curious friend Bloomie.",
    "zh": "认识村庄向导 Kkotnimi 和爱探索的 Bloomie。"
  },
  "체험": {
    "en": "Experiences",
    "zh": "体验"
  },
  "마을의 시간을 느끼기": {
    "en": "Feel the village rhythm",
    "zh": "感受村庄时光"
  },
  "천천히 걷고, 살펴보고, 마을의 손길을 만나는 시간을 상상해 보세요.": {
    "en": "Imagine walking slowly, noticing details and meeting local craft.",
    "zh": "想象慢慢走、仔细看、感受村庄手作温度的时光。"
  },
  "동백숲": {
    "en": "Camellia forest",
    "zh": "山茶林"
  },
  "모든 이야기가 시작되는 곳": {
    "en": "Where every story begins",
    "zh": "一切故事的起点"
  },
  "피라미드의 바탕은 동백숲입니다. 숲의 색과 온기에서 bloom의 이야기가 시작됩니다.": {
    "en": "The forest is our foundation. Its colors and warmth begin the bloom story.",
    "zh": "山茶林是金字塔的根基。bloom 的故事源于森林的色彩与温暖。"
  },
  "작은 숲에서, 하나의 이야기로.": {
    "en": "From a little forest, a story.",
    "zh": "从小小森林，展开一个故事。"
  },
  "각 층을 눌러 이야기를 발견해 보세요.": {
    "en": "Select a level to discover its story.",
    "zh": "点击各层，发现其中的故事。"
  },
  "피라미드 이야기 단계": {
    "en": "Story pyramid levels",
    "zh": "故事金字塔层次"
  },
  "불러오는 중…": {
    "en": "Loading…",
    "zh": "加载中…"
  },
  "회원 메뉴 불러오는 중…": {
    "en": "Loading account menu…",
    "zh": "正在加载账号菜单…"
  },
  "메뉴": {
    "en": "Menu",
    "zh": "菜单"
  },
  "모바일 메뉴": {
    "en": "Mobile navigation",
    "zh": "移动端导航"
  },
  "체험 이야기": {
    "en": "Experience concepts",
    "zh": "体验构想"
  },
  "교육용 프로토타입": {
    "en": "Educational prototype",
    "zh": "教学原型"
  },
  "본 사이트는 학교 교육용 가상 협업 캠페인이며, A2O LITE 공식 협업 사이트가 아닙니다.": {
    "en": "This is a fictional collaboration campaign for school education, not an official A2O LITE collaboration website.",
    "zh": "本网站为学校教学用途的虚拟联名活动原型，并非 A2O LITE 官方合作网站。"
  },
  "알림 신청은 아직 접수되지 않으며 이메일을 저장하거나 전송하지 않습니다.": {
    "en": "Notification requests are not being collected. No notification email is stored or sent.",
    "zh": "目前尚未接收通知申请，不会保存或发送通知申请邮箱。"
  },
  "원본 이미지와 영상에 포함된 문구는 원본 언어로 표시됩니다.": {
    "en": "Text embedded in original images and videos remains in its original language.",
    "zh": "原始图片与视频内嵌文字保留原语言。"
  },
  "필수 항목을 입력해 주세요.": {
    "en": "Please fill in this field.",
    "zh": "请填写此项。"
  },
  "올바른 이메일을 입력해 주세요.": {
    "en": "Please enter a valid email address.",
    "zh": "请输入有效的邮箱地址。"
  }
};
Object.assign(messages,{
  "WELCOME BACK": {
    "en": "WELCOME BACK",
    "zh": "欢迎回来"
  },
  "WELCOME TO BLOOM": {
    "en": "WELCOME TO BLOOM",
    "zh": "欢迎来到 BLOOM"
  },
  "MY BLOOM": {
    "en": "MY BLOOM",
    "zh": "我的 BLOOM"
  },
  "DRAWSTRING BAG": {
    "en": "DRAWSTRING BAG",
    "zh": "束口包"
  },
  "BLOOM MUG": {
    "en": "BLOOM MUG",
    "zh": "BLOOM 马克杯"
  },
  "CAMELLIA CAP": {
    "en": "CAMELLIA CAP",
    "zh": "山茶帽"
  },
  "CAMELLIA APRON": {
    "en": "CAMELLIA APRON",
    "zh": "山茶围裙"
  },
  "BLOOM TUMBLER": {
    "en": "BLOOM TUMBLER",
    "zh": "BLOOM 随行杯"
  },
  "03 / BLOOM GOODS SET": {
    "en": "03 / BLOOM GOODS SET",
    "zh": "03 / BLOOM 周边系列"
  },
  "01 / OUR LITTLE STORY": {
    "en": "01 / OUR LITTLE STORY",
    "zh": "01 / 我们的小故事"
  },
  "02 / MOMENTS IN DONGBAEK": {
    "en": "02 / MOMENTS IN DONGBAEK",
    "zh": "02 / 山茶村时光"
  },
  "04 / A FAIRY BECOMES A BLOOM": {
    "en": "04 / A FAIRY BECOMES A BLOOM",
    "zh": "04 / 精灵化作 BLOOM"
  },
  "A LITTLE VILLAGE, A NEW BLOOM": {
    "en": "A LITTLE VILLAGE, A NEW BLOOM",
    "zh": "小小村庄，崭新绽放"
  },
  "BE THE FIRST TO MEET BLOOM": {
    "en": "BE THE FIRST TO MEET BLOOM",
    "zh": "率先与 BLOOM 相遇"
  },
  "BLOOM / STORY PYRAMID": {
    "en": "BLOOM / STORY PYRAMID",
    "zh": "BLOOM / 故事金字塔"
  }
});
Object.assign(messages,{
  "이전 각도": {
    "en": "Previous angle",
    "zh": "上一个角度"
  },
  "다음 각도": {
    "en": "Next angle",
    "zh": "下一个角度"
  },
  "보기 각도": {
    "en": "Viewing angle",
    "zh": "查看角度"
  },
  "좌우로 드래그하거나 버튼으로 돌려보세요.": {
    "en": "Drag left or right, or use the arrows to rotate.",
    "zh": "左右拖动或使用箭头按钮旋转查看。"
  },
  "정면 보기": {
    "en": "Front view",
    "zh": "正面视图"
  }
});
Object.assign(messages,{
  "블룸이 피어나는 날,": {
    "en": "When bloom blossoms,",
    "zh": "当 bloom 绽放时，"
  },
  "가장 먼저 알려드릴게요.": {
    "en": "you will be the first to know.",
    "zh": "让你第一时间知道。"
  },
  "새로운 굿즈와 캠페인 소식을": {
    "en": "Discover new goods and campaign stories",
    "zh": "发现全新周边与活动动态，"
  },
  "너의 방식대로 만나보세요.": {
    "en": "in your own way.",
    "zh": "以你的方式相遇。"
  },
  "알림 받을 이메일": {
    "en": "Email for updates",
    "zh": "接收动态的邮箱"
  },
  "관심 있는 소식": {
    "en": "What interests you?",
    "zh": "感兴趣的动态"
  },
  "복수 선택 가능": {
    "en": "Choose more than one",
    "zh": "可多选"
  },
  "굿즈 출시": {
    "en": "Goods launches",
    "zh": "周边上新"
  },
  "캠페인 소식": {
    "en": "Campaign updates",
    "zh": "活动动态"
  },
  "체험 이야기": {
    "en": "Experience concepts",
    "zh": "体验构想"
  },
  "브랜드 이야기": {
    "en": "Brand stories",
    "zh": "品牌故事"
  },
  "관심 있는 소식을 하나 이상 선택해 주세요.": {
    "en": "Choose at least one topic.",
    "zh": "请至少选择一项感兴趣的动态。"
  },
  "시연 안내 확인에 체크해 주세요.": {
    "en": "Please confirm the prototype notice.",
    "zh": "请勾选确认原型说明。"
  },
  "교육용 시연이며 이메일이 저장·전송되지 않음을 확인했습니다.": {
    "en": "I understand this is an educational demo and my email will not be stored or sent.",
    "zh": "我已知悉此为教学演示，邮箱不会被保存或发送。"
  },
  "입력한 이메일은 저장하거나 전송하지 않습니다.": {
    "en": "Your email is not stored or transmitted.",
    "zh": "输入的邮箱不会被保存或发送。"
  },
  "시연을 완료했습니다. 실제 알림 신청은 접수되지 않았습니다.": {
    "en": "Demo complete. No real notification request was submitted.",
    "zh": "演示完成。未提交实际通知申请。"
  }
});
Object.assign(messages,{
  "너의 방식대로 피어나 — 동백마을 × A2O LITE 굿즈 5종 카드뉴스": {
    "en": "Bloom your way — Dongbaek Village × A2O LITE five-piece collection story card",
    "zh": "以你的方式绽放 — 山茶村 × A2O LITE 五款周边图文卡"
  }
});
Object.assign(messages,{
  "올 겨울, 동백숲": {
    "en": "This winter, in the camellia forest, ",
    "zh": "这个冬天，在山茶林里，"
  },
  "피크닉은 이렇게.": {
    "en": "a picnic like this.",
    "zh": "这样享受野餐。"
  },
  "동백이와 따뜻한 차 한 잔,": {
    "en": "A warm cup of tea with Dongbaeki, ",
    "zh": "与 Dongbaeki 共饮一杯暖茶，"
  },
  "숲의 고요를 느껴보세요.": {
    "en": "and a quiet moment in the forest.",
    "zh": "感受森林的静谧。"
  },
  "피크닉 콘셉트 이미지이며, 실제 운영 프로그램과 일정은 확정 후 안내합니다.": {
    "en": "Picnic concept image. Actual programs and schedules will be announced once confirmed.",
    "zh": "此为野餐概念图，实际项目与时间将在确定后公布。"
  },
  "동백숲에서 동백이와 함께 따뜻한 차를 마시며 쉬는 피크닉 콘셉트": {
    "en": "A picnic concept with Dongbaeki and a warm cup of tea in the camellia forest",
    "zh": "在山茶林中与 Dongbaeki 喝暖茶、休憩的野餐概念"
  },
  "출시 소식 준비 중": {
    "en": "Launch updates soon",
    "zh": "上新动态筹备中"
  }
});
Object.assign(messages,{
  "동백숲 피크닉은 이렇게": {
    "en": "A picnic in the camellia forest",
    "zh": "在山茶林里这样野餐"
  },
  "FOREST PICNIC": {
    "en": "FOREST PICNIC",
    "zh": "山茶林野餐"
  }
});
Object.assign(messages,{
  "지도에서 찾기": {
    "en": "Find on maps",
    "zh": "在地图上查找"
  },
  "새 창에서 열기": {
    "en": "Opens in a new tab",
    "zh": "在新标签页打开"
  },
  "구글지도에서 보기": {
    "en": "View on Google Maps",
    "zh": "在 Google 地图查看"
  },
  "네이버지도에서 보기": {
    "en": "View on Naver Map",
    "zh": "在 Naver 地图查看"
  },
  "교육용 가상 캠페인 · 공식 협업 아님": {
    "en": "Educational concept · Not an official collaboration",
    "zh": "教学虚拟活动 · 非官方合作"
  }
});
Object.assign(messages,{
  "콜라보": {
    "en": "Collaboration",
    "zh": "联名"
  },
  "동백마을": {
    "en": "Dongbaek Village",
    "zh": "山茶村"
  },
  "방문 안내": {
    "en": "Visit info",
    "zh": "到访指南"
  },
  "동백이와 함께 천천히 경험하는 마을.": {
    "en": "Discover the village slowly with Dongbaeki.",
    "zh": "与 Dongbaeki 慢慢体验村庄。"
  },
  "체험 장면 5가지": {
    "en": "Five experience scenes",
    "zh": "五种体验场景"
  },
  "옆으로 넘겨 체험 장면을 만나보세요.": {
    "en": "Swipe to explore the experience scenes.",
    "zh": "左右滑动，探索体验场景。"
  },
  "이전 체험": {
    "en": "Previous experience",
    "zh": "上一个体验"
  },
  "다음 체험": {
    "en": "Next experience",
    "zh": "下一个体验"
  },
  "이용 방법 보기": {
    "en": "View experience guide",
    "zh": "查看体验指南"
  },
  "이용 방법": {
    "en": "How to take part",
    "zh": "参与方式"
  },
  "체험 과정": {
    "en": "Experience steps",
    "zh": "体验过程"
  },
  "교육용 체험 콘셉트 안내입니다. 실제 프로그램·이용 조건·일정·가격은 확정 후 안내합니다.": {
    "en": "An educational experience concept. Actual programs, conditions, schedules and prices will be announced once confirmed.",
    "zh": "此为教学体验概念。实际项目、参与条件、时间及价格将在确定后公布。"
  },
  "동백마을의 다음 체험 소식, 가장 먼저 받아보세요.": {
    "en": "Be the first to hear about Dongbaek Village experiences.",
    "zh": "第一时间获取山茶村体验动态。"
  },
  "체험 소식 알림받기": {
    "en": "Get experience updates",
    "zh": "接收体验动态"
  },
  "동백숲 명상": {
    "en": "Camellia forest meditation",
    "zh": "山茶林冥想"
  },
  "숲의 소리에 귀 기울이며 천천히 쉬어 가는 시간.": {
    "en": "Slow down and rest with the sounds of the forest.",
    "zh": "聆听森林的声音，慢慢休憩。"
  },
  "안내된 숲길과 준비된 자리에서 편안한 자세로 참여하는 명상 콘셉트입니다.": {
    "en": "A meditation concept using a guided forest path and a prepared resting spot.",
    "zh": "沿指定林间小径，在准备好的位置以舒适姿势参与的冥想概念。"
  },
  "숲과 주변 풍경을 살펴보고 편안한 자리에 앉아요.": {
    "en": "Notice the forest and surroundings, then sit comfortably.",
    "zh": "观察森林与周围风景，舒适地坐下。"
  },
  "동백이와 함께 천천히 호흡하며 숲의 소리에 귀 기울여요.": {
    "en": "Breathe slowly with Dongbaeki and listen to the forest.",
    "zh": "与 Dongbaeki 缓缓呼吸，倾听森林。"
  },
  "느낀 점을 나누고 사용한 자리를 정리해요.": {
    "en": "Share your impressions and leave the space tidy.",
    "zh": "分享感受，整理使用过的位置。"
  },
  "동백씨앗 고르기": {
    "en": "Sorting camellia seeds",
    "zh": "挑选山茶种子"
  },
  "작은 씨앗을 살펴보며 동백의 다음 이야기를 만나요.": {
    "en": "Discover the next camellia story in a tiny seed.",
    "zh": "观察小小种子，邂逅山茶的下一个故事。"
  },
  "준비된 씨앗과 바구니를 사용해 씨앗의 모양과 껍질을 관찰하는 체험 콘셉트입니다.": {
    "en": "Explore the shapes and shells of prepared camellia seeds with baskets.",
    "zh": "使用准备好的种子与篮子，观察种子外形和外壳的体验概念。"
  },
  "바구니에 준비된 씨앗과 씨앗 껍질을 살펴봐요.": {
    "en": "Look at the prepared seeds and shells in the basket.",
    "zh": "观察篮中准备好的种子与种壳。"
  },
  "모양을 비교하며 씨앗과 껍질을 나누어 정리해요.": {
    "en": "Compare their shapes and separate seeds from shells.",
    "zh": "比较外形，将种子与种壳分类整理。"
  },
  "동백이가 담은 씨앗과 비교하며 관찰한 점을 이야기해요.": {
    "en": "Compare with Dongbaeki's seeds and share what you noticed.",
    "zh": "和 Dongbaeki 篮中的种子比较，分享观察。"
  },
  "동백이와 마을 산책": {
    "en": "Village walk with Dongbaeki",
    "zh": "与 Dongbaeki 漫步村庄"
  },
  "제주 돌담과 동백꽃 사이에서 만나는 작은 친구.": {
    "en": "A little friend among Jeju stone walls and camellias.",
    "zh": "在济州石墙与山茶花之间遇见小伙伴。"
  },
  "안내된 동선을 따라 마을을 둘러보고 동백이 소품과 사진을 남기는 산책 콘셉트입니다.": {
    "en": "A village walk concept along a guided route, with Dongbaeki props for photos.",
    "zh": "沿指定路线游览村庄，与 Dongbaeki 道具合影的漫步概念。"
  },
  "마을과 돌담 풍경을 살펴보며 천천히 걸어요.": {
    "en": "Walk slowly and notice the village and stone walls.",
    "zh": "慢慢行走，欣赏村庄与石墙风景。"
  },
  "준비된 동백이 소품과 함께 마음에 드는 장면을 사진으로 남겨요.": {
    "en": "Use the provided Dongbaeki prop to photograph a favorite moment.",
    "zh": "使用准备好的 Dongbaeki 道具，拍下喜欢的场景。"
  },
  "소품을 제자리에 두고 마을에서 발견한 풍경을 나눠요.": {
    "en": "Return the prop and share your village discoveries.",
    "zh": "将道具归位，分享在村庄里的发现。"
  },
  "동백이와 파스타 만들기": {
    "en": "Pasta making with Dongbaeki",
    "zh": "与 Dongbaeki 制作意面"
  },
  "제주의 온기를 담아 함께 만들고 맛보는 한 접시.": {
    "en": "Make and enjoy a plate filled with Jeju warmth.",
    "zh": "一起制作、品尝一盘充满济州温度的意面。"
  },
  "진행자의 안내로 재료와 조리도구를 확인하고 함께 파스타를 만드는 쿠킹 콘셉트입니다.": {
    "en": "A cooking concept where a host introduces ingredients and tools before making pasta together.",
    "zh": "在指导下了解食材与厨具，一起制作意面的烹饪概念。"
  },
  "손을 씻고 준비된 재료와 조리도구를 확인해요.": {
    "en": "Wash your hands and check the prepared ingredients and tools.",
    "zh": "洗手后确认准备好的食材与厨具。"
  },
  "안내에 따라 재료를 손질하고 면과 소스를 함께 조리해요.": {
    "en": "Follow the guidance to prepare ingredients and cook pasta with sauce.",
    "zh": "按照指导处理食材，烹调面条与酱汁。"
  },
  "완성한 파스타를 접시에 담고 함께 맛본 뒤 자리를 정리해요.": {
    "en": "Plate and taste the pasta together, then tidy the workspace.",
    "zh": "将意面装盘、一起品尝，然后整理操作台。"
  },
  "동백오일 추출하기": {
    "en": "Extracting camellia seed oil",
    "zh": "提取山茶油"
  },
  "동백씨앗에서 황금빛 오일까지, 마을의 손길을 따라가요.": {
    "en": "Follow village craft from camellia seed to golden oil.",
    "zh": "从山茶种子到金黄油液，感受村庄的手艺。"
  },
  "진행자와 함께 준비된 씨앗과 압착 도구를 살펴보는 동백오일 추출 콘셉트입니다.": {
    "en": "Explore prepared seeds and pressing tools with a host in this oil-extraction concept.",
    "zh": "与指导人员一起了解准备好的种子与压榨工具的山茶油提取概念。"
  },
  "준비된 씨앗을 살펴보고 압착 도구의 사용 안내를 들어요.": {
    "en": "Examine the seeds and listen to the tool instructions.",
    "zh": "观察种子，听取压榨工具的使用说明。"
  },
  "진행자의 안내에 따라 씨앗을 압착하고 흘러나오는 오일을 관찰해요.": {
    "en": "With the host's guidance, press the seeds and watch the oil emerge.",
    "zh": "在指导下压榨种子，观察流出的油液。"
  },
  "모인 오일의 색을 살펴보며 씨앗에서 오일이 되는 과정을 돌아봐요.": {
    "en": "Observe the collected oil's color and reflect on the seed-to-oil process.",
    "zh": "观察收集到的油液颜色，回顾从种子到油的过程。"
  }
});
Object.assign(messages, {
  "A2O LITE 그룹 사진": {
    "en": "A2O LITE group photo",
    "zh": "A2O LITE 团体合照"
  },
  "잔디에 앉은 핑크 동백꽃 캐릭터 동백이": {
    "en": "Dongbaeki, the pink camellia mascot sitting on grass",
    "zh": "坐在草地上的粉色山茶花角色冬柏"
  },
  "동백이": {
    "en": "Dongbaeki",
    "zh": "冬柏"
  },
  "자신만의 빛으로 피어나는 그룹. 동백마을에서 새로운 이야기를 만나요.": {
    "en": "A group that blooms in its own light. Discover new stories in Dongbaek Village.",
    "zh": "以自己的光芒绽放的团体。在山茶村邂逅新的故事。"
  },
  "동백꽃을 닮은 작은 친구. 마을의 풍경과 체험을 함께 발견해요.": {
    "en": "A little friend shaped like a camellia. Explore the village and its activities together.",
    "zh": "像山茶花一样的小伙伴，陪你发现村庄风景和体验。"
  },
  "BLOOM YOUR WAY — A2O LITE 멤버 세 명을 참고한 인물과 동백이의 동백마을 체험 연출 시안": {
    "en": "BLOOM YOUR WAY — imagined Dongbaek Village experiences with Dongbaeki and characters inspired by three A2O LITE members",
    "zh": "BLOOM YOUR WAY — 以三位 A2O LITE 成员为参考的人物与冬柏体验山茶村的概念图"
  },
  "동백마을과 A2O LITE는 그 마음을 일상으로 옮기는 콜라보레이션을 준비합니다. A2O LITE의 시선으로 마을을 만나고, 동백이와 함께 새로운 이야기를 발견해 보세요.": {
    "en": "Dongbaek Village and A2O LITE imagine bringing that feeling into everyday life. See the village through A2O LITE’s eyes and discover a new story with Dongbaeki.",
    "zh": "山茶村与 A2O LITE 构想将这份温暖带入日常。用 A2O LITE 的视角认识村庄，与冬柏一起发现新的故事。"
  }
});
Object.assign(messages, {
  "옆으로 넘겨 굿즈를 만나보세요.": {
    "en": "Swipe to explore the collection.",
    "zh": "左右滑动浏览周边商品。"
  },
  "이전 굿즈": {
    "en": "Previous item",
    "zh": "上一件商品"
  },
  "다음 굿즈": {
    "en": "Next item",
    "zh": "下一件商品"
  },
  "굿즈 5종": {
    "en": "Five goods",
    "zh": "五款周边商品"
  }
});

Object.assign(messages, {
  "동백씨앗 줍기 영상": {
    "en": "Picking camellia seeds video",
    "zh": "采集山茶种子视频"
  },
  "날 따라와 영상": {
    "en": "Follow Me video",
    "zh": "跟我来视频"
  },
  "날 따라와 영상 열기": {
    "en": "Open the Follow Me video",
    "zh": "打开跟我来视频"
  }
});

Object.assign(messages, {
  "공유하기": {
    "en": "Share",
    "zh": "分享"
  },
  "맨 위로": {
    "en": "Top",
    "zh": "回到顶部"
  },
  "링크를 복사했어요.": {
    "en": "Link copied.",
    "zh": "链接已复制。"
  },
  "공유하지 못했어요.": {
    "en": "Could not share.",
    "zh": "无法分享。"
  }
});

Object.assign(messages, { "4장의 이야기 보기 ↗": { en: "See the four stories ↗", zh: "查看四张故事卡 ↗" } });

Object.assign(messages, {
  "동백 씨앗과 동백오일 캐릭터": {
    "en": "Camellia seed and oil mascots",
    "zh": "山茶籽和山茶油角色"
  },
  "동백 씨앗과 동백오일": {
    "en": "Camellia seed and oil",
    "zh": "山茶籽与山茶油"
  },
  "작은 씨앗이 황금빛 오일이 되는 이야기를 들려줘요.": {
    "en": "They tell the story of a tiny seed becoming golden oil.",
    "zh": "讲述小小种子变成金色山茶油的故事。"
  }
});

export function translate(text: string, locale: Locale): string {
 if(locale==="ko")return text;
 const key=text.trim().replace(/\s+/g," ");
 const direct=messages[key];
 if(direct)return text.replace(text.trim(),direct[locale]);
 // Composed image descriptions contain a product name and a descriptive suffix.
 let output=text.replace(/(\d+)장:/g,(_,number)=>locale==="en"?"Story "+number+":":"第"+number+"张：");
 const keys=Object.keys(messages).filter(key=>key.length>=5).sort((a,b)=>b.length-a.length);
 for(const part of keys)if(output.includes(part))output=output.replaceAll(part,messages[part][locale]);
 return output;
}

