"use client";

import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";

import { FadeInSection } from "@/components/FadeInSection";
import { SectionTitle } from "@/components/SectionTitle";
import { journalCards } from "@/data/homeSections";
import { assetPath } from "@/lib/assets";

export function JournalMediaSection() {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [activePage, setActivePage] = useState(0);
  const [pageCount, setPageCount] = useState(1);

  const getScrollStep = () => {
    const carousel = carouselRef.current;
    const card = carousel?.querySelector<HTMLElement>(".journal-card");

    if (!carousel || !card) {
      return 1;
    }

    return card.offsetWidth + 24;
  };

  const getPageMetrics = () => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return { maxScroll: 0, pageTotal: 1, pageStep: 0 };
    }

    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    const pageTotal = Math.max(1, Math.ceil(maxScroll / getScrollStep()) + 1);
    const pageStep = pageTotal > 1 ? maxScroll / (pageTotal - 1) : 0;

    return { maxScroll, pageTotal, pageStep };
  };

  const scrollToPage = (index: number) => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    const { maxScroll, pageStep } = getPageMetrics();
    const targetLeft = Math.min(index * pageStep, maxScroll);

    carousel.scrollTo({
      left: targetLeft,
      behavior: "smooth",
    });
  };

  const scrollCards = (direction: "prev" | "next") => {
    const nextPage = direction === "next" ? Math.min(activePage + 1, pageCount - 1) : Math.max(activePage - 1, 0);

    scrollToPage(nextPage);
  };

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    const updateActiveIndex = () => {
      const { pageTotal, pageStep } = getPageMetrics();

      setPageCount(pageTotal);
      setActivePage(pageStep > 0 ? Math.min(Math.round(carousel.scrollLeft / pageStep), pageTotal - 1) : 0);
    };

    updateActiveIndex();
    window.addEventListener("resize", updateActiveIndex);
    carousel.addEventListener("scroll", updateActiveIndex, { passive: true });
    return () => {
      window.removeEventListener("resize", updateActiveIndex);
      carousel.removeEventListener("scroll", updateActiveIndex);
    };
  }, []);

  return (
    <FadeInSection className="section section--soft-glow">
      <div className="shell">
        <SectionTitle
          eyebrow="DOCTOR JOURNAL & MEDIA"
          title="닥터 저널 & 미디어"
          description="리겐의 진료 철학과 회복 중심 접근을 이해할 수 있는 콘텐츠를 모았습니다."
          align="center"
        />
        <div className="journal-carousel-wrap">
          <div className="journal-carousel-viewport">
            <div ref={carouselRef} className="journal-grid">
              {journalCards.map((item, index) => (
                <article
                  key={item.title}
                  className="journal-card"
                  style={{ "--reveal-delay": `${index * 80}ms` } as CSSProperties}
                >
                  <div className="journal-card__image">
                    <Image src={assetPath(item.image)} alt={item.alt} fill sizes="(max-width: 900px) 100vw, 32vw" />
                  </div>
                  <div className="journal-card__body">
                    <div className="journal-card__meta">
                      <span className="journal-card__pill">{item.category}</span>
                      <span>{item.date}</span>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                    <Link href="#" className="journal-card__link">
                      자세히 보기
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="carousel-dots carousel-dots--journal">
            <button type="button" aria-label="이전 저널 보기" onClick={() => scrollCards("prev")}>
              ‹
            </button>
            {Array.from({ length: pageCount }, (_, index) => (
              <button
                key={index}
                type="button"
                className={`carousel-dot ${activePage === index ? "is-active" : ""}`}
                aria-label={`${index + 1}번째 저널 페이지 보기`}
                aria-current={activePage === index ? "true" : undefined}
                onClick={() => scrollToPage(index)}
              />
            ))}
            <button type="button" aria-label="다음 저널 보기" onClick={() => scrollCards("next")}>
              ›
            </button>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}
