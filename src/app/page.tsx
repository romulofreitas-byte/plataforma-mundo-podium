import { Footer } from "@/components/layout/Footer";
import { AuthoritySection } from "@/components/sections/AuthoritySection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FourFrontsSection } from "@/components/sections/FourFrontsSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { LiveCallVideosSection } from "@/components/sections/LiveCallVideosSection";
import { LiveRaceSection } from "@/components/sections/LiveRaceSection";
import { MentorshipSection } from "@/components/sections/MentorshipSection";
import { ObjectionsSection } from "@/components/sections/ObjectionsSection";
import { OfferSection } from "@/components/sections/OfferSection";
import { PlatformTourSection } from "@/components/sections/PlatformTourSection";
import { SocialProofMarquee } from "@/components/sections/SocialProofMarquee";
import { TargetAudienceSection } from "@/components/sections/TargetAudienceSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { WhatIsSection } from "@/components/sections/WhatIsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SocialProofMarquee />
      <WhatIsSection />
      <FourFrontsSection />
      <LiveCallVideosSection />
      <PlatformTourSection />
      <MentorshipSection />
      <LiveRaceSection />
      <TargetAudienceSection />
      <ObjectionsSection />
      <TestimonialsSection />
      <AuthoritySection />
      <OfferSection />
      <FaqSection />
      <Footer />
    </>
  );
}
