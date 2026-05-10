export type NavItem = {
  label: string;
  href: string;
  description: string;
  children?: Array<{ label: string; href: string }>;
};

export const navigationItems: NavItem[] = [
  {
    label: "HOME",
    href: "/",
    description: "리겐의 프리미엄 재생 피부 솔루션을 한눈에 소개합니다.",
  },
  {
    label: "SIGNATURE",
    href: "/signature",
    description: "전신의학 기반 정밀 재생과 부위별 맞춤 프로그램",
    children: [
      { label: "전신의학 기반 정밀 재생", href: "/signature" },
      { label: "부위별 맞춤 줄기세포", href: "/signature#stemcell-care" },
      { label: "두피 모발 재생 클리닉", href: "/signature#hair-regain" },
    ],
  },
  {
    label: "SKIN REBOOT",
    href: "/skin-reboot",
    description: "피부 재생과 정밀 강화를 위한 프리미엄 케어",
    children: [
      { label: "스킨 부스터", href: "/skin-reboot#booster" },
      { label: "바이오 스티뮬레이터", href: "/skin-reboot#bio-stimulator" },
      { label: "피부 레이저", href: "/skin-reboot#laser" },
      { label: "스킨케어", href: "/skin-reboot#skincare" },
    ],
  },
  {
    label: "ANTI-AGING",
    href: "/anti-aging",
    description: "탄력과 윤곽을 함께 고려한 안티에이징 프로그램",
    children: [
      { label: "써마지 FLX", href: "/anti-aging#thermage" },
      { label: "슈링크 유니버스 & 셀바이브 LDM", href: "/anti-aging#shrinking-ldm" },
      { label: "프리미엄 특수 실리프팅", href: "/anti-aging#thread-lifting" },
    ],
  },
  {
    label: "CONTOURING",
    href: "/contouring",
    description: "얼굴형과 바디 밸런스를 고려한 맞춤 관리",
    children: [
      { label: "얼굴형 교정", href: "/contouring#face-balance" },
      { label: "비만 관리", href: "/contouring#weight-care" },
      { label: "바디 부분 쉐이핑", href: "/contouring#body-shaping" },
    ],
  },
];

export const globalCtas = [
  { label: "Private Appointment", href: "#private-appointment" },
  { label: "카카오 상담", href: "#kakao-consult" },
  { label: "네이버 예약", href: "#naver-booking" },
  { label: "전화 문의", href: "tel:02-1234-5678" },
  { label: "길찾기", href: "#directions" },
];
