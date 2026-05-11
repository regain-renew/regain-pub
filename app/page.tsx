import { CenterNavigation } from "@/components/CenterNavigation";
import { DoctorPhilosophy } from "@/components/DoctorPhilosophy";
import { FloatingQuickMenu } from "@/components/FloatingQuickMenu";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { JournalMediaSection } from "@/components/JournalMediaSection";
import { PrivateAppointmentForm } from "@/components/PrivateAppointmentForm";
import { SignaturePackages } from "@/components/SignaturePackages";
import { assetPath } from "@/lib/assets";
import type { CSSProperties } from "react";

export default function HomePage() {
  return (
    <div id="top">
      <Header />
      <main>
        <HeroSection />
        <div
          className="home-signature-nav-bg"
          style={
            {
              "--home-signature-nav-bg-image": `url("${assetPath("/images/regain/background.png")}")`,
            } as CSSProperties
          }
        >
          <SignaturePackages />
          <CenterNavigation />
        </div>
        <DoctorPhilosophy />
        <JournalMediaSection />
        <PrivateAppointmentForm />
      </main>
      <Footer />
      <FloatingQuickMenu />
    </div>
  );
}
