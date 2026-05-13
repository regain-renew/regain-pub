"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { assetPath } from "@/lib/assets";

const tabs = [
  {
    num: "01",
    title: "전신의학 기반\n정밀 재생",
    desc: "피부와 몸의 변화를 따로 보지 않고, 전체 컨디션의 흐름 속에서 회복 방향을 설계합니다.",
    image: "/images/signature/sig-programs-overview_card_01.png",
    alt: "전신의학 기반 정밀 재생",
    href: "#program-01",
    eyebrow: "PROGRAM 01",
    lead: "피부와 몸의 변화를 따로 보지 않고, 전체 컨디션의 흐름 속에서 회복 방향을 설계합니다.",
    body: "피부 탄력 저하, 피로감, 회복 속도 저하, 노화 신호는 단순히 피부 표면의 문제만으로 나타나지 않을 수 있습니다. 리겐의 전신의학 기반 정밀 재생 프로그램은 개인의 전반적인 컨디션과 회복 흐름을 함께 고려하여 필요한 관리 방향을 제안합니다.",
    cards: [
      { title: "컨디션 체크", desc: "개인의 피부·두피·생활 패턴을\n함께 확인합니다." },
      { title: "정밀 상담", desc: "의료진 상담을 통해 적합한\n관리 방향을 설정합니다." },
      { title: "회복 플랜", desc: "지속 가능한\n관리 흐름을 설계합니다." },
    ],
    detailImage: "/images/regain/doctor-main.jpg",
    detailImageAlt: "전신의학 기반 정밀 재생 진료 장면",
  },
  {
    num: "02",
    title: "부위별 맞춤\n줄기세포",
    desc: "피부, 두피, 관절 등 관심 부위와 상태에 따라 맞춤형 관리 방향을 상담합니다.",
    image: "/images/signature/sig-programs-overview_card_02.png",
    alt: "부위별 맞춤 줄기세포",
    href: "#program-02",
    eyebrow: "PROGRAM 02",
    lead: "피부, 두피, 관절 등 관심 부위와 상태에 따라 맞춤형 관리 방향을 상담합니다.",
    body: "리겐은 관심 부위와 개인의 컨디션을 함께 살피고, 의료진 상담을 통해 적합한 재생 관리 방향을 안내합니다. 피부 탄력, 두피 환경, 관절 컨디션 등 각 부위별 고민에 맞춰 세심한 상담과 관리 계획을 제공합니다.",
    cards: [
      { title: "피부", desc: "탄력, 건조감, 노화 신호를\n고려한 관리" },
      { title: "두피", desc: "두피 환경과 모발 컨디션을\n고려한 관리" },
      { title: "관절", desc: "관절과 움직임의 컨디션을\n고려한 관리" },
      { title: "바디", desc: "전반적인 컨디션과\n회복 흐름을 고려한 관리" },
    ],
    detailImage: "/images/regain/signature-stemcell.jpg",
    detailImageAlt: "부위별 맞춤 줄기세포 프로그램",
  },
  {
    num: "03",
    title: "두피·모발\n재생 클리닉",
    desc: "두피 환경과 모발 컨디션을 함께 살피고, 개인에게 맞는 관리 방향을 제안합니다.",
    image: "/images/signature/sig-programs-overview_card_03.png",
    alt: "두피·모발 재생 클리닉",
    href: "#program-03",
    eyebrow: "PROGRAM 03",
    lead: "두피 환경과 모발 컨디션을 함께 살피고, 개인에게 맞는 관리 방향을 제안합니다.",
    body: "두피와 모발의 변화는 생활 습관, 스트레스, 피부 상태, 개인의 컨디션과 함께 나타날 수 있습니다. 리겐은 두피 환경과 모발 상태를 세심하게 확인하고, 의료진 상담을 통해 적합한 관리 계획을 안내합니다.",
    cards: [
      { title: "두피 환경 체크", desc: "두피 상태와 민감도,\n건조감 등을 확인합니다." },
      { title: "모발 컨디션 상담", desc: "모발 밀도와\n변화 양상을 상담합니다." },
      { title: "맞춤 관리 계획", desc: "개인 상태에 따라 적합한\n관리 방향을 제안합니다." },
    ],
    detailImage: "/images/regain/signature-skin.jpg",
    detailImageAlt: "두피·모발 재생 클리닉",
  },
];

export function SigProgramsTabs() {
  const [active, setActive] = useState(0);
  const current = tabs[active];

  return (
    <>
      {/* Tab buttons */}
      <div className="sig-prog-tabs">
        {tabs.map((tab, i) => (
          <button
            key={tab.num}
            className={`sig-prog-tab${active === i ? " sig-prog-tab--active" : ""}`}
            onClick={() => setActive(i)}
            aria-pressed={active === i}
          >
            <div className="sig-prog-tab__image-wrap">
              <Image
                src={assetPath(tab.image)}
                alt={tab.alt}
                fill
                sizes="(max-width: 900px) 90vw, 33vw"
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
              <div className="sig-prog-tab__overlay" aria-hidden="true" />
              <div className="sig-prog-tab__text">
                <span className="sig-prog-tab__num">{tab.num}</span>
                <h3 className="sig-prog-tab__title">
                  {tab.title.split("\n").map((line, j) => (
                    <span key={j}>{line}</span>
                  ))}
                </h3>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Detail panel */}
      <div className="sig-prog-panel" key={active}>
        <div className="sig-prog-panel__image-wrap">
          <Image
            src={assetPath(current.detailImage)}
            alt={current.detailImageAlt}
            fill
            sizes="(max-width: 900px) 100vw, 45vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="sig-prog-panel__content">
          <p className="sig-prog-panel__eyebrow">{current.eyebrow}</p>
          <h2 className="sig-prog-panel__title">
            {current.title.split("\n").map((line, i) => (
              <span key={i}>{line}</span>
            ))}
          </h2>
          <p className="sig-prog-panel__lead">{current.lead}</p>
          <p className="sig-prog-panel__body">{current.body}</p>
          <div className={`sig-mini-cards${current.cards.length === 4 ? " sig-mini-cards--four" : ""}`}>
            {current.cards.map((c) => (
              <div key={c.title} className="sig-mini-card sig-mini-card--light">
                <h4 className="sig-mini-card__title">{c.title}</h4>
                <p className="sig-mini-card__desc">
                  {c.desc.split("\n").map((line, i) => (
                    <span key={i}>{line}<br /></span>
                  ))}
                </p>
              </div>
            ))}
          </div>
          <Link href={current.href} className="sig-prog-panel__cta">
            자세히 보기 →
          </Link>
        </div>
      </div>
    </>
  );
}
