import Image from "next/image";
import Link from "next/link";

import { Footer } from "@/components/Footer";
import { FloatingQuickMenu } from "@/components/FloatingQuickMenu";
import { Header } from "@/components/Header";
import { SigScrollTrigger } from "@/components/SigScrollTrigger";
import { assetPath } from "@/lib/assets";

/* ─────────────────────────────────────────────
   데이터
───────────────────────────────────────────── */
const guideCards = [
  { cond: "탄력이 문제라면",          name: "써마지 FLX",        sub: "진피층 고주파 타이트닝",    tagsText: "피부 탄력 · 잔주름 · 피부 밀도", icon: "/images/signature/icon04.png", anchor: "#thermage", scheme: "thermage" },
  { cond: "라인이 무너졌다면",        name: "슈링크 유니버스",   sub: "SMAS 근막층 초음파 리프팅", tagsText: "이중턱 · 턱선 · 윤곽 라인",    icon: "/images/signature/icon02.png", anchor: "#shurink",  scheme: "shurink"  },
  { cond: "피부 컨디션이 흔들린다면", name: "LDM 리프팅",        sub: "물방울 재생 리프팅",        tagsText: "수분 · 장벽 · 피부 컨디션",    icon: "/images/signature/icon07.png", anchor: "#ldm",      scheme: "ldm"      },
];

const deviceCards = [
  { num: "01", name: "써마지 FLX",        sub: "진피층 고주파 타이트닝",     tags: ["잔주름", "피부 밀도", "탄력"],         anchor: "#thermage", image: "/images/anti-aging/thermage_machine.png", scheme: "thermage" },
  { num: "02", name: "슈링크 유니버스",   sub: "SMAS 근막층 초음파 리프팅",  tags: ["이중턱", "윤곽", "V라인"],             anchor: "#shurink",  image: "/images/anti-aging/shrink_machine.png",    scheme: "shurink"  },
  { num: "03", name: "LDM 초음파 리프팅", sub: "물방울 재생 리프팅",         tags: ["수분", "장벽", "피부 컨디션"],         anchor: "#ldm",      image: "/images/anti-aging/ldm_machine.png",       scheme: "ldm"      },
];

const solutions = [
  {
    id: "shurink", num: "01", sub: "HIFU 초음파 리프팅", name: "슈링크 유니버스", enName: "SHURINK UNIVERSE",
    desc: "섬세한 초음파 에너지로\n처진 라인을 자연스럽게 끌어올립니다.",
    image: "/images/anti-aging/shrink_machine.png",
    bgImage: "/images/anti-aging/machine_card01.png",
    reverse: true,
    infos: [
      { label: "시술시간", value: "30~40분" }, { label: "마취", value: "크림마취" },
      { label: "회복",     value: "즉시 가능" }, { label: "효과발현", value: "2주 후 점진적" },
    ],
    principle: "고강도 집속 초음파(HIFU)를 SMAS 근막층에 전달, 열 응고점 형성으로 조직 수축을 유도합니다.",
  },
  {
    id: "thermage", num: "02", sub: "프리미엄 고주파 리프팅", name: "써마지 FLX", enName: "THERMAGE FLX",
    desc: "모노폴라 고주파가 피부 속 깊은 곳까지 작용해\n콜라겐을 재생하고 탄력을 개선합니다.",
    image: "/images/anti-aging/thermage_machine.png",
    bgImage: "/images/anti-aging/machine_card02.png",
    reverse: false,
    infos: [
      { label: "시술시간", value: "40~60분" }, { label: "마취", value: "연고·수면마취" },
      { label: "효과발현", value: "1~3개월" }, { label: "유지기간", value: "약 1년" },
    ],
    principle: "고주파(RF) 열에너지를 진피층에 전달하여 피부 탄력과 밀도감을 타이트닝합니다.",
  },
  {
    id: "ldm", num: "03", sub: "물방울 재생 리프팅", name: "LDM 초음파 리프팅", enName: "LDM ULTRASOUND",
    desc: "초음파 에너지가 피부 재생을 촉진하고\n피부 컨디션을 근본적으로 개선합니다.",
    image: "/images/anti-aging/ldm_machine.png",
    bgImage: "/images/anti-aging/machine_card03.png",
    reverse: true,
    infos: [
      { label: "시술시간", value: "12/24분 선택" }, { label: "마취", value: "없음" },
      { label: "회복",     value: "즉시 가능" },
    ],
    principle: "고밀도 초음파 교차 조사로 피부 내 수분 환경과 장벽 컨디션을 관리합니다.",
    quote: "리프팅 전, 피부 컨디션을 먼저 끌어올리는 시술",
  },
];

