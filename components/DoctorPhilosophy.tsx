import Image from "next/image";
import Link from "next/link";

import { FadeInSection } from "@/components/FadeInSection";
import { SectionTitle } from "@/components/SectionTitle";
import { assetPath } from "@/lib/assets";

export function DoctorPhilosophy() {
  return (
    <FadeInSection className="section section--tinted section--philosophy">
      <div className="shell">
        <div className="philosophy">
          <div className="philosophy__portrait">
            <Image
              src={assetPath("/images/regain/doctor-main.jpg")}
              alt="리겐의원 대표원장"
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
            />
          </div>
          <div className="philosophy__content">
            <SectionTitle
              eyebrow="DOCTOR’S PHILOSOPHY"
              title={"빠른 변화보다\n정확한 판단을\n먼저 생각합니다"}
            />
            <div className="philosophy__copy">
              <p>
                응급의학 20년의 임상 경험을 바탕으로<br />
                개인의 피부 상태와 전신 컨디션을 함께 고려합니다.
              </p>
              <p>
                단순히 시술을 제공하는 것이 아니라, 각 개인의 상태를 정밀하게 진단하고<br/>
                안전을 최우선으로 하는 맞춤형 솔루션을 설계합니다.
              </p>
            </div>
            <div className="philosophy__career">
              <div className="philosophy__career-label">주요 경력</div>
              <ul className="philosophy__career-list">
                <li>응급의학 전문의 (20년 임상 경험)</li>
                <li>재생의학 전문 클리닉 운영</li>
                <li>줄기세포 치료 연구 및 임상</li>
              </ul>
            </div>
            <Link href="/signature" className="philosophy__cta">
              원장 철학 더 보기
              <span className="philosophy__cta-arrow">→</span>
            </Link>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}
