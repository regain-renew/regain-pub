import Image from "next/image";
import Link from "next/link";

import { Footer } from "@/components/Footer";
import { FloatingQuickMenu } from "@/components/FloatingQuickMenu";
import { Header } from "@/components/Header";
import { SigProgramsTabs } from "@/components/SigProgramsTabs";
import { assetPath } from "@/lib/assets";

/* ─────────────────────────────────────────────
   데이터
───────────────────────────────────────────── */
const concepts = [
  { icon: "/images/regain/icons/sig/concept-diagnosis.png", title: "정밀 진단", desc: "개인의 상태를\n세심하게 확인합니다." },
  { icon: "/images/regain/icons/sig/concept-plan.png",      title: "맞춤 설계", desc: "필요한 관리만\n과하지 않게 제안합니다." },
  { icon: "/images/regain/icons/sig/concept-recovery.png",  title: "회복 중심", desc: "컨디션 흐름을\n함께 봅니다." },
  { icon: "/images/regain/icons/sig/concept-ongoing.png",   title: "지속 관리", desc: "시술 이후 변화와\n유지 관리까지 고려합니다." },
];



const processSteps = [
  { num: "01", icon: "/images/regain/icons/sig/process-booking.png",   title: "예약 및\n사전 상담", desc: "관심 부위와\n고민을 확인" },
  { num: "02", icon: "/images/regain/icons/sig/process-consult.png",   title: "의료진\n상담",       desc: "상태와 관리\n목표를 상담" },
  { num: "03", icon: "/images/regain/icons/sig/process-check.png",     title: "정밀\n체크",         desc: "피부·두피·\n컨디션 체크" },
  { num: "04", icon: "/images/regain/icons/sig/process-design.png",    title: "맞춤 플랜\n설계",   desc: "적합한 관리\n방향 제안" },
  { num: "05", icon: "/images/regain/icons/sig/process-treatment.png", title: "프로그램\n진행",     desc: "적합한 관리\n진행" },
  { num: "06", icon: "/images/regain/icons/sig/process-aftercare.png", title: "사후\n관리",         desc: "변화 흐름과\n유지 관리 안내" },
];

