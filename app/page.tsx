import { StoryLayout } from "@/components/shared/StoryLayout";
import { chapters, totalActs } from "@/lib/data/chapters";
import { Hero } from "@/components/sections/home/Hero";
import { CaseJourney } from "@/components/sections/home/CaseJourney";
import { TrustMetrics } from "@/components/sections/home/TrustMetrics";
import { WhoWeAre } from "@/components/sections/home/WhoWeAre";
import { PracticeAreasGrid } from "@/components/sections/home/PracticeAreasGrid";
import { FeaturedAttorneys } from "@/components/sections/home/FeaturedAttorneys";
import { IndustriesWeServe } from "@/components/sections/home/IndustriesWeServe";
import { CaseStudiesTimeline } from "@/components/sections/home/CaseStudiesTimeline";
import { WhyChooseUs } from "@/components/sections/home/WhyChooseUs";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { AwardsRecognition } from "@/components/sections/home/AwardsRecognition";
import { InsightsTeaser } from "@/components/sections/home/InsightsTeaser";
import { ConsultationProcess } from "@/components/sections/home/ConsultationProcess";
import { GlobalPresence } from "@/components/sections/home/GlobalPresence";
import { FaqSection } from "@/components/sections/home/FaqSection";
import { ContactSection } from "@/components/sections/home/ContactSection";

export default function Home() {
  return (
    <StoryLayout
      actLabel="Opening Statement"
      actNumber={1}
      totalActs={totalActs}
      chapters={chapters}
    >
      <Hero />
      <CaseJourney />
      <TrustMetrics />
      <WhoWeAre />
      <PracticeAreasGrid />
      <FeaturedAttorneys />
      <IndustriesWeServe />
      <CaseStudiesTimeline />
      <WhyChooseUs />
      <Testimonials />
      <AwardsRecognition />
      <InsightsTeaser />
      <ConsultationProcess />
      <GlobalPresence />
      <FaqSection />
      <ContactSection />
    </StoryLayout>
  );
}
