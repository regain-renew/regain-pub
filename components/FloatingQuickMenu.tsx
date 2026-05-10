import Link from "next/link";

import { globalCtas } from "@/data/navigation";

const desktopItems = [...globalCtas.slice(1), { label: "TOP", href: "#top" }];
const mobileItems = [
  { label: "전화", href: globalCtas[3].href },
  { label: "카톡", href: globalCtas[1].href },
  { label: "예약", href: globalCtas[2].href },
  { label: "길찾기", href: globalCtas[4].href },
];

export function FloatingQuickMenu() {
  return (
    <>
      <aside className="floating-quick-menu" aria-label="빠른 상담 메뉴">
        {desktopItems.map((item) => (
          <Link key={item.label} href={item.href}>
            {item.label}
          </Link>
        ))}
      </aside>
      <div className="mobile-bottom-cta" aria-label="모바일 빠른 메뉴">
        {mobileItems.map((item) => (
          <Link key={item.label} href={item.href}>
            {item.label}
          </Link>
        ))}
      </div>
    </>
  );
}
