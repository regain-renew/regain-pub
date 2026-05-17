"use client";

import Image from "next/image";
import { useState } from "react";
import type { ReactNode } from "react";
import { assetPath } from "@/lib/assets";
import { SigScrollTrigger } from "@/components/SigScrollTrigger";

type Concern = {
  id: string;
  label: string;
  icon: ReactNode;
  desc: string;
};

const concerns: Concern[] = [
  {
    id: "dry", label: "건조감", desc: "푸석하고 당김이\n느껴지는 피부",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3C12 3 6 9.5 6 14a6 6 0 0012 0c0-4.5-6-11-6-11z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
        <path d="M9 16.5c1 1 3 1.5 4.5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "elastic", label: "탄력 저하", desc: "피부가 처지고\n탄력이 떨어지는 느낌",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 8c2 3 4 4 7 4s5-1 7-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M5 14c2 3 4 4 7 4s5-1 7-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeDasharray="2 2"/>
        <path d="M12 18v2M9 19.5l3-1.5 3 1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "tone", label: "칙칙한 톤", desc: "피부 톤이 칙칙하고\n생기가 부족한 느낌",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.64 5.64l1.41 1.41M16.95 16.95l1.41 1.41M5.64 18.36l1.41-1.41M16.95 7.05l1.41-1.41" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "pore", label: "모공 고민", desc: "모공이 넓어지고\n피부 질감이 고르지 않음",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="8" cy="9" r="2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="16" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="11" cy="16" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 11v2M16 11.5v2.5M11 17.5v1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "texture", label: "거친 피부결", desc: "피부결이 고르지 않고\n울퉁불퉁하게 느껴지는 피부",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 12c1.5-3 3-2 4.5 0s3 3 4.5 0 3-3 4.5 0S18.5 15 21 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 17c1.5-2 3-1.5 4.5 0s3 2 4.5 0 3-2 4.5 0S18.5 19 21 17" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
      </svg>
    ),
  },
  {
    id: "sensitive", label: "민감함", desc: "쉽게 자극받고\n붉어지는 피부",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3.5C9 3.5 6 6 6 9.5c0 4 4 8 6 10 2-2 6-6 6-10 0-3.5-3-6-6-6z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
        <path d="M12 8v4M12 14.5v.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
  },
];

type Solution = { title: string; desc: string; image: string };

const singleMap: Record<string, Solution> = {
  dry:       { title: "스킨 부스터 + 스킨케어",              desc: "피부 속 수분감을 채우고 장벽을 강화하여 촉촉하고 건강한 피부 컨디션을 회복합니다.",       image: "/images/skin-reboot/solution-01.jpg" },
  elastic:   { title: "바이오 스티뮬레이터 + 스킨케어",      desc: "콜라겐 생성을 자극하고 피부 밀도감을 높여 자연스러운 탄력과 윤곽을 되살립니다.",         image: "/images/skin-reboot/solution-02.jpg" },
  tone:      { title: "피부 레이저 + 스킨 부스터",           desc: "색소 침착과 칙칙함을 개선하고 피부 수분 광채를 함께 끌어올립니다.",                      image: "/images/skin-reboot/solution-03.jpg" },
  pore:      { title: "피부 레이저 + 스킨 부스터",           desc: "모공을 정돈하고 피부 질감을 고르게 정리하여 매끄럽고 생기 있는 피부로 가꿉니다.",         image: "/images/skin-reboot/solution-03.jpg" },
  texture:   { title: "피부 레이저 + 스킨케어",              desc: "거친 피부결을 부드럽게 정돈하고 피부 표면의 균일함을 회복합니다.",                        image: "/images/skin-reboot/solution-03.jpg" },
  sensitive: { title: "스킨케어 + 스킨 부스터",              desc: "민감한 피부 장벽을 안정시키고 수분과 영양을 공급하여 피부 컨디션을 안정적으로 유지합니다.", image: "/images/skin-reboot/solution-04.jpg" },
};

function getMultiSolution(ids: string[]): Solution {
  const has = (id: string) => ids.includes(id);
  if (has("dry") && has("elastic"))
    return { title: "바이오 스티뮬레이터 + 스킨 부스터 + 스킨케어", desc: "탄력과 수분을 함께 회복하고 피부 장벽을 강화하는 복합 솔루션을 제안합니다.", image: "/images/skin-reboot/solution-02.jpg" };
  if ((has("tone") || has("pore") || has("texture")) && (has("dry") || has("sensitive")))
    return { title: "피부 레이저 + 스킨 부스터 + 스킨케어", desc: "레이저로 피부 고민을 개선하고 수분과 진정 케어로 피부 컨디션을 함께 관리합니다.", image: "/images/skin-reboot/solution-03.jpg" };
  if (has("elastic") && (has("tone") || has("pore")))
    return { title: "바이오 스티뮬레이터 + 피부 레이저", desc: "탄력과 피부톤을 동시에 개선하는 조합 솔루션으로 종합적인 피부 리부트를 진행합니다.", image: "/images/skin-reboot/solution-02.jpg" };
  // default multi
  return { title: "복합 솔루션 (의료진 상담 기반)", desc: "선택하신 복합 고민에 대해 의료진 상담을 통해 개인에게 가장 적합한 솔루션 조합을 제안합니다.", image: "/images/skin-reboot/solution-01.jpg" };
}

