import Image from "next/image";
import Link from "next/link";

import { Footer } from "@/components/Footer";
import { FloatingQuickMenu } from "@/components/FloatingQuickMenu";
import { Header } from "@/components/Header";
import { SigScrollTrigger } from "@/components/SigScrollTrigger";
import { SigProgramsTabs } from "@/components/SigProgramsTabs";
import { assetPath } from "@/lib/assets";

/* ─────────────────────────────────────────────
   데이터
───────────────────────────────────────────── */
const concepts = [
  { icon: "/images/signature/icon12.png", title: "정밀 진단", desc: "개인의 상태를\n세심하게 확인합니다." },
  { icon: "/images/signature/icon09.png", title: "맞춤 설계", desc: "필요한 관리만\n과하지 않게 제안합니다." },
  { icon: "/images/signature/icon10.png", title: "회복 중심", desc: "컨디션 흐름을\n함께 봅니다." },
  { icon: "/images/signature/icon11.png", title: "지속 관리", desc: "시술 이후 변화와\n유지 관리까지 고려합니다." },
];

const processSteps = [
  { num: "01", icon: "/images/signature/icon11.png", title: "예약 및\n사전 상담", desc: "관심 부위와\n고민을 확인" },
  { num: "02", icon: "/images/signature/pr02.png",   title: "의료진\n상담",       desc: "상태와 관리\n목표를 상담" },
  { num: "03", icon: "/images/signature/pr04.png",   title: "정밀\n체크",         desc: "피부·두피·\n컨디션 체크" },
  { num: "04", icon: "/images/signature/pr03.png",   title: "맞춤 플랜\n설계",   desc: "적합한 관리\n방향 제안" },
  { num: "05", icon: "/images/signature/pr01.png",   title: "프로그램\n진행",     desc: "적합한 관리\n진행" },
  { num: "06", icon: "/images/signature/pr05.png",   title: "사후\n관리",         desc: "변화 흐름과\n유지 관리 안내" },
];

const whoNeeds = [
  "피부 탄력 저하와\n 노화 신호가 고민인 분",
  "단일 시술보다 종합적인\n 상담을 받고 싶은 분",
  "두피와 모발 컨디션\n 변화가 신경 쓰이는 분",
  "관절과 움직임의\n 컨디션 관리가 필요한 분",
  "개인 상태에 맞는\n 프라이빗 진료를 원하는 분",
  "과하지 않고 자연스러운\n 관리 방향을 찾는 분",
];

