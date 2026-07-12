export type Language = "en" | "ko";

export const siteCopy = {
  en: {
    nav: { residents: "Residents", protocol: "Protocol", events: "Events", guestbook: "Guestbook", contact: "Contact", meet: "Meet the house" },
    hero: {
      label: "VYV HOUSE", title: "Live close.", subtitle: "Build with focus.", description: "A builder residency in Seoul.",
      online: "residents online", headline: "Build alongside people who care about the work.", body: "Shared meals, direct feedback, deep focus, and enough room for ambitious ideas to become real.", location: "Seoul, South Korea", cta: "View the album",
    },
    proof: { format: "format", residents: "residents", location: "operating from", status: "status", residency: "Builder residency", people: "people in process", city: "Seoul, South Korea", open: "Open to collabs" },
    story: { headline: "A house should make good work easier.", p1: "We believe proximity creates momentum—not through mandatory networking, but through shared meals, direct feedback, and enough quiet to do the work.", p2: "VYV is intentionally small. Residents bring a project, respect the house, and leave something useful behind.", signal: ["Part home,", "part lab,", "always alive."], signalBody: "Experiments, conversations, and shared context accumulate here." },
    residents: { kicker: "RUNNING PROCESSES", headline: "People building from the house.", body: "Real people, real work. Follow the source, inspect what they are making, or come say hello.", online: "residents online", areas: "Areas of work" },
    guestbook: { kicker: "APPEND-ONLY MEMORY", headline: "Notes left at the house.", body: "Every visitor changes the room a little. These are traces from builders who passed through.", status: "STATUS / POSTED", guest: "Guest" },
    protocol: {
      kicker: "HOW WE OPERATE", headline: "Small rules for a high-trust room.", body: "No grand manifesto. Just a few defaults that make living and building together work.",
      rules: [
        ["01", "Bring a project", "Come with something you want to move forward, not a polished pitch."],
        ["02", "Respect the runtime", "Protect quiet hours, shared space, and the attention of people around you."],
        ["03", "Share the diff", "Offer context, useful feedback, and what you learned while building."],
        ["04", "Leave it better", "A prototype, a lesson, a clean kitchen, or a new connection all count."],
      ],
      rhythms: [
        { command: "ship --late", label: "Late-night shipping", detail: "Tiny experiments become working products before the room goes quiet." },
        { command: "research --together", label: "Research jams", detail: "Papers, prompts, and rabbit holes turn into shared context." },
        { command: "demo --dinner", label: "Demo dinners", detail: "Friends drop in, share progress, and pressure-test what matters." },
        { command: "sprint --resident", label: "Resident sprints", detail: "Different projects, one room, and momentum that travels sideways." },
      ],
    },
    events: { label: "events / calendar", next: "what is", done: "what is", nextHighlight: "happening next", doneHighlight: "already done", upcomingBody: "Upcoming dinners, demo nights, and resident sprints, synced directly from Luma.", pastBody: "A running log of nights, jams, and gatherings that have already gone down at vyv.house.", emptyTitle: "No upcoming events", emptyBody: "The next dinner, demo night, or resident sprint will appear here as soon as it is published.", hostedBy: "Hosted by" },
    contact: { label: "NEW SESSION?", headline: "Build from here.", body: "Applications, collaborations, visits, and dinner conversations all start with context.", location: "Seoul / exact location shared privately", listed: "Residents listed publicly", visits: "Visits open by context", footer: "A living system for people who build." },
  },
  ko: {
    nav: { residents: "거주자", protocol: "생활 원칙", events: "이벤트", guestbook: "방명록", contact: "연락하기", meet: "하우스 둘러보기" },
    hero: {
      label: "VYV HOUSE", title: "가까이 살고.", subtitle: "깊이 몰입합니다.", description: "서울의 빌더 레지던시.",
      online: "명이 함께하는 중", headline: "좋은 작업을 진심으로 대하는 사람들과 함께 만드세요.", body: "함께 식사하고, 솔직히 피드백하고, 깊이 몰입하며, 큰 아이디어가 현실이 될 충분한 공간을 나눕니다.", location: "대한민국 서울", cta: "앨범 보기",
    },
    proof: { format: "형태", residents: "거주자", location: "위치", status: "상태", residency: "빌더 레지던시", people: "명이 만드는 중", city: "대한민국 서울", open: "협업 열려 있음" },
    story: { headline: "집은 좋은 작업을 더 쉽게 만들어야 합니다.", p1: "우리는 가까이 지내는 데서 추진력이 생긴다고 믿습니다. 억지스러운 네트워킹이 아니라 함께하는 식사, 솔직한 피드백, 그리고 작업에 집중할 충분한 고요함을 통해서요.", p2: "VYV는 의도적으로 작게 운영합니다. 거주자는 움직이고 싶은 프로젝트를 가져오고, 집을 존중하며, 다음 사람에게 유용한 무언가를 남깁니다.", signal: ["집이자,", "연구실이고,", "늘 살아 있는 곳."], signalBody: "실험과 대화, 함께 쌓은 맥락이 이곳에 축적됩니다." },
    residents: { kicker: "진행 중인 사람들", headline: "이 집에서 만드는 사람들.", body: "실제 사람과 실제 작업을 소개합니다. 무엇을 만들고 있는지 살펴보고 편하게 인사해 주세요.", online: "명이 함께하는 중", areas: "작업 분야" },
    guestbook: { kicker: "차곡차곡 쌓이는 기억", headline: "하우스에 남겨진 기록.", body: "모든 방문자는 공간을 조금씩 바꿉니다. 이곳을 지나간 빌더들이 남긴 흔적입니다.", status: "상태 / 게시됨", guest: "방문자" },
    protocol: {
      kicker: "우리가 함께하는 방식", headline: "신뢰 높은 공간을 위한 작은 원칙.", body: "거창한 선언은 없습니다. 함께 살고 만들기 위해 필요한 몇 가지 기본값만 둡니다.",
      rules: [
        ["01", "프로젝트를 가져오세요", "완성된 발표가 아니라 앞으로 움직이고 싶은 무언가와 함께 오세요."],
        ["02", "하우스의 리듬을 존중하세요", "조용한 시간과 공용 공간, 곁에 있는 사람들의 집중을 지켜 주세요."],
        ["03", "변화의 맥락을 나누세요", "만들며 얻은 배움과 유용한 피드백, 필요한 맥락을 나눠 주세요."],
        ["04", "조금 더 나은 상태로 남기세요", "프로토타입, 배운 점, 깨끗한 주방, 새로운 연결 모두 좋습니다."],
      ],
      rhythms: [
        { command: "ship --late", label: "늦은 밤의 출시", detail: "작은 실험이 공간이 조용해지기 전 작동하는 제품으로 바뀝니다." },
        { command: "research --together", label: "함께하는 리서치 잼", detail: "논문과 프롬프트, 깊은 탐색이 모두의 맥락으로 이어집니다." },
        { command: "demo --dinner", label: "데모 디너", detail: "친구들이 들러 진행 상황을 나누고 중요한 가정을 함께 검증합니다." },
        { command: "sprint --resident", label: "거주자 스프린트", detail: "서로 다른 프로젝트가 한 공간에서 옆으로 전해지는 추진력을 얻습니다." },
      ],
    },
    events: { label: "이벤트 / 캘린더", next: "다음에는", done: "함께한", nextHighlight: "무엇이 열릴까요", doneHighlight: "지난 시간들", upcomingBody: "다가오는 저녁 모임, 데모 나이트, 거주자 스프린트를 Luma에서 바로 가져옵니다.", pastBody: "VYV House에서 열렸던 밤, 잼 세션, 모임을 차곡차곡 기록합니다.", emptyTitle: "예정된 이벤트가 없습니다", emptyBody: "다음 저녁 모임, 데모 나이트, 거주자 스프린트가 공개되는 즉시 이곳에 표시됩니다.", hostedBy: "호스트" },
    contact: { label: "새로운 세션?", headline: "여기서 시작하세요.", body: "입주 지원, 협업, 방문, 저녁 대화는 모두 서로의 맥락을 나누는 데서 시작합니다.", location: "서울 / 정확한 위치는 개별 안내", listed: "거주자 명단 공개", visits: "맥락이 맞는 방문 환영", footer: "만드는 사람들을 위한 살아 있는 시스템." },
  },
} as const;

