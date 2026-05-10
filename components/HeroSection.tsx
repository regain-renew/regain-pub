import Image from "next/image";
import Link from "next/link";

import { heroContent } from "@/data/homeSections";
import { assetPath } from "@/lib/assets";

export function HeroSection() {
  const titleLines = heroContent.title.split("\n");
  const koreanTitle = heroContent.koreanTitle.split("\n");

  return (
    <section className="hero-section">
      <Image
        className="hero-section__background"
        src={assetPath("/images/regain/hero-main-12.jpg")}
        alt="리겐의원 프리미엄 재생 클리닉 모델 이미지"
        fill
        sizes="100vw"
        priority
      />
      <div className="hero-section__overlay" aria-hidden="true" />
      <div className="shell hero-section__inner">
        <div className="hero-section__content" aria-label="리겐의원 메인 소개">
          <p className="hero-section__kicker">{koreanTitle[0]}</p>
          <h1>
            {titleLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          <p className="hero-section__korean">
            {koreanTitle.slice(1).map((line) => (
              <span key={line}>{line}</span>
            ))}
          </p>
          <p className="hero-section__description">{heroContent.description}</p>
          <div className="hero-section__actions">
            <Link href={heroContent.primaryCta.href} className="button button--primary">
              {heroContent.primaryCta.label}
            </Link>
            <Link href={heroContent.secondaryCta.href} className="button button--secondary">
              {heroContent.secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