const whoNeeds = [
  "피부 탄력 저하와 노화 신호가 고민인 분",
  "단일 시술보다 종합적인 상담을 받고 싶은 분",
  "두피와 모발 컨디션 변화가 신경 쓰이는 분",
  "관절과 움직임의 컨디션 관리가 필요한 분",
  "개인 상태에 맞는 프라이빗 진료를 원하는 분",
  "과하지 않고 자연스러운 관리 방향을 찾는 분",
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
          {/* 배경 사진 */}
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
                피부, 두피, 관절, 노화 신호를 개별 증상이 아닌 하나의 컨디션 흐름으로 바라보고,
                개인에게 맞는 정밀한 재생 관리를 제안합니다.
              </p>
              <div className="sig-hero__actions">
                <Link href="#private-appointment" className="button button--primary">프라이빗 상담 예약</Link>
                {/*<Link href="#programs" className="button button--secondary sig-hero__btn-outline">프로그램 보기</Link>*/}
              </div>
            </div>
          </div>
        </section>

        {/* ── 02 CONCEPT ──────────────────────────── */}
        <section className="sig-concept">
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
        <section id="programs" className="sig-programs-overview">
          <div className="shell">
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

        {/* ── 04 PROGRAM 01 ───────────────────────── */}
        <section id="program-01" className="sig-prog-detail">
          <div className="shell sig-prog-detail__inner">
            <div className="sig-prog-detail__image-wrap">
              <Image
                src={assetPath("/images/regain/doctor-main.jpg")}
                alt="전신의학 기반 정밀 재생 진료 장면"
                fill
                sizes="(max-width: 900px) 100vw, 45vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="sig-prog-detail__content">
              <p className="sig-eyebrow">PROGRAM 01</p>
              <h2 className="sig-prog-detail__title">전신의학 기반<br />정밀 재생</h2>
              <p className="sig-prog-detail__lead">
                피부와 몸의 변화를 따로 보지 않고, 전체 컨디션의 흐름 속에서 회복 방향을 설계합니다.
              </p>
              <p className="sig-prog-detail__body">
                피부 탄력 저하, 피로감, 회복 속도 저하, 노화 신호는 단순히 피부 표면의 문제만으로 나타나지 않을 수 있습니다.
                리겐의 전신의학 기반 정밀 재생 프로그램은 개인의 전반적인 컨디션과 회복 흐름을 함께 고려하여 필요한 관리 방향을 제안합니다.
              </p>
              <div className="sig-mini-cards">
                {[
                  { title: "컨디션 체크", desc: "개인의 피부·두피·생활 패턴을\n함께 확인합니다." },
                  { title: "정밀 상담", desc: "의료진 상담을 통해 적합한\n관리 방향을 설정합니다." },
                  { title: "회복 플랜", desc: "지속 가능한\n관리 흐름을 설계합니다." },
                ].map((c) => (
                  <div key={c.title} className="sig-mini-card">
                    <h4 className="sig-mini-card__title">{c.title}</h4>
                    <p className="sig-mini-card__desc">
                      {c.desc.split("\n").map((line, i) => <span key={i}>{line}<br /></span>)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 05 PROGRAM 02 ───────────────────────── */}
        <section id="program-02" className="sig-prog-detail sig-prog-detail--tinted sig-prog-detail--reverse">
          <div className="shell sig-prog-detail__inner">
            <div className="sig-prog-detail__content">
              <p className="sig-eyebrow">PROGRAM 02</p>
              <h2 className="sig-prog-detail__title">부위별 맞춤<br />줄기세포 프로그램</h2>
              <p className="sig-prog-detail__lead">
                피부, 두피, 관절 등 관심 부위와 상태에 따라 맞춤형 관리 방향을 상담합니다.
              </p>
              <p className="sig-prog-detail__body">
                리겐은 관심 부위와 개인의 컨디션을 함께 살피고, 의료진 상담을 통해 적합한 재생 관리 방향을 안내합니다.
                피부 탄력, 두피 환경, 관절 컨디션 등 각 부위별 고민에 맞춰 세심한 상담과 관리 계획을 제공합니다.
              </p>
              <div className="sig-mini-cards sig-mini-cards--four">
                {[
                  { title: "피부", desc: "탄력, 건조감, 노화 신호를\n고려한 관리" },
                  { title: "두피", desc: "두피 환경과 모발 컨디션을\n고려한 관리" },
                  { title: "관절", desc: "관절과 움직임의 컨디션을\n고려한 관리" },
                  { title: "바디", desc: "전반적인 컨디션과\n회복 흐름을 고려한 관리" },
                ].map((c) => (
                  <div key={c.title} className="sig-mini-card">
                    <h4 className="sig-mini-card__title">{c.title}</h4>
                    <p className="sig-mini-card__desc">
                      {c.desc.split("\n").map((line, i) => <span key={i}>{line}<br /></span>)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="sig-prog-detail__image-wrap">
              <Image
                src={assetPath("/images/regain/signature-stemcell.jpg")}
                alt="부위별 맞춤 줄기세포 프로그램"
                fill
                sizes="(max-width: 900px) 100vw, 45vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </section>

        {/* ── 06 PROGRAM 03 ───────────────────────── */}
        <section id="program-03" className="sig-prog-detail">
          <div className="shell sig-prog-detail__inner">
            <div className="sig-prog-detail__image-wrap">
              <Image
                src={assetPath("/images/regain/signature-skin.jpg")}
                alt="두피·모발 재생 클리닉"
                fill
                sizes="(max-width: 900px) 100vw, 45vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="sig-prog-detail__content">
              <p className="sig-eyebrow">PROGRAM 03</p>
              <h2 className="sig-prog-detail__title">두피·모발<br />재생 클리닉</h2>
              <p className="sig-prog-detail__lead">
                두피 환경과 모발 컨디션을 함께 살피고, 개인에게 맞는 관리 방향을 제안합니다.
              </p>
              <p className="sig-prog-detail__body">
                두피와 모발의 변화는 생활 습관, 스트레스, 피부 상태, 개인의 컨디션과 함께 나타날 수 있습니다.
                리겐은 두피 환경과 모발 상태를 세심하게 확인하고, 의료진 상담을 통해 적합한 관리 계획을 안내합니다.
              </p>
              <div className="sig-mini-cards">
                {[
                  { title: "두피 환경 체크", desc: "두피 상태와 민감도,\n건조감 등을 확인합니다." },
                  { title: "모발 컨디션 상담", desc: "모발 밀도와\n변화 양상을 상담합니다." },
                  { title: "맞춤 관리 계획", desc: "개인 상태에 따라 적합한\n관리 방향을 제안합니다." },
                ].map((c) => (
                  <div key={c.title} className="sig-mini-card">
                    <h4 className="sig-mini-card__title">{c.title}</h4>
                    <p className="sig-mini-card__desc">
                      {c.desc.split("\n").map((line, i) => <span key={i}>{line}<br /></span>)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 07 PROCESS ──────────────────────────── */}
        <section className="sig-process">
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

        {/* ── 08 WHO NEEDS ────────────────────────── */}
        <section className="sig-who">
          <div className="shell">
            <div className="sig-section-head">
              <p className="sig-eyebrow">WHO NEEDS SIGNATURE</p>
              <h2>이런 분께 권합니다</h2>
            </div>
            <ul className="sig-who__grid">
              {whoNeeds.map((item) => (
                <li key={item} className="sig-who__item">
                  <span className="sig-who__check" aria-hidden="true">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── 09 NOTICE ───────────────────────────── */}
        <section className="sig-notice">
          <div className="shell">
            <p className="sig-notice__label">NOTICE</p>
            <p className="sig-notice__text">
              모든 프로그램은 개인의 상태와 상담 결과에 따라 적합 여부가 달라질 수 있습니다.<br />
              시술 결과와 회복 기간은 개인에 따라 차이가 있을 수 있으며,
              정확한 내용은 의료진 상담을 통해 안내됩니다.
            </p>
          </div>
        </section>

        {/* ── 10 FINAL CTA ────────────────────────── */}
        <section className="sig-cta">
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
