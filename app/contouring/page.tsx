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
const categoryCards = [
  {
    num: "01",
    name: "얼굴형 교정",
    desc: "꺼짐·볼륨·턱선·얼굴선 균형이 고민",
    tags: ["맞춤 필러", "레디어스", "실리프팅"],
    anchor: "#face-contouring",
    icon: "/images/signature/icon12.png",
  },
  {
    num: "02",
    name: "바디 라인 관리",
    desc: "지방·탄력·부분 라인 정리가 고민",
    tags: ["트리플 바디", "슈링크", "슬림주사", "바디 보톡스"],
    anchor: "#body-contouring",
    icon: "/images/signature/icon09.png",
  },
  {
    num: "03",
    name: "액취증·다한증 치료",
    desc: "반복되는 냄새와 땀 고민이 있다면",
    tags: ["초음파 정밀 진단", "맞춤 치료"],
    anchor: "#sweat-odor",
    icon: "/images/signature/icon07.png",
  },
];

const faceCards = [
  {
    id: "filler",
    name: "프리미엄 맞춤 필러",
    sub: "꺼진 볼륨을 보충해 얼굴 균형을 맞추는 시술",
    tags: ["꺼진 볼륨", "입체감", "윤곽 균형"],
    image: "/images/contouring/3_sec_01.png",
  },
  {
    id: "radiesse",
    name: "레디어스",
    sub: "볼륨과 윤곽·피부 탄력감을 함께 고려하는 케어",
    tags: ["윤곽 보완", "구조 탄력", "자연스러운 입체"],
    image: "/images/contouring/3_sec_02.png",
  },
  {
    id: "thread-lifting",
    name: "실리프팅",
    sub: "처짐 방향·피부 두께·볼륨 분포를 분석해 설계",
    tags: ["턱선", "처짐 개선", "라인 정리"],
    image: "/images/contouring/3_sec_03.png",
  },
];

const bodyCards = [
  {
    num: "01",
    name: "트리플 바디",
    image: "/images/contouring/contouring_01.png",
    sub: "지방과 탄력을 동시에 고려하는 복합 에너지 바디 컨투어링",
    tags: ["지방·탄력", "셀룰라이트", "라인 정리"],
    infos: [{ label: "시술시간", value: "30~60분" }, { label: "마취", value: "불필요" }, { label: "간격", value: "1~2주" }],
    recommend: "지방+탄력 저하 동시 고민 / 셀룰라이트",
  },
  {
    num: "02",
    name: "바디 슈링크",
    image: "/images/contouring/contouring_02.png",
    sub: "늘어진 바디를 깊은 층부터 끌어올리는 고강도 초음파 리프팅",
    tags: ["처짐 개선", "탄력", "타이트닝"],
    infos: [{ label: "시술시간", value: "30~60분" }, { label: "마취", value: "불필요" }, { label: "간격", value: "상태별 조절" }],
    recommend: "다이어트·출산 후 처짐 / 복부·허벅지",
  },
  {
    num: "03",
    name: "바디 슬림주사",
    image: "/images/contouring/contouring_03.png",
    sub: "운동·식이만으로 빠지지 않는 국소 부위 맞춤 바디 라인 치료",
    tags: ["국소 지방", "사이즈 감소", "라인 정리"],
    infos: [{ label: "시술시간", value: "10~20분" }, { label: "간격", value: "1~2주" }, { label: "부위", value: "부위별 선택" }],
    recommend: "복부·팔뚝·허벅지·옆구리 / 라인 정리",
  },
  {
    num: "04",
    name: "바디 보톡스",
    image: "/images/contouring/contouring_04.png",
    sub: "불필요한 근육을 디자인하는 승모근·종아리 보톡스",
    tags: ["근육 부피", "슬림 실루엣", "라인 개선"],
    infos: [{ label: "시술시간", value: "10~15분" }, { label: "간격", value: "3~6개월" }],
    recommend: "직각 어깨 / 종아리 알 / 웨딩 관리",
  },
];

const selfCheckItems = [
  "흰 옷 겨드랑이 부위가 노랗게 변색된다",
  "주변인으로부터 암내가 난다는 이야기를 들어본 적 있다",
  "귀지가 마른 상태가 아닌 축축한 물귀지 형태다",
  "유독 겨드랑이 부위만 땀이 심해 항상 젖어 있다",
  "냄새 걱정으로 사회생활·대인관계에 위축감을 느낀다",
  "가족 중 액취증 증상이 있는 사람이 있다",
  "증상이 사춘기 이후부터 본격적으로 시작되었다",
];