export const residentCopyKo: Record<string, { role: string; description: string }> = {
  "simon-kim": { role: "창립 거주자", description: "AI 네이티브 제품과 커뮤니티, 인터넷 문화가 어떻게 함께 성장할 수 있는지 탐구하는 운영자이자 빌더, 시스템 사상가입니다." },
  "woonggi-min": { role: "빌더 거주자", description: "개발자 도구와 로컬 서빙 워크플로, 실용적인 AI 시스템을 탐구하는 소프트웨어 엔지니어입니다." },
  "lukas-lee": { role: "빌더 거주자", description: "서울에서 제품 코드와 JavaScript 도구, 실용적인 백엔드 인프라를 만드는 소프트웨어 엔지니어입니다." },
  "chanyoung-park": { role: "빌더 거주자", description: "제품 관점으로 프론트엔드와 백엔드, 클라우드 인프라 전반을 다루는 풀스택 엔지니어입니다." },
  ggos3: { role: "빌더 거주자", description: "가벼운 실험과 실용적인 코드를 공유하며 작은 것을 빠르게 출시하는 데 관심이 많은 빌더입니다." },
  soju06: { role: "빌더 거주자", description: "토큰을 태우고 API를 연결합니다. 멀티 계정 LLM 로드 밸런서, 한국 주식 거래 API, 비서명 커널 드라이버처럼 어쩌면 존재하면 안 될 도구를 만듭니다." },
  "jeonghwan-park": { role: "빌더 거주자", description: "코드와 리서치, 빠른 반복을 오가며 AI 제품과 모델 워크플로, 소프트웨어 실험을 탐구합니다." },
};
