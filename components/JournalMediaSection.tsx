"use client";

import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { useRef } from "react";

import { FadeInSection } from "@/components/FadeInSection";
import { SectionTitle } from "@/components/SectionTitle";
import { journalCards } from "@/data/homeSections";
import { assetPath } from "@/lib/assets";

export function JournalMediaSection() {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const scrollCards = (direction: "prev" | "next") => {
    carouselRef.current?.scrollBy({
      left: direction === "next" ? 360 : -360,
      behavior: "smooth",
    });
  };

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
          <div ref={carouselRef} className="journal-grid">
          {journalCards.slice(0, 4).map((item, index) => (
            <article key={item.title} className="journal-card" style={{ "--reveal-delay": `${index * 80}ms` } as CSSProperties}>
              <div className="journal-card__image">
                <Image src={assetPath(item.image)} alt={item.alt} fill sizes="(max-width: 900px) 100vw, 25vw" />
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
          <div className="carousel-dots carousel-dots--journal" aria-hidden="true">
            <button type="button" aria-label="이전 저널 보기" onClick={() => scrollCards("prev")}>‹</button>
            <span className="is-active" />
            <span />
            <button type="button" aria-label="다음 저널 보기" onClick={() => scrollCards("next")}>›</button>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}
