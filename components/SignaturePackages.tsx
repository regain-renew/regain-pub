"use client";

import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { useRef } from "react";

import { FadeInSection } from "@/components/FadeInSection";
import { SectionTitle } from "@/components/SectionTitle";
import { signaturePackages } from "@/data/homeSections";
import { assetPath } from "@/lib/assets";

export function SignaturePackages() {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const scrollCards = (direction: "prev" | "next") => {
    carouselRef.current?.scrollBy({
      left: direction === "next" ? 420 : -420,
      behavior: "smooth",
    });
  };

  return (
    <FadeInSection id="signature-packages" className="section section--soft section--waves">
      <div className="shell">
        <SectionTitle
          eyebrow="SIGNATURE PACKAGES"
          title="리겐의 시그니처 프로그램"
          description="단일 시술이 아닌, 개인의 상태를 종합적으로 고려한 맞춤형 재생 프로그램입니다."
          align="center"
        />
        <div className="carousel-shell">
          <button className="carousel-arrow carousel-arrow--prev" type="button" aria-label="이전 시그니처 보기" onClick={() => scrollCards("prev")}>
            ‹
          </button>
          <div ref={carouselRef} className="card-grid card-grid--three signature-carousel">
            {signaturePackages.map((item, index) => (
            <article key={item.title} className="feature-card" style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}>
              <span className="feature-card__number">0{index + 1}</span>
              <div className="feature-card__image">
                <Image src={assetPath(item.image)} alt={item.alt} fill sizes="(max-width: 900px) 100vw, 33vw" />
              </div>
              <div className="feature-card__body">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <Link href={item.href} className="feature-card__link">
                  자세히 보기 <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
          </div>
          <button className="carousel-arrow carousel-arrow--next" type="button" aria-label="다음 시그니처 보기" onClick={() => scrollCards("next")}>
            ›
          </button>
          <div className="carousel-dots" aria-hidden="true">
            <span className="is-active" />
            <span />
            <span />
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}
