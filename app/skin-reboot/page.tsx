import Image from "next/image";
import Link from "next/link";

import { Footer } from "@/components/Footer";
import { FloatingQuickMenu } from "@/components/FloatingQuickMenu";
import { Header } from "@/components/Header";
import { SigScrollTrigger } from "@/components/SigScrollTrigger";
import { SkinConditionChecker } from "@/components/SkinConditionChecker";
import { assetPath } from "@/lib/assets";

/* ─────────────────────────────────────────────
   데이터
───────────────────────────────────────────── */
const solutions = [
  {
    num: "01",
    title: "스킨 부스터",
    desc: "피부 깊은 곳에 수분과 영양을 집중 공급하여 촉촉하고 윤기 있는 피부 컨디션을 회복합니다.",
    image: "/images/skin-reboot/solution-01.jpg",
    tags: ["수분 공급", "탄력 개선", "광채 회복"],
  },
  {
    num: "02",
    title: "바이오 스티뮬레이터",
    desc: "콜라겐 생성을 자극하여 피부 탄력을 근본적으로 개선하고, 자연스러운 볼륨과 윤곽을 되살립니다.",
    image: "/images/skin-reboot/solution-02.jpg",
    tags: ["콜라겐 재생", "탄력 회복", "볼륨 개선"],
  },
  {
    num: "03",
    title: "피부 레이저",
    desc: "색소 침착, 모공, 피부결 등 다양한 피부 고민을 레이저로 정밀하게 개선합니다.",
    image: "/images/skin-reboot/solution-03.jpg",
    tags: ["색소 개선", "모공 축소", "피부결 정돈"],
  },
  {
    num: "04",
    title: "스킨케어",
    desc: "피부 기초를 탄탄하게 다잡는 전문 케어로, 장기적인 피부 건강을 설계합니다.",
    image: "/images/skin-reboot/solution-04.jpg",
    tags: ["기초 케어", "피부 진정", "컨디션 유지"],
  },
];

const processSteps = [
  { num: "01", title: "피부 고민\n확인",    desc: "현재 피부 상태와\n고민 사항 파악" },
  { num: "02", title: "피부 상태\n체크",    desc: "피부 컨디션과\n변화 흐름 분석" },
  { num: "03", title: "의료진\n상담",        desc: "전문의 1:1\n심층 상담 진행" },
  { num: "04", title: "맞춤 솔루션\n설계",  desc: "적합한 케어\n방향 제안" },
  { num: "05", title: "프로그램\n진행",      desc: "안전하고 정밀한\n관리 진행" },
  { num: "06", title: "사후\n관리",          desc: "회복 흐름과\n유지 관리 안내" },
];

const whoNeeds = [
  "피부 탄력과 볼륨이\n눈에 띄게 줄어든 분",
  "건조하고 칙칙한 피부톤이\n고민인 분",
  "레이저나 시술 후 체계적인\n관리가 필요한 분",
  "모공·피지·트러블이\n반복되는 분",
  "자연스럽고 티 나지 않는\n피부 개선을 원하는 분",
  "피부 기초부터 다시\n설계하고 싶은 분",
];

