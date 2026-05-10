import Link from "next/link";

import type { NavItem } from "@/data/navigation";

type MegaDropdownProps = {
  item: NavItem;
};

export function MegaDropdown({ item }: MegaDropdownProps) {
  if (!item.children?.length) {
    return null;
  }

  return (
    <div className="mega-dropdown" role="group" aria-label={`${item.label} submenu`}>
      <div className="shell mega-dropdown__inner">
        <div className="mega-dropdown__intro">
          <p className="mega-dropdown__eyebrow">{item.label}</p>
          <p>{item.description}</p>
        </div>
        <div className="mega-dropdown__links">
          {item.children.map((child) => (
            <Link key={child.label} href={child.href} className="mega-dropdown__link">
              <span>{child.label}</span>
              <span aria-hidden="true">›</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
