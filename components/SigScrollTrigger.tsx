"use client";

import { useEffect, useRef } from "react";

/**
 * 섹션 안에 숨김 div로 삽입.
 * 뷰포트에 진입하면 가장 가까운 [data-sig-section] 조상에 "sig-in-view" 클래스를 추가.
 * 섹션 자체는 opacity/transform 없이 항상 보임.
 */
export function SigScrollTrigger() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = ref.current?.closest("[data-sig-section]") as HTMLElement | null;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("sig-in-view");
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} aria-hidden="true" style={{ display: "none" }} />;
}