const threadInfos = [
  { label: "시술 시간", value: "30~60분" },
  { label: "마취",     value: "국소/수면마취" },
  { label: "회복",     value: "일상생활 가능\n개인차 있음" },
  { label: "유지기간", value: "6개월~1년\n개인차 있음" },
];

const threadTypes = [
  { name: "민트 리프트",   sub: "양방향 콘 실",     desc: "고정력과 리프팅력이 강함",              img01: "/images/anti-aging/mint-01.png",       img02: "/images/anti-aging/mint-02.png"       },
  { name: "실루엣 소프트", sub: "콘 구조 흡수성 실", desc: "자연스러운 리프팅\n+ 콜라겐 재생",       img01: "/images/anti-aging/silhouette-01.png", img02: "/images/anti-aging/silhouette-02.png" },
  { name: "테스리프트",   sub: "특수 구조 실",      desc: "면적 리프팅\n+ 세밀한 위치 조정",        img01: "/images/anti-aging/tess-01.png",       img02: "/images/anti-aging/tess-02.png"       },
];

const knowhows = [
  { num: "01", title: "1:1 맞춤 설계",       desc: "실의 종류를 먼저 선택하지 않습니다. 처짐 방향, 피부 두께, 볼륨 분포 분석 후 개인별 얼굴 구조에 맞춰 리프팅을 설계합니다." },
  { num: "02", title: "자연스러운 리프팅",   desc: "과하게 당기는 방식이 아닌 필요한 부위에 필요한 만큼만 적용하여 부자연스럽지 않은 인상 변화를 지향합니다." },
  { num: "03", title: "복합 안티에이징 설계", desc: "실리프팅을 단독이 아닌 레이저, 스킨부스터 등과 함께 설계하여 얼굴 전체의 균형과 완성도를 고려합니다." },
];

const recommended = [
  "볼 처짐과 이중턱으로\n얼굴선 정리가 필요한 분",
  "턱선이 흐려지고\n얼굴 라인이 무너진 느낌이 드는 분",
  "잔주름, 모공, 피부결,\n탄력 저하가 함께 고민인 분",
  "수술이나 절개 없이\n리프팅 관리를 원하는 분",
  "피부가 얇거나 예민해\n리프팅 선택이 고민되는 분",
  "자연스럽고 정돈된\n인상 변화를 원하는 분",
];

const notices = [
  "시술 후 일시적인 붓기, 멍, 당김, 열감, 건조감 등이 나타날 수 있으며 대부분 시간이 지나며 완화됩니다.",
  "시술 부위를 강하게 문지르거나 압박하는 행동은 피하는 것이 좋습니다.",
  "시술 후 일정 기간 사우나, 찜질방, 격한 운동, 음주 및 흡연은 피하는 것이 권장됩니다.",
  "개인의 피부 상태, 처짐 정도, 시술 부위에 따라 시술 가능 여부와 회복 기간은 달라질 수 있습니다.",
  "정확한 내용은 의료진 상담을 통해 안내됩니다.",
];


