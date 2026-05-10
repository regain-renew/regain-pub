"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

type FadeInSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function FadeInSection({ children, className = "", id }: FadeInSectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.18 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id={id} ref={ref} className={`${className} reveal-section ${visible ? "is-visible" : ""}`}>
      {children}
    </section>
  );
}
