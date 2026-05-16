import Image from "next/image";
import Link from "next/link";

import { clinicContact } from "@/data/contact";
import { medicalNotice } from "@/data/homeSections";
import { assetPath } from "@/lib/assets";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__inner">
        <div>
          <Image
            src={assetPath("/images/regain/logo_2.png")}
            alt="REGAIN CLINIC"
            width={320}
            height={92}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="site-footer__info">
          <p>{clinicContact.address}</p>
          <p>전화 {clinicContact.phone}</p>
          <p>진료시간 {clinicContact.hours.join(" / ")}</p>
          <p>주차안내 {clinicContact.parking}</p>
        </div>
        <div className="site-footer__links">
          <Link href={clinicContact.kakaoUrl}>카카오상담</Link>
          <Link href={clinicContact.naverUrl}>네이버예약</Link>
          <Link href={clinicContact.directionsUrl}>길찾기</Link>
          <Link href={clinicContact.privacyUrl}>개인정보처리방침</Link>
          <Link href={clinicContact.termsUrl}>이용약관</Link>
        </div>
      </div>
      <div className="shell site-footer__bottom">
        <p>{medicalNotice}</p>
        <p>Copyright © 2026 REGAIN CLINIC. All rights reserved.</p>
      </div>
    </footer>
  );
}