/* ─────────────────────────────────────────────
   페이지
───────────────────────────────────────────── */
export default function SignaturePage() {
  return (
    <div id="top">
      <Header />

      <main>

        {/* ── 01 HERO ─────────────────────────────── */}
        <section className="sig-hero">
          <Image
            src={assetPath("/images/signature/signature_hero.png")}
            alt=""
            fill
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center center" }}
            priority
            aria-hidden="true"
          />
          <div className="shell sig-hero__inner">
            <div className="sig-hero__content">
              <p className="hero-section__kicker">개인의 회복 흐름을 설계하는</p>
              <h1 className="sig-hero__title">
                <span>REGAIN</span>
                <span>SIGNATURE</span>
              </h1>
              <p className="sig-hero__desc">
                피부, 두피, 관절, 노화 신호를 개별 증상이 아닌 하나의 컨디션 흐름으로 바라보고,<br/>
                개인에게 맞는 정밀한 재생 관리를 제안합니다.
              </p>
              <div className="sig-hero__actions">
                <Link href="#private-appointment" className="button button--primary">프라이빗 상담 예약</Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 02 CONCEPT ──────────────────────────── */}
        <section className="sig-concept" data-sig-section>
          <SigScrollTrigger />
          <div className="sig-concept__bg" aria-hidden="true">
            <Image
              src={assetPath("/images/signature/background.png")}
              alt=""
              fill
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="shell">
            <div className="sig-section-head">
              <p className="sig-eyebrow">REGAIN SIGNATURE CONCEPT</p>
              <h2>단일 시술이 아닌, 회복 설계</h2>
              <p className="sig-section-head__desc sig-section-head__desc--dark">
                리겐의 시그니처 프로그램은 단순히 하나의 시술을 권하는 방식이 아닙니다.
                개인의 피부 상태, 두피 환경, 노화 신호, 생활 습관, 회복 속도까지 함께 살피고
                의료진 상담을 통해 적합한 관리 방향을 설계합니다.
              </p>
            </div>
            <div className="sig-concept__grid">
              {concepts.map((c) => (
                <div key={c.title} className="sig-concept-card">
                  <span className="sig-concept-card__icon">
                    <Image src={assetPath(c.icon)} alt={c.title} width={64} height={64} style={{ filter: "brightness(0) saturate(100%) invert(18%) sepia(20%) saturate(800%) hue-rotate(230deg)", opacity: 0.85 }} />
                  </span>
                  <h3 className="sig-concept-card__title">{c.title}</h3>
                  <p className="sig-concept-card__desc">
                    {c.desc.split("\n").map((line, i) => <span key={i}>{line}<br /></span>)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 03 PROGRAMS OVERVIEW ─────────────────── */}
        <section id="programs" className="sig-programs-overview" data-sig-section>
          <SigScrollTrigger />
          <Image
            src={assetPath("/images/signature/signature_program_background2.png")}
            alt=""
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
            aria-hidden="true"
          />
          <div className="shell" style={{ position: "relative", zIndex: 1 }}>
            <div className="sig-section-head sig-section-head--light">
              <p className="sig-eyebrow sig-eyebrow--light">SIGNATURE PROGRAMS</p>
              <h2 className="sig-heading--light">리겐의 3가지 시그니처 프로그램</h2>
              <p className="sig-section-head__desc">
                각 프로그램은 독립적으로 운영되며, 개인의 상태와 상담 결과에 따라 복합 구성도 가능합니다.
              </p>
            </div>
            <SigProgramsTabs />
          </div>
        </section>

        {/* ── 04 PROCESS + 08 WHO NEEDS (공유 배경) ── */}
        <div className="sig-process-who-wrap">
          <Image
            src={assetPath("/images/regain/background.png")}
            alt=""
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
            aria-hidden="true"
          />

          <section className="sig-process" data-sig-section>
            <SigScrollTrigger />
            <div className="shell">
              <div className="sig-section-head">
                <p className="sig-eyebrow">SIGNATURE PROCESS</p>
                <h2>리겐 시그니처 상담 프로세스</h2>
              </div>
              <div className="sig-process__flow">
                {processSteps.map((step, i) => (
                  <div key={step.num} className="sig-process__item">
                    <div className="sig-process__step">
                      <span className="sig-process__icon">
                        <Image src={assetPath(step.icon)} alt={step.title.replace("\n", " ")} width={48} height={48} style={{ objectFit: "contain" }} />
                      </span>
                      <span className="sig-process__num">{step.num}</span>
                      <h3 className="sig-process__title">
                        {step.title.split("\n").map((line, j) => <span key={j}>{line}</span>)}
                      </h3>
                      <p className="sig-process__desc">
                        {step.desc.split("\n").map((line, j) => <span key={j}>{line}</span>)}
                      </p>
                    </div>
                    {i < processSteps.length - 1 && (
                      <span className="sig-process__arrow" aria-hidden="true">→</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="sig-who" data-sig-section>
            <SigScrollTrigger />
            <div className="shell">
              <div className="sig-section-head">
                <p className="sig-eyebrow">WHO NEEDS SIGNATURE</p>
                <h2>이런 분께 권합니다</h2>
              </div>
              <ul className="sig-who__grid">
                {whoNeeds.map((item) => (
                  <li key={item} className="sig-who__item">
                    <span className="sig-who__check" aria-hidden="true">✓</span>
                    <span>
                      {item.split("\n").map((line, i) => (
                        <span key={i}>{line}<br /></span>
                      ))}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        {/* ── 09 NOTICE ───────────────────────────── */}
        <section className="sig-notice" data-sig-section>
          <SigScrollTrigger />
          <Image
            src={assetPath("/images/signature/notice-background.png")}
            alt=""
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
            aria-hidden="true"
          />
          <div className="shell">
            <p className="sig-notice__label">NOTICE</p>
            <h3 className="sig-notice__title">시그니처 프로그램 안내</h3>
            <ul className="sig-notice__list">
              <li>모든 프로그램은 개인의 상태와 상담 결과에 따라 적합 여부가 달라질 수 있습니다.</li>
              <li>시술 결과와 회복 기간은 개인에 따라 차이가 있을 수 있으며, 정확한 내용은 의료진 상담을 통해 안내됩니다.</li>
            </ul>
          </div>
        </section>

        {/* ── 10 FINAL CTA ────────────────────────── */}
        <section className="sig-cta" data-sig-section>
          <SigScrollTrigger />
          <Image
            src={assetPath("/images/regain/appointment-lobby.jpg")}
            alt=""
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
            aria-hidden="true"
          />
          <div className="sig-cta__overlay" aria-hidden="true" />
          <div className="shell sig-cta__inner">
            <p className="sig-eyebrow sig-eyebrow--light">PRIVATE SIGNATURE CONSULTING</p>
            <h2 className="sig-cta__title">
              나에게 맞는 시그니처 프로그램을<br />
              상담해보세요
            </h2>
            <p className="sig-cta__desc">
              피부, 두피, 관절, 노화 고민은 개인마다 원인과 흐름이 다릅니다.<br />
              리겐의원은 의료진 상담을 통해 개인에게 적합한 관리 방향을 안내합니다.
            </p>
            <div className="sig-cta__actions">
              <Link href="#private-appointment" className="sig-cta__btn sig-cta__btn--primary">
                프라이빗 상담 예약
              </Link>
              <Link href="#kakao-consult" className="sig-cta__btn sig-cta__btn--outline">
                💬 카카오 상담
              </Link>
              <Link href="#naver-booking" className="sig-cta__btn sig-cta__btn--outline">
                📅 네이버 예약
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <FloatingQuickMenu />
    </div>
  );
}
