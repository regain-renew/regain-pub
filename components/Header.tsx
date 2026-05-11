"use client";

import Link from "next/link";
import { useState } from "react";

import { globalCtas, navigationItems } from "@/data/navigation";
import { MegaDropdown } from "@/components/MegaDropdown";

const expandableMenus = navigationItems.filter((item) => item.children?.length);
const languageOptions = [
  { code: "KR", label: "한국어" },
  { code: "EN", label: "English" },
  { code: "CN", label: "中文" },
  { code: "JP", label: "日本語" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const [activeDesktopMenu, setActiveDesktopMenu] = useState<string | null>(null);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0]);
  const activeItem = navigationItems.find((item) => item.label === activeDesktopMenu);

  const selectLanguage = (language: (typeof languageOptions)[number]) => {
    setSelectedLanguage(language);
    setLanguageOpen(false);
  };

  return (
    <header
      className="site-header"
      onMouseLeave={() => {
        setActiveDesktopMenu(null);
        setLanguageOpen(false);
      }}
    >
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
          <div className="language-selector">
            <button
              type="button"
              className="language-selector__button"
              aria-haspopup="listbox"
              aria-expanded={languageOpen}
              onClick={() => setLanguageOpen((open) => !open)}
            >
              <span>{selectedLanguage.code}</span>
              <span aria-hidden="true">▾</span>
            </button>
            {languageOpen ? (
              <div className="language-selector__menu" role="listbox" aria-label="언어 선택">
                {languageOptions.map((language) => (
                  <button
                    key={language.code}
                    type="button"
                    className={`language-selector__option ${
                      selectedLanguage.code === language.code ? "is-active" : ""
                    }`}
                    role="option"
                    aria-selected={selectedLanguage.code === language.code}
                    onClick={() => selectLanguage(language)}
                  >
                    <span>{language.code}</span>
                    <span>{language.label}</span>
                  </button>
                ))}
              </div>
            ) : null}
          </div>
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
          <div className="mobile-language" aria-label="언어 선택">
            {languageOptions.map((language) => (
              <button
                key={language.code}
                type="button"
                className={`mobile-language__button ${
                  selectedLanguage.code === language.code ? "is-active" : ""
                }`}
                onClick={() => selectLanguage(language)}
              >
                {language.code}
              </button>
            ))}
          </div>
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