const sweatDiffs = [
  {
    key: "Precision",
    title: "초음파 타겟팅",
    icon: "/images/regain/icons/sig/process-check.png",
    items: ["땀샘 구조 사전 확인", "정확한 치료 범위 설정"],
  },
  {
    key: "Safety",
    title: "안전성 기반 케어",
    icon: "/images/regain/icons/sig/process-treatment.png",
    items: ["국소·수면마취 선택", "응급의학 전문의 직접 관리"],
  },
  {
    key: "Recovery",
    title: "회복 중심 설계",
    icon: "/images/regain/icons/sig/concept-recovery.png",
    items: ["과잉 제거가 아닌", "피부 건강을 고려한 시술"],
  },
];

const processSteps = [
  { num: "01", title: "상담 및\n고민 확인", desc: "얼굴형·바디 라인\n땀·냄새 고민 파악" },
  { num: "02", title: "구조·부위\n진단", desc: "볼륨·지방·근육\n땀샘 구조 확인" },
  { num: "03", title: "맞춤 계획\n설계", desc: "상태·목표에 맞는\n관리 방향 설계" },
  { num: "04", title: "정밀 시술\n진행", desc: "상담 결과에 따라\n적합한 시술 진행" },
  { num: "05", title: "회복 안내\n경과 확인", desc: "주의사항·관리법\n경과 모니터링" },
];

const recommendedAreas = [
  {
    area: "얼굴형 교정",
    items: [
      "꺼진 볼륨과 얼굴 입체감 저하가 고민인 분",
      "턱선, 팔자, 볼 라인 균형이 신경 쓰이는 분",
      "수술 없이 자연스러운 윤곽 보완을 원하는 분",
      "체중 감량 후 얼굴 볼륨이 급격히 빠진 분",
    ],
  },
  {
    area: "바디 컨투어링",
    items: [
      "특정 부위 지방이 잘 빠지지 않는 분",
      "체중보다 라인 정리가 필요한 분",
      "다이어트 후 피부 처짐이 고민인 분",
      "승모근, 종아리 등 근육 라인이 고민인 분",
    ],
  },
  {
    area: "액취증·다한증",
    items: [
      "반복되는 겨드랑이 냄새가 고민인 분",
      "땀이 많아 옷이 자주 젖는 분",
      "냄새 걱정으로 대인관계가 위축되는 분",
      "정밀한 원인 진단 후 치료를 원하는 분",
    ],
  },
];

const commonNotices = [
  "시술 후 붉어짐·붓기·압통·열감·뻐근함이 일시적으로 나타날 수 있습니다.",
  "시술 당일 음주, 사우나, 찜질방, 격한 운동을 피하는 것이 좋습니다.",
  "시술 부위는 며칠간 예민할 수 있으므로 강한 마사지·과도한 자극은 피해주세요.",
  "체형·지방량·근육량·탄력·생활습관에 따라 횟수와 반응에 차이가 있을 수 있습니다.",
  "임신·수유 중이거나 기저질환·약물·알레르기 이력이 있는 경우 반드시 상담 시 확인이 필요합니다.",
];

const treatmentNotices = [
  {
    name: "필러",
    items: [
      "시술 직후 붉은기·붓기·미세한 멍이 나타날 수 있으며 3~7일 내 호전됩니다.",
      "최소 2주간 시술 부위 강한 압박·문지름을 삼가주세요.",
      "1주일간 사우나·찜질방·격한 운동·음주·흡연을 피해주세요.",
    ],
  },
  {
    name: "실리프팅",
    items: [
      "일시적 붓기·멍·당김이 발생할 수 있습니다.",
      "시술 부위 강한 압박·문지름을 삼가주세요.",
      "1~2주간 과도한 표정·마사지·사우나·격한 운동을 피해주세요.",
    ],
  },
  {
    name: "액취증·다한증",
    items: [
      "시술 직후 부기·통증·멍·당기는 느낌이 발생할 수 있습니다.",
      "1~2주간 격한 운동·수영·사우나·반복적 겨드랑이 마찰을 피해주세요.",
    ],
  },
];

