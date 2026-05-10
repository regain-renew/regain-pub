import Image from "next/image";
import Link from "next/link";

import { FadeInSection } from "@/components/FadeInSection";
import { SectionTitle } from "@/components/SectionTitle";
import { philosophyPoints } from "@/data/homeSections";
import { assetPath } from "@/lib/assets";

export function DoctorPhilosophy() {
  return (
    <FadeInSection className="section section--tinted section--philosophy">
      <div className="shell">
        <div className="philosophy">
          <div className="philosophy__portrait">
            <Image
              src={assetPath("/images/regain/doctor.jpg")}
              alt="리겐의원 대표원장"
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
            />
          </div>
          <div className="philosophy__content">
            <SectionTitle eyebrow="DOCTOR’S PHILOSOPHY" title="회복을 설계하는 재생 클리닉, REGAIN" />
            <div className="philosophy__copy">
              <p>응급의학 20년의 임상 경험을 바탕으로, 정밀 진단과 과하지 않은 맞춤 설계를 지향합니다.</p>
              <p>단순히 시술을 더하는 것이 아니라, 개개인의 회복 여정을 함께 설계합니다.</p>
            </div>
            <div className="pill-list">
              {philosophyPoints.map((point) => (
                <span key={point} className="pill-list__item">
                  {point}
                </span>
              ))}
            </div>
            <Link href="/signature" className="button button--secondary">
              원장 철학 보기
            </Link>
          </div>
        </div>

      </div>
    </FadeInSection>
  );
}