/* ─────────────────────────────────────────────
   페이지
───────────────────────────────────────────── */
export default function AntiAgingPage() {
  return (
    <div id="top">
      <Header />

      <main>

        {/* ── 01 HERO ─────────────────────────────── */}
        <section className="aa-hero">
          <Image
            src={assetPath("/images/anti-aging/anti-aging_hero.png")}
            alt="" fill sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center 20%" }}
            priority aria-hidden="true"
          />
          <div className="aa-hero__overlay" aria-hidden="true" />
          <div className="shell aa-hero__inner">
            <div className="aa-hero__content">
              <p className="aa-hero__kicker">단순히 당기는 것이 아닌, 구조를 복원하는</p>
              <h1 className="aa-hero__title">
                <span>REGAIN</span>
                <span>ANTI-AGING</span>
              </h1>
              <p className="aa-hero__tags">#써마지 #슈링크 #LDM #리프팅레이저 #구조설계 #복합리프팅</p>
              <div className="aa-hero__actions">
                <Link href="#appointment" className="button button--primary">상담 예약하기</Link>
                <Link href="#guide" className="button button--ghost">나에게 맞는 리프팅 찾기</Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 02 LIFTING GUIDE ────────────────────── */}
        <section id="guide" className="aa-guide" data-sig-section>
          <SigScrollTrigger />
          <div className="shell aa-guide__inner">
            <div className="aa-guide__header">
              <p className="aa-eyebrow">LIFTING GUIDE</p>
              <h2>어떤 리프팅이<br />나에게 맞을까요?</h2>
              <p className="aa-guide__desc">고민에 따라 적합한 리프팅을<br />먼저 선택해보세요.</p>
              <Link href="#comparison" className="aa-guide__cta">비교표 보기 →</Link>
            </div>
            <div className="aa-guide__cards">
              {guideCards.map((c) => (
                <div key={c.name} className={`aa-guide-card aa-guide-card--${c.scheme}`}>
                  <div className="aa-guide-card__icon-wrap">
                    <Image src={assetPath(c.icon)} alt="" width={36} height={36} style={{ objectFit: "contain" }} aria-hidden="true" />
                  </div>
                  <p className="aa-guide-card__cond">{c.cond}</p>
                  <h3 className="aa-guide-card__name">{c.name}</h3>
                  <p className="aa-guide-card__sub">{c.sub}</p>
                  <p className="aa-guide-card__tags-text">{c.tagsText}</p>
                  <Link href={c.anchor} className="aa-guide-card__arrow" aria-label={`${c.name} 자세히 보기`}>›</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 03 DEVICE LIFTING SOLUTIONS ─────────── */}
        <section className="aa-devices" data-sig-section>
          <SigScrollTrigger />
          <div className="shell aa-devices__inner">
            <div className="aa-devices__header">
              <p className="aa-eyebrow aa-eyebrow--light">DEVICE LIFTING SOLUTIONS</p>
              <h2>리겐의 리프팅<br />솔루션</h2>
              <p className="aa-devices__desc">피부층과 고민에 맞춰<br />가장 적합한 솔루션을 선택하세요.</p>
              <Link href="#comparison" className="aa-devices__cta">비교표 보기 →</Link>
            </div>
            <div className="aa-devices__cards">
              {deviceCards.map((d) => (
                <div key={d.num} className={`aa-device-card aa-device-card--${d.scheme}`}>
                  <div className="aa-device-card__top">
                    <div className="aa-device-card__content">
                      <span className="aa-device-card__num">{d.num}</span>
                      <h3 className="aa-device-card__name">{d.name}</h3>
                      <p className="aa-device-card__sub">{d.sub}</p>
                      <div className="aa-device-card__tags">
                        {d.tags.map((t) => <span key={t} className="aa-device-card__tag">{t}</span>)}
                      </div>
                    </div>
                    <div className="aa-device-card__image-wrap">
                      <Image
                        src={assetPath(d.image)}
                        alt={d.name}
                        fill
                        sizes="(max-width: 900px) 50vw, 20vw"
                        style={{ objectFit: "contain", objectPosition: "center bottom" }}
                      />
                    </div>
                  </div>
                  <div className="aa-device-card__bottom">
                    <Link href={d.anchor} className="aa-device-card__link">자세히 보기 →</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 04 MACHINE SOLUTIONS ────────────────── */}
        <section className="aa-machines" data-sig-section>
          <SigScrollTrigger />
          <div className="shell">
            <div className="aa-section-head">
              <p className="aa-eyebrow">LIFTING SOLUTIONS</p>
              <h2>리겐의 안티에이징 솔루션</h2>
            </div>
            <div className="aa-machines__list">
              {solutions.map((s) => (
                <div
                  key={s.id} id={s.id}
                  className={`aa-machine-card${s.reverse ? " aa-machine-card--reverse" : ""}`}
                >
                  {/* 배경 이미지 */}
                  <Image
                    src={assetPath(s.bgImage)}
                    alt="" fill
                    sizes="100vw"
                    style={{ objectFit: "cover" }}
                    aria-hidden="true"
                  />
                  {/* 텍스트 영역 */}
                  <div className="aa-machine-card__body">
                    <span className="aa-machine-card__num">{s.num}</span>
                    <h3 className="aa-machine-card__name">{s.name}</h3>
                    <p className="aa-machine-card__en">{s.enName}</p>
                    <p className="aa-machine-card__desc">
                      {s.desc.split("\n").map((line, i) => <span key={i}>{line}<br /></span>)}
                    </p>
                    <div className="aa-machine-card__infos">
                      {s.infos.map((info) => (
                        <div key={info.label} className="aa-machine-card__info">
                          <span className="aa-machine-card__info-label">{info.label}</span>
                          <span className="aa-machine-card__info-value">{info.value}</span>
                        </div>
                      ))}
                    </div>
                    {/*{s.quote && (*/}
                    {/*  <div className="aa-machine-card__comment">*/}
                    {/*    <span className="aa-machine-card__comment-label">DOCTOR'S COMMENT</span>*/}
                    {/*    <p className="aa-machine-card__comment-text">{s.quote}</p>*/}
                    {/*  </div>*/}
                    {/*)}*/}
                  </div>
                  {/* 머신 사진 */}
                  <div className="aa-machine-card__photo">
                    <Image
                      src={assetPath(s.image)}
                      alt={s.name}
                      fill
                      sizes="(max-width: 900px) 80vw, 40vw"
                      style={{ objectFit: "contain", objectPosition: "center bottom" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 05 THREAD LIFTING ───────────────────── */}
        <section id="thread" className="aa-thread" data-sig-section>
          <SigScrollTrigger />
          <Image
            src={assetPath("/images/anti-aging/thread_lifting_bg.png")}
            alt="" fill sizes="100vw"
            style={{ objectFit: "cover" }}
            aria-hidden="true"
          />
          <div className="shell aa-thread__inner">
            <div className="aa-thread__text">
              <p className="aa-eyebrow">THREAD LIFTING</p>
              <h2 className="aa-thread__title">실리프팅</h2>
              <p className="aa-thread__tagline">
                내 얼굴형에 꼭 맞춘 완벽한 텐션,<br />
                1줄의 차이가 완성하는 디테일
              </p>
              <div className="aa-thread__infos">
                {threadInfos.map((info) => (
                  <div key={info.label} className="aa-thread__info-item">
                    <span className="aa-thread__info-label">{info.label}</span>
                    <span className="aa-thread__info-value">
                      {info.value.split("\n").map((line, i) => <span key={i}>{line}<br /></span>)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="aa-thread__quote-box">
              <p className="aa-thread__quote-title">"같은 얼굴은 없습니다"</p>
              <p className="aa-thread__quote-body">
                실리프팅은 같은 실을 사용하는 시술이 아니라 얼굴의 상태에 따라 설계가 달라지는 시술입니다.<br /><br />
                리겐은 처짐의 방향·깊이, 피부 두께, 지방층 위치, 볼륨 분포, 얼굴선 균형을 분석 후 실의 종류와 삽입 방향을 설계합니다.
              </p>
            </div>
          </div>
        </section>

        {/* ── 06 THREAD TYPES ─────────────────────── */}
        <section className="aa-thread-types" data-sig-section>
          <SigScrollTrigger />
          <div className="shell">
            <div className="aa-section-head">
              <p className="aa-eyebrow">THREAD TYPES</p>
              <h2>리겐의 실리프팅 종류</h2>
            </div>
            <div className="aa-thread-types__list">
              {threadTypes.map((t) => (
                <div key={t.name} className="aa-thread-type-card">
                  {/* -02 이미지 */}
                  <div className="aa-thread-type-card__img02">
                    <Image
                      src={assetPath(t.img02)}
                      alt={t.name}
                      fill
                      sizes="(max-width: 900px) 40vw, 28vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  {/* 텍스트 */}
                  <div className="aa-thread-type-card__body">
                    <h3 className="aa-thread-type-card__name">{t.name}</h3>
                    <div className="aa-thread-type-card__divider" aria-hidden="true" />
                    <p className="aa-thread-type-card__sub">{t.sub}</p>
                    <p className="aa-thread-type-card__desc">
                      {t.desc.split("\n").map((line, i) => <span key={i}>{line}<br /></span>)}
                    </p>
                  </div>
                  {/* -01 이미지 */}
                  <div className="aa-thread-type-card__img01">
                    <Image
                      src={assetPath(t.img01)}
                      alt={`${t.name} 상세`}
                      fill
                      sizes="(max-width: 900px) 40vw, 28vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 07 LIFTING KNOW-HOW ─────────────────── */}
        <section className="aa-knowhow" data-sig-section>
          <SigScrollTrigger />
          <Image
            src={assetPath("/images/regain/background.png")}
            alt="" fill sizes="100vw"
            style={{ objectFit: "cover" }}
            aria-hidden="true"
          />
          <div className="shell aa-knowhow__inner">
            <div className="aa-section-head">
              <p className="aa-eyebrow">REGAIN LIFTING KNOW-HOW</p>
              <h2>리겐 실리프팅 노하우</h2>
            </div>
            <div className="aa-knowhow__grid">
              {knowhows.map((k) => (
                <div key={k.num} className="aa-knowhow-card">
                  <span className="aa-knowhow-card__num">{k.num}</span>
                  <h3 className="aa-knowhow-card__title">{k.title}</h3>
                  <p className="aa-knowhow-card__desc">{k.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 08 RECOMMENDED ──────────────────────── */}
        <section className="aa-recommended" data-sig-section>
          <SigScrollTrigger />
          <div className="shell">
            <div className="aa-section-head">
              <p className="aa-eyebrow">RECOMMENDED</p>
              <h2>이런 분께 추천합니다</h2>
            </div>
            <ul className="aa-recommended__grid">
              {recommended.map((item) => (
                <li key={item} className="aa-recommended__item">
                  <span className="aa-recommended__check" aria-hidden="true">✓</span>
                  <span>
                    {item.split("\n").map((line, i) => <span key={i}>{line}<br /></span>)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── 09 NOTICE ───────────────────────────── */}
        <section className="aa-notice" data-sig-section>
          <SigScrollTrigger />
          <Image
            src={assetPath("/images/signature/notice-background.png")}
            alt="" fill sizes="100vw"
            style={{ objectFit: "cover" }}
            aria-hidden="true"
          />
          <div className="shell aa-notice__inner">
            <p className="aa-notice__label">NOTICE</p>
            <h3 className="aa-notice__title">안티에이징 프로그램 안내</h3>
            <ul className="aa-notice__list">
              {notices.map((n) => <li key={n}>{n}</li>)}
            </ul>
          </div>
        </section>

        {/* ── 10 FINAL CTA ────────────────────────── */}
        <section className="aa-cta" id="appointment" data-sig-section>
          <SigScrollTrigger />
          <Image
            src={assetPath("/images/regain/appointment-lobby.jpg")}
            alt="" fill sizes="100vw"
            style={{ objectFit: "cover" }}
            aria-hidden="true"
          />
          <div className="aa-cta__overlay" aria-hidden="true" />
          <div className="shell aa-cta__inner">
            <p className="aa-eyebrow aa-eyebrow--light">PRIVATE LIFTING CONSULTING</p>
            <h2 className="aa-cta__title">
              나에게 맞는 리프팅 솔루션을<br />상담해보세요
            </h2>
            <p className="aa-cta__desc">
              리프팅 고민은 피부 상태와 얼굴 구조에 따라 필요한 방식이 다릅니다.<br />
              리겐의원은 의료진 상담을 통해 개인에게 적합한 리프팅 방향을 안내합니다.
            </p>
            <div className="aa-cta__actions">
              <Link href="tel:02-1234-5678" className="aa-cta__btn aa-cta__btn--primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" fill="currentColor"/></svg>
                전화 상담 예약
              </Link>
              <Link href="#kakao-consult" className="aa-cta__btn aa-cta__btn--outline">
                <Image src="/images/regain/kakao.png" alt="" width={16} height={16} style={{ objectFit: "contain" }} aria-hidden="true" />
                카카오 상담
              </Link>
              <Link href="#naver-booking" className="aa-cta__btn aa-cta__btn--outline">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                온라인 예약
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