/* ─────────────────────────────────────────────
   페이지
───────────────────────────────────────────── */
export default function ContouringPage() {
  return (
    <div id="top">
      <Header />

      <main>

        {/* ── 01 HERO ─────────────────────────────── */}
        <section className="ct-hero">
          <Image
            src={assetPath("/images/contouring/hero.png")}
            alt="" fill sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center 30%" }}
            priority aria-hidden="true"
          />
          <div className="shell ct-hero__inner">
            <div className="ct-hero__content">
              <p className="ct-hero__kicker">얼굴과 바디의 균형을 정교하게 설계합니다</p>
              <h1 className="ct-hero__title">
                <span>REGAIN</span>
                <span>CONTOURING</span>
              </h1>
              <p className="ct-hero__tags">#얼굴형교정 #맞춤필러 #실리프팅 #바디컨투어링 #슬림주사 #다한증치료</p>
              <div className="ct-hero__actions">
                <Link href="#appointment" className="button button--primary">상담 예약하기</Link>
                <Link href="#category" className="button button--ghost">나에게 맞는 컨투어링 찾기</Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 02 CATEGORY GUIDE ───────────────────── */}
        <section id="category" className="ct-category" data-sig-section>
          <SigScrollTrigger />
          <div className="shell">
            <div className="ct-category__header">
              <p className="ct-eyebrow">CONTOURING CATEGORY GUIDE</p>
              <h2>어떤 컨투어링이<br />필요하신가요?</h2>
            </div>
            <div className="ct-category__cards">
              {categoryCards.map((c) => (
                <div key={c.num} className="ct-category-card">
                  <div className="ct-category-card__icon-wrap">
                    <Image src={assetPath(c.icon)} alt="" width={72} height={72} style={{ objectFit: "contain" }} aria-hidden="true" />
                  </div>
                  <div className="ct-category-card__content">
                    <span className="ct-category-card__num">{c.num}</span>
                    <h3 className="ct-category-card__name">{c.name}</h3>
                    <p className="ct-category-card__desc">{c.desc}</p>
                    <div className="ct-category-card__footer">
                      <div className="ct-category-card__tags">
                        {c.tags.map((t) => <span key={t}>{t}</span>)}
                      </div>
                      <Link href={c.anchor} className="ct-category-card__link" aria-label="바로가기">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                          <path d="M7 4l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 03 FACE CONTOURING ──────────────────── */}
        <section id="face-contouring" className="ct-face" data-sig-section>
          <SigScrollTrigger />
          <div className="shell ct-face__inner">
            {/* 좌측: 타이틀 */}
            <div className="ct-face__heading">
              <p className="ct-eyebrow">FACE CONTOURING</p>
              <h2 className="ct-face__title">
                과거와 같게,<br />얼굴의 균형을<br />다시 잡는<br />결과 설계
              </h2>
              <p className="ct-face__desc">
                필러, 레디어스, 실리프팅을 조합해<br />
                개인의 얼굴 구조에 맞는 윤곽 설계를 제안합니다.
              </p>
            </div>
            {/* 우측: 카드 3종 */}
            <div className="ct-face__cards">
              {faceCards.map((c) => (
                <div key={c.id} className="ct-face-card">
                  <div className="ct-face-card__image-wrap">
                    <div className="ct-face-card__image">
                      <Image
                        src={assetPath(c.image)}
                        alt={c.name}
                        fill
                        sizes="(max-width: 900px) 80vw, 22vw"
                        style={{ objectFit: "cover", borderRadius: "8px" }}
                      />
                    </div>
                  </div>
                  <div className="ct-face-card__body">
                    <h3 className="ct-face-card__name">{c.name}</h3>
                    <p className="ct-face-card__sub">{c.sub}</p>
                    <div className="ct-face-card__tags">
                      {c.tags.map((t) => (
                        <span key={t} className="ct-face-card__tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 04 BODY CONTOURING ──────────────────── */}
        <section id="body-contouring" className="ct-body" data-sig-section>
          <SigScrollTrigger />
          <div className="shell ct-body__inner">
            <div className="ct-section-head">
              <p className="ct-eyebrow ct-eyebrow--light">BODY CONTOURING</p>
              <h2>바디 컨투어링</h2>
              <p className="ct-section-head__desc ct-section-head__desc--light">
                단순 체중 감량이 아닌, 라인과 균형까지 고려한 바디 실루엣 설계
              </p>
            </div>
            <div className="ct-body__cards">
              {bodyCards.map((c) => (
                <div key={c.num} className="ct-body-card">
                  <div className="ct-body-card__img-wrap">
                    <Image src={assetPath(c.image)} alt={c.name} fill sizes="(max-width:900px) 50vw, 25vw" style={{ objectFit: "cover", objectPosition: "center center" }} />
                  </div>
                  <span className="ct-body-card__num">{c.num}</span>
                  <h3 className="ct-body-card__name">{c.name}</h3>
                  <p className="ct-body-card__sub">{c.sub}</p>
                  <div className="ct-body-card__tags">
                    {c.tags.map((t) => (
                      <span key={t} className="ct-body-card__tag">{t}</span>
                    ))}
                  </div>
                  <div className="ct-body-card__infos">
                    {c.infos.map((info) => (
                      <div key={info.label} className="ct-body-card__info">
                        <span className="ct-body-card__info-label">{info.label}</span>
                        <span className="ct-body-card__info-value">{info.value}</span>
                      </div>
                    ))}
                  </div>
                  <p className="ct-body-card__recommend">
                    <span className="ct-body-card__recommend-label">추천</span>
                    {c.recommend}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 05 SWEAT & ODOR ─────────────────────── */}
        <section id="sweat-odor" className="ct-sweat" data-sig-section>
          <SigScrollTrigger />
          <div className="shell ct-sweat__inner">

            {/* 헤더 */}
            <div className="ct-section-head">
              <p className="ct-eyebrow">SWEAT &amp; ODOR TREATMENT</p>
              <h2>액취증·다한증 치료</h2>
              <p className="ct-section-head__desc">가리는 치료가 아닌, 원인을 설계하는 치료</p>
            </div>

            {/* 4-card row */}
            <div className="ct-sweat__cards">

              {/* Card 1: Problem */}
              <div className="ct-sweat__card">
                <p className="ct-sweat__card-label">PROBLEM</p>
                <h3 className="ct-sweat__card-title">보이지 않는 구조까지 확인해야 합니다</h3>
                <ul className="ct-sweat__problem-list">
                  <li>반복되는 냄새</li>
                  <li>시술 후 부작용 우려</li>
                  <li>만족스럽지 않은 결과</li>
                </ul>
                <div className="ct-sweat__problem-footer">
                  <div className="ct-sweat__card-arrow" aria-hidden="true" />
                  <p className="ct-sweat__problem-note">원인은 구조를 고려하지 않은 치료일 수 있습니다.</p>
                </div>
              </div>

              {/* Card 2: Compare */}
              <div className="ct-sweat__card">
                <p className="ct-sweat__card-label">COMPARE</p>
                <h3 className="ct-sweat__card-title">기존 방식 vs 리겐 방식</h3>
                <div className="ct-sweat__compare">
                  <div className="ct-sweat__compare-col ct-sweat__compare-col--old">
                    <h4 className="ct-sweat__compare-title">기존 방식</h4>
                    <ul>
                      <li>눈으로만 판단</li>
                      <li>일률적 제거</li>
                      <li>재발 가능성</li>
                    </ul>
                  </div>
                  <div className="ct-sweat__compare-col ct-sweat__compare-col--new">
                    <h4 className="ct-sweat__compare-title">리겐 방식</h4>
                    <ul>
                      <li>초음파 기반 진단</li>
                      <li>1:1 맞춤 설계</li>
                      <li>구조 기반 접근</li>
                    </ul>
                  </div>
                  <div className="ct-sweat__compare-vs" aria-hidden="true">VS</div>
                </div>
              </div>

              {/* Card 3: Self Check */}
              <div className="ct-sweat__card">
                <p className="ct-sweat__card-label">SELF CHECK</p>
                <h3 className="ct-sweat__card-title">혹시 나도 액취증일까?</h3>
                <p className="ct-sweat__check-desc">아래 항목 중 2~3개 이상 해당된다면 정밀 진단이 필요할 수 있습니다.</p>
                <ul className="ct-sweat__check-list">
                  {selfCheckItems.map((item) => (
                    <li key={item}>
                      <span className="ct-sweat__check-icon" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card 4: Regain Difference */}
              <div className="ct-sweat__card">
                <p className="ct-sweat__card-label">REGAIN DIFFERENCE</p>
                <h3 className="ct-sweat__card-title">지방층을 이해하는 정밀함이 액취증 치료의 차이를 만듭니다</h3>
                <div className="ct-sweat__diff-list">
                  {sweatDiffs.map((d) => (
                    <div key={d.key} className="ct-sweat__diff-item">
                      <div className="ct-sweat__diff-icon" aria-hidden="true">
                        <Image src={assetPath(d.icon)} alt="" width={20} height={20} style={{ objectFit: "contain" }} />
                      </div>
                      <div>
                        <span className="ct-sweat__diff-key">{d.key}</span>
                        <h4 className="ct-sweat__diff-title">{d.title}</h4>
                        <ul>
                          {d.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ── 06 PROCESS ──────────────────────────── */}
        <section className="ct-process" data-sig-section>
          <SigScrollTrigger />
          <Image
            src={assetPath("/images/regain/background.png")}
            alt="" fill sizes="100vw"
            style={{ objectFit: "cover" }}
            aria-hidden="true"
          />
          <div className="shell ct-process__inner">
            <div className="ct-section-head">
              <p className="ct-eyebrow">CONTOURING PROCESS</p>
              <h2>리겐 컨투어링 프로세스</h2>
            </div>
            <div className="ct-process__flow">
              {processSteps.map((step, i) => (
                <div key={step.num} className="ct-process__item">
                  <div className="ct-process__step">
                    <span className="ct-process__num">{step.num}</span>
                    <h3 className="ct-process__title">
                      {step.title.split("\n").map((line, j) => <span key={j}>{line}</span>)}
                    </h3>
                    <p className="ct-process__desc">
                      {step.desc.split("\n").map((line, j) => <span key={j}>{line}</span>)}
                    </p>
                  </div>
                  {i < processSteps.length - 1 && (
                    <span className="ct-process__arrow" aria-hidden="true">›</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 07 RECOMMENDED ──────────────────────── */}
        <section className="ct-recommended" data-sig-section>
          <SigScrollTrigger />
          <div className="shell ct-recommended__inner">
            <div className="ct-section-head">
              <p className="ct-eyebrow">RECOMMENDED</p>
              <h2>이런 분께 추천합니다</h2>
            </div>
            <div className="ct-recommended__areas">
              {recommendedAreas.map((area) => (
                <div key={area.area} className="ct-recommended__area">
                  <h3 className="ct-recommended__area-title">{area.area}</h3>
                  <ul className="ct-recommended__list">
                    {area.items.map((item) => (
                      <li key={item} className="ct-recommended__item">
                        <span className="ct-recommended__check" aria-hidden="true">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 08 NOTICE ───────────────────────────── */}
        <section className="ct-notice" data-sig-section>
          <SigScrollTrigger />
          <Image
            src={assetPath("/images/signature/notice-background.png")}
            alt="" fill sizes="100vw"
            style={{ objectFit: "cover" }}
            aria-hidden="true"
          />
          <div className="shell ct-notice__inner">
            <div className="ct-notice__columns">
              <div className="ct-notice__col">
                <p className="ct-notice__label">NOTICE</p>
                <h3 className="ct-notice__title">컨투어링 프로그램 안내</h3>
                <p className="ct-notice__col-heading">공통 주의사항</p>
                <ul className="ct-notice__list">
                  {commonNotices.map((n) => <li key={n}>{n}</li>)}
                </ul>
              </div>
              <div className="ct-notice__col">
                {treatmentNotices.map((tn) => (
                  <div key={tn.name} className="ct-notice__treatment">
                    <p className="ct-notice__treatment-name">{tn.name}</p>
                    <ul className="ct-notice__list">
                      {tn.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 09 FINAL CTA ────────────────────────── */}
        <section className="ct-cta" id="appointment" data-sig-section>
          <SigScrollTrigger />
          <Image
            src={assetPath("/images/regain/appointment-lobby.jpg")}
            alt="" fill sizes="100vw"
            style={{ objectFit: "cover" }}
            aria-hidden="true"
          />
          <div className="ct-cta__overlay" aria-hidden="true" />
          <div className="shell ct-cta__inner">
            <p className="ct-eyebrow ct-eyebrow--light">PRIVATE CONTOURING CONSULTING</p>
            <h2 className="ct-cta__title">
              나에게 맞는 얼굴·바디 라인을<br />상담해보세요
            </h2>
            <p className="ct-cta__desc">
              같은 고민처럼 보여도 얼굴 구조, 지방 분포, 근육 발달, 피부 탄력은 모두 다릅니다.<br />
              리겐의원은 의료진 상담을 통해 개인에게 맞는 컨투어링 방향을 제안합니다.
            </p>
            <div className="ct-cta__actions">
              <Link href="tel:02-1234-5678" className="ct-cta__btn ct-cta__btn--primary">📞 전화 상담 예약</Link>
              <Link href="#kakao-consult" className="ct-cta__btn ct-cta__btn--outline">💬 카카오 상담</Link>
              <Link href="#naver-booking" className="ct-cta__btn ct-cta__btn--outline">📅 온라인 예약</Link>
            </div>
            <div className="ct-cta__anchors">
              <Link href="#face-contouring" className="ct-cta__anchor">얼굴형 교정 →</Link>
              <Link href="#body-contouring" className="ct-cta__anchor">바디 컨투어링 →</Link>
              <Link href="#sweat-odor" className="ct-cta__anchor">액취증·다한증 →</Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <FloatingQuickMenu />
    </div>
  );
}
