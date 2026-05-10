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
      left: direction === "next" ? 380 : -380,
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
        <div className="sig-carousel-shell">
          <button
            className="carousel-arrow carousel-arrow--prev"
            type="button"
            aria-label="이전 시그니처 보기"
            onClick={() => scrollCards("prev")}
          >
            ‹
          </button>
          <div ref={carouselRef} className="sig-carousel">
            {signaturePackages.map((item, index) => (
              <article
                key={item.title}
                className="sig-card"
                style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
              >
                <Link href={item.href} className="sig-card__inner" aria-label={`${item.title} 자세히 보기`}>
                  <Image
                    src={assetPath(item.image)}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 900px) 80vw, 30vw"
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                  />
                  <div className="sig-card__overlay">
                    <span className="sig-card__number">0{index + 1}</span>
                    <h3 className="sig-card__title">
                      {item.title.split("\n").map((line, i) => (
                        <span key={i}>{line}</span>
                      ))}
                    </h3>
                    <p className="sig-card__desc">{item.body}</p>
                    <span className="sig-card__arrow" aria-hidden="true">→</span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
          <button
            className="carousel-arrow carousel-arrow--next"
            type="button"
            aria-label="다음 시그니처 보기"
            onClick={() => scrollCards("next")}
          >
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
