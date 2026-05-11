import Link from "next/link";
import Image from "next/image";

import { FadeInSection } from "@/components/FadeInSection";
import { SectionTitle } from "@/components/SectionTitle";
import { centerNavigationCards } from "@/data/homeSections";
import { assetPath } from "@/lib/assets";

export function CenterNavigation() {
  return (
    <FadeInSection className="section section--waves-soft">
      <div className="shell">
        <SectionTitle
          eyebrow="CENTER NAVIGATION"
          title="핵심 센터 바로가기"
          align="center"
        />
        <div className="card-grid card-grid--four">
          {centerNavigationCards.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="nav-card"
            >
              <span className="nav-card__icon" aria-hidden="true">
                <Image src={assetPath(item.icon)} alt="" width={88} height={88} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <span className="nav-card__arrow" aria-hidden="true">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </FadeInSection>
  );
}
