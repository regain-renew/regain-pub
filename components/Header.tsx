"use client";

import Link from "next/link";
import { useState } from "react";

import { globalCtas, navigationItems } from "@/data/navigation";
import { MegaDropdown } from "@/components/MegaDropdown";

const expandableMenus = navigationItems.filter((item) => item.children?.length);

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const [activeDesktopMenu, setActiveDesktopMenu] = useState<string | null>(null);
  const activeItem = navigationItems.find((item) => item.label === activeDesktopMenu);

  return (
    <header className="site-header" onMouseLeave={() => setActiveDesktopMenu(null)}>
      <div className="shell site-header__inner">
        <Link href="/" className="site-logo" aria-label="REGAIN CLINIC 홈">
          <span className="site-logo__mark" aria-hidden="true">
            R
          </span>
          <span className="site-logo__text">
            <span className="site-logo__main">REGAIN CLINIC</span>
            <span className="site-logo__sub">리겐의원</span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="주요 메뉴">
          {navigationItems.map((item) => (
            <div key={item.label} className="desktop-nav__item">
              <Link
                href={item.href}
                className={`desktop-nav__link ${
                  activeDesktopMenu === item.label ? "desktop-nav__link--active" : ""
                }`}
                onMouseEnter={() => setActiveDesktopMenu(item.children?.length ? item.label : null)}
                onFocus={() => setActiveDesktopMenu(item.children?.length ? item.label : null)}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </nav>

        <div className="site-header__cta">
          <Link href={globalCtas[0].href} className="button button--primary button--sm">
            {globalCtas[0].label}
          </Link>
          <Link href={globalCtas[3].href} className="icon-cta" aria-label={globalCtas[3].label}>
            <span aria-hidden="true">☎</span>
          </Link>
          <Link href={globalCtas[4].href} className="icon-cta" aria-label={globalCtas[4].label}>
            <span aria-hidden="true">⌖</span>
          </Link>
          <button
            type="button"
            className="mobile-menu-button"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            <span>{mobileMenuOpen ? "Close" : "Menu"}</span>
          </button>
        </div>
      </div>

      {activeItem?.children?.length ? <MegaDropdown item={activeItem} /> : null}

      <div
        id="mobile-navigation"
        className={`mobile-menu ${mobileMenuOpen ? "mobile-menu--open" : ""}`}
      >
        <div className="shell mobile-menu__inner">
          <Link href="/" className="mobile-menu__home" onClick={() => setMobileMenuOpen(false)}>
            HOME
          </Link>
          {expandableMenus.map((item) => {
            const isExpanded = expandedMenu === item.label;
            return (
              <div key={item.label} className="mobile-menu__group">
                <button
                  type="button"
                  className="mobile-menu__trigger"
                  aria-expanded={isExpanded}
                  onClick={() => setExpandedMenu(isExpanded ? null : item.label)}
                >
                  <span>{item.label}</span>
                  <span aria-hidden="true">{isExpanded ? "−" : "+"}</span>
                </button>
                <div className={`mobile-menu__panel ${isExpanded ? "is-open" : ""}`}>
                  {item.children?.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="mobile-menu__link"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
          <div className="mobile-menu__global-cta">
            {globalCtas.map((cta) => (
              <Link key={cta.label} href={cta.href} onClick={() => setMobileMenuOpen(false)}>
                {cta.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