/* ─────────────────────────────────────────────
   페이지
───────────────────────────────────────────── */
export default function SkinRebootPage() {
  return (
    <div id="top">
      <Header />

      <main>

        {/* ── 01 HERO ─────────────────────────────── */}
        <section className="sr-hero">
          <Image
            src={assetPath("/images/skin-reboot/hero.png")}
            alt=""
            fill
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center 30%" }}
            priority
            aria-hidden="true"
          />
          <div className="shell sr-hero__inner">
            <div className="sr-hero__content">
              <p className="sr-hero__kicker">무너진 피부 컨디션을 다시 설계하는</p>
              <h1 className="sr-hero__title">
                <span>REGAIN</span>
                <span>SKIN REBOOT</span>
              </h1>
              <p className="sr-hero__desc">
                피부 탄력, 수분, 톤 등 변화가 느껴질 때,<br />
                피부 상태와 생활 습관을 함께 살피고 적합한 관리 방향을 제안합니다.
              </p>
              <div className="sr-hero__actions">
                <Link href="#appointment" className="button button--primary">스킨 리부트 상담 예약</Link>
                <Link href="#solutions" className="button button--ghost">솔루션 알아보기</Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 02 SKIN CONDITION CHECK + 03 SOLUTION MATCHING ── */}
        <SkinConditionChecker />

        {/* ── 04 SOLUTIONS ────────────────────────── */}
        <section id="solutions" className="sr-solutions" data-sig-section>
          <SigScrollTrigger />
          <div className="shell">
            <div className="sr-section-head sr-section-head--light">
              <p className="sr-eyebrow sr-eyebrow--light">SKIN REBOOT SOLUTIONS</p>
              <h2>4가지 스킨 리부트 솔루션</h2>
              <p className="sr-section-head__desc">
                피부 고민의 원인에 따라 적합한 솔루션을 단독 또는 복합으로 구성합니다.
              </p>
            </div>
            <div className="sr-solutions__grid">
              {solutions.map((s) => (
                <div key={s.num} className="sr-solution-card">
                  <div className="sr-solution-card__image-wrap">
                    <Image
                      src={assetPath(s.image)}
                      alt={s.title}
                      fill
                      sizes="(max-width: 900px) 100vw, 25vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="sr-solution-card__body">
                    <span className="sr-solution-card__num">{s.num}</span>
                    <h3 className="sr-solution-card__title">{s.title}</h3>
                    <p className="sr-solution-card__desc">{s.desc}</p>
                    <div className="sr-solution-card__tags">
                      {s.tags.map((tag) => (
                        <span key={tag} className="sr-solution-card__tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 05 PROCESS ──────────────────────────── */}
        <section className="sr-process" data-sig-section>
          <SigScrollTrigger />
          <div className="shell">
            <div className="sr-section-head">
              <p className="sr-eyebrow">SKIN REBOOT PROCESS</p>
              <h2>리겐의 스킨 리부트 진행 프로세스</h2>
            </div>
            <div className="sr-process__flow">
              {processSteps.map((step, i) => (
                <div key={step.num} className="sr-process__item">
                  <div className="sr-process__step">
                    <span className="sr-process__num">{step.num}</span>
                    <h3 className="sr-process__title">
                      {step.title.split("\n").map((line, j) => <span key={j}>{line}</span>)}
                    </h3>
                    <p className="sr-process__desc">
                      {step.desc.split("\n").map((line, j) => <span key={j}>{line}</span>)}
                    </p>
                  </div>
                  {i < processSteps.length - 1 && (
                    <span className="sr-process__arrow" aria-hidden="true">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 06 WHO NEEDS + NOTICE ───────────────── */}
        <section className="sr-info" data-sig-section>
          <SigScrollTrigger />
          <div className="shell sr-info__inner">

            <div className="sr-who-col">
              <div className="sr-section-head sr-section-head--left">
                <p className="sr-eyebrow">WHO NEEDS SKIN REBOOT</p>
                <h2>이런 분께 권합니다</h2>
              </div>
              <ul className="sr-who__grid sr-who__grid--col">
                {whoNeeds.map((item) => (
                  <li key={item} className="sr-who__item">
                    <span className="sr-who__check" aria-hidden="true">✓</span>
                    <span>
                      {item.split("\n").map((line, i) => (
                        <span key={i}>{line}<br /></span>
                      ))}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sr-notice-col">
              <p className="sr-notice__label">NOTICE</p>
              <h3 className="sr-notice__title">스킨 리부트 프로그램 안내</h3>
              <ul className="sr-notice__list">
                <li>모든 시술은 개인의 피부 상태와 상담 결과에 따라 적합 여부가 달라질 수 있습니다.</li>
                <li>시술 결과와 회복 기간은 개인에 따라 차이가 있을 수 있으며, 정확한 내용은 의료진 상담을 통해 안내됩니다.</li>
              </ul>
            </div>

          </div>
        </section>

        {/* ── 07 FINAL CTA ────────────────────────── */}
        <section className="sr-cta" id="appointment" data-sig-section>
          <SigScrollTrigger />
          <Image
            src={assetPath("/images/regain/appointment-lobby.jpg")}
            alt=""
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
            aria-hidden="true"
          />
          <div className="sr-cta__overlay" aria-hidden="true" />
          <div className="shell sr-cta__inner">
            <p className="sr-eyebrow sr-eyebrow--light">SKIN REBOOT CONSULTING</p>
            <h2 className="sr-cta__title">
              나에게 맞는 스킨 리부트 프로그램을<br />
              상담해보세요
            </h2>
            <p className="sr-cta__desc">
              피부 고민은 개인마다 원인과 흐름이 다릅니다.<br />
              리겐의원은 의료진 상담을 통해 개인에게 적합한 관리 방향을 안내합니다.
            </p>
            <div className="sr-cta__cards">
              <a href="tel:0212345678" className="sr-cta-card">
                <span className="sr-cta-card__icon">📞</span>
                <span className="sr-cta-card__label">전화 상담</span>
                <span className="sr-cta-card__sub">02-1234-5678</span>
              </a>
              <a href="#kakao-consult" className="sr-cta-card">
                <span className="sr-cta-card__icon">💬</span>
                <span className="sr-cta-card__label">카카오 상담</span>
                <span className="sr-cta-card__sub">채널 바로가기</span>
              </a>
              <a href="#naver-booking" className="sr-cta-card">
                <span className="sr-cta-card__icon">📅</span>
                <span className="sr-cta-card__label">네이버 예약</span>
                <span className="sr-cta-card__sub">간편하게 예약</span>
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <FloatingQuickMenu />
    </div>
  );
}
