import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

import { FadeInSection } from "@/components/FadeInSection";
import { SectionTitle } from "@/components/SectionTitle";
import { signaturePackages } from "@/data/homeSections";
import { assetPath } from "@/lib/assets";

export function SignaturePackages() {
  return (
    <FadeInSection id="signature-packages" className="section section--soft section--waves">
      <div className="shell">
        <SectionTitle
          eyebrow="SIGNATURE PACKAGES"
          title="리겐의 시그니처 프로그램"
          description="단일 시술이 아닌, 개인의 상태를 종합적으로 고려한 맞춤형 재생 프로그램입니다."
          align="center"
        />
        <div className="sig-grid">
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
                  sizes="(max-width: 900px) 80vw, 33vw"
                  style={{ objectFit: "cover", objectPosition: "center center" }}
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
      </div>
    </FadeInSection>
  );
}