export function SkinConditionChecker() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const remove = (id: string) => setSelected((prev) => prev.filter((x) => x !== id));

  const solution: Solution | null =
    selected.length === 0
      ? null
      : selected.length === 1
      ? singleMap[selected[0]]
      : getMultiSolution(selected);

  const selectedLabels = selected.map((id) => concerns.find((c) => c.id === id)!.label);

  return (
    <>
      {/* ── Section 02: Skin Condition Check ── */}
      <section className="sr-check" data-sig-section>
        <SigScrollTrigger />
        <div className="shell">
          <div className="sr-check__layout">
            <div className="sr-check__intro">
              <p className="sr-eyebrow">SKIN CONDITION CHECK</p>
              <h2>지금, 당신의 피부는<br />어떤 신호를 보내고 있나요?</h2>
              <p className="sr-section-head__desc">
                해당되는 고민을 선택하면 맞춤 솔루션을 추천해드립니다.
              </p>
            </div>

            <div className="sr-check__content">
              <div className="sr-check__grid">
                {concerns.map((c) => (
                  <button
                    key={c.id}
                    className={`sr-check-card${selected.includes(c.id) ? " sr-check-card--selected" : ""}`}
                    onClick={() => toggle(c.id)}
                    aria-pressed={selected.includes(c.id)}
                  >
                    <span className="sr-check-card__icon">{c.icon}</span>
                    <h3 className="sr-check-card__title">{c.label}</h3>
                    <p className="sr-check-card__desc">
                      {c.desc.split("\n").map((line, i) => <span key={i}>{line}<br /></span>)}
                    </p>
                    {selected.includes(c.id) && <span className="sr-check-card__badge" aria-hidden="true">✓</span>}
                  </button>
                ))}
              </div>

              {selected.length > 0 ? (
                <div className="sr-check__chips" aria-live="polite">
                  <span className="sr-check__chips-label">선택된 고민</span>
                  {selectedLabels.map((label, i) => (
                    <button
                      key={label}
                      className="sr-check__chip"
                      onClick={() => remove(selected[i])}
                      aria-label={`${label} 선택 해제`}
                    >
                      {label} ✕
                    </button>
                  ))}
                </div>
              ) : (
                <p className="sr-check__hint">✓ 하나 이상 선택하시면 맞춤 솔루션을 확인할 수 있습니다.</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 03: Solution Matching ── */}
      <section className="sr-matching" data-sig-section>
        <SigScrollTrigger />
        <div className="shell">
          <div className="sr-matching__board">
            <Image
              src={assetPath("/images/skin-reboot/solution_card.png")}
              alt=""
              fill
              sizes="100vw"
              className="sr-matching__board-bg"
              aria-hidden="true"
            />
            <div className="sr-matching__intro">
              <p className="sr-eyebrow">REBOOT SOLUTION MATCHING</p>
              <h2>당신의 고민에 맞는<br />스킨 리부트 솔루션</h2>
              <p className="sr-matching__sub">
                피부 상태에 따라 필요한 솔루션은 달라집니다.<br />
                선택한 고민에 가장 적합한 솔루션을 매칭해드립니다.
              </p>
            </div>

            <div className="sr-matching__result">
              {selected.length > 0 ? (
                <div className="sr-matching__chips">
                  <span className="sr-matching__chips-label">선택된 고민 ({selected.length})</span>
                  {selectedLabels.map((label, i) => (
                    <button
                      key={label}
                      className="sr-matching__chip"
                      onClick={() => remove(selected[i])}
                      aria-label={`${label} 선택 해제`}
                    >
                      {label} ✕
                    </button>
                  ))}
                </div>
              ) : null}

              {solution ? (
                <>
                  <p className="sr-matching__result-label">추천 솔루션</p>
                  <p className="sr-matching__result-title">{solution.title}</p>
                  <p className="sr-matching__result-desc">{solution.desc}</p>
                </>
              ) : (
                <>
                  <p className="sr-matching__result-label">추천 솔루션</p>
                  <p className="sr-matching__result-title">고민을 선택해 주세요</p>
                  <p className="sr-matching__result-desc">
                    선택하신 피부 고민 조합에 맞춰 솔루션을 추천해드립니다.
                  </p>
                </>
              )}
            </div>
          </div>

          <p className="sr-matching__result-note">
            * 추천 솔루션은 예시이며, 실제 상담을 통해 개인에게 적합한 프로그램을 제안합니다.
          </p>
        </div>
      </section>
    </>
  );
}
