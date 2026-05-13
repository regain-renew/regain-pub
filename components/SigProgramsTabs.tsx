"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { assetPath } from "@/lib/assets";

type Card = { title: string; desc: string; icon?: string };

const tabs: Array<{
  num: string; title: string; desc: string; image: string; alt: string; href: string;
  eyebrow: string; lead: string; body: string; cards: Card[];
  detailImage: string; detailImageAlt: string; imageStyle?: React.CSSProperties;
}> = [
  {
    num: "01",
    title: "전신의학 기반\n정밀 재생",
    desc: "피부와 몸의 변화를 따로 보지 않고, 전체 컨디션의 흐름 속에서 회복 방향을 설계합니다.",
    image: "/images/signature/sig-programs-overview_card_01.png",
    alt: "전신의학 기반 정밀 재생",
    href: "#program-01",
    eyebrow: "PROGRAM 01",
    lead: "피부와 몸의 변화를 따로 보지 않고, 전체 컨디션의 흐름 속에서 회복 방향을 설계합니다.",
    body: "피부 탄력 저하, 피로감, 회복 속도 저하, 노화 신호는 단순히 피부 표면의 문제만으로 나타나지 않을 수 있습니다.\n 리겐의 전신의학 기반 정밀 재생 프로그램은 개인의 전반적인 컨디션과 회복 흐름을 함께 고려하여 필요한 관리 방향을 제안합니다.",
    cards: [
      { title: "컨디션 체크", desc: "개인의 피부·두피·생활 패턴을\n함께 확인합니다.", icon: "/images/signature/icon01.png" },
      { title: "정밀 상담", desc: "의료진 상담을 통해 적합한\n관리 방향을 설정합니다.", icon: "/images/signature/icon02.png" },
      { title: "회복 플랜", desc: "지속 가능한\n관리 흐름을 설계합니다.", icon: "/images/signature/icon03.png" },
    ],
    detailImage: "/images/signature/overview-card-01.jpg",
    detailImageAlt: "전신의학 기반 정밀 재생 진료 장면",
    imageStyle: { height: "150%", marginTop: "-10%" },
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
    body: "리겐은 관심 부위와 개인의 컨디션을 함께 살피고, 의료진 상담을 통해 적합한 재생 관리 방향을 안내합니다.\n 피부 탄력, 두피 환경, 관절 컨디션 등 각 부위별 고민에 맞춰 세심한 상담과 관리 계획을 제공합니다.",
    cards: [
      { title: "피부", desc: "탄력, 건조감, 노화 신호를\n고려한 관리", icon: "/images/signature/icon04.png" },
      { title: "두피", desc: "두피 환경과 모발 컨디션을\n고려한 관리", icon: "/images/signature/icon05.png" },
      { title: "관절, 바디", desc: "관절 컨디션과 바디 회복 흐름을\n고려한 상담", icon: "/images/signature/icon06.png" },
    ],
    detailImage: "/images/signature/overview-card-02.png",
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
    body: "두피와 모발의 변화는 생활 습관, 스트레스, 피부 상태, 개인의 컨디션과 함께 나타날 수 있습니다.\n 리겐은 두피 환경과 모발 상태를 세심하게 확인하고, 의료진 상담을 통해 적합한 관리 계획을 안내합니다.",
    cards: [
      { title: "두피 환경 체크", desc: "두피 상태와 민감도,\n건조감 등을 확인합니다.", icon: "/images/signature/icon07.png" },
      { title: "모발 컨디션 상담", desc: "모발 밀도와\n변화 양상을 상담합니다.", icon: "/images/signature/icon08.png" },
      { title: "맞춤 관리 계획", desc: "개인 상태에 따라 적합한\n관리 방향을 제안합니다.", icon: "/images/signature/icon09.png" },
    ],
    detailImage: "/images/signature/overview-card-03.png",
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
            <span className="sig-prog-tab__num">{tab.num}</span>
            <span className="sig-prog-tab__title">
              {tab.title.split("\n").map((line, j) => (
                <span key={j}>{line}</span>
              ))}
            </span>
          </button>
        ))}
      </div>

      {/* Detail panel */}
      <div className="sig-prog-panel" key={active}>
        {/* 우측 사진 — height 100% 고정, width auto (비율 유지) */}
        <div className="sig-prog-panel__image-wrap" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={assetPath(current.detailImage)}
            alt=""
            className="sig-prog-panel__image"
            style={current.imageStyle}
          />
        </div>
        {/* 텍스트 콘텐츠 */}
        <div className="sig-prog-panel__content">
          <p className="sig-prog-panel__eyebrow">{current.eyebrow}</p>
          <h2 className="sig-prog-panel__title">
            {current.title.split("\n").map((line, i) => (
              <span key={i}>{line}</span>
            ))}
          </h2>
          <p className="sig-prog-panel__body">{current.body}</p>
          <div className={`sig-prog-panel__cards${current.cards.length === 4 ? " sig-prog-panel__cards--four" : ""}`}>
            {current.cards.map((c) => (
              <div key={c.title} className="sig-prog-panel__mini-card">
                {c.icon && (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img src={assetPath(c.icon)} alt="" className="sig-prog-panel__mini-icon" />
                )}
                <h4 className="sig-prog-panel__mini-title">{c.title}</h4>
                <p className="sig-prog-panel__mini-desc">
                  {c.desc.split("\n").map((line, i) => (
                    <span key={i}>{line}<br /></span>
                  ))}
                </p>
              </div>
            ))}
          </div>
          <Link href={current.href} className="sig-prog-panel__cta">
            상담 예약하기 →
          </Link>
        </div>
      </div>
    </>
  );
}
