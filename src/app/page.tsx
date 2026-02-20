import { Metadata } from 'next'; // 1. Add hozzá ezt az importot
import Feedbacks from "@/components/Common/Feedbacks";
import HowItWorks from "@/components/Common/HowItWorks";
import OurDoctors from "@/components/Common/OurDoctors";
import AboutUs from "@/components/HomeDemo1/AboutUs";
import Benefits from "@/components/Common/Benefits";
import HeroBanner from "@/components/HomeDemo1/HeroBanner";
import OurServices from "@/components/HomeDemo1/OurServices";
import PricingPlan from "@/components/Pricing/PricingPlan";
import FrequentlyAskedQuestions from "@/components/HomeDemo1/FrequentlyAskedQuestions";
import DownloadOurApp from "@/components/HomeDemo1/DownloadOurApp";
import OurBlog from "@/components/Common/OurBlog";
import Cta from "@/components/Common/Cta";
import Navbar from "@/components/Layout/Navbar";

// 2. Szúrd be ezt a blokkot
export const metadata: Metadata = {
  title: 'Dr. Majzik Ernő, sportsebész sepcialista ! AllInside.hu',
  description: 'All-inside keresztszalag műtét: A modern sportsebészet legfejlettebb megoldása',
  keywords: ['egészségügy', 'keresztszalag', 'allinside', 'térdműtét', 'térd'],
  openGraph: {
    title: 'Dr. Majzik Ernő, sportsebész sepcialista ! AllInside.hu',
    description: 'All-inside keresztszalag műtét: A modern sportsebészet legfejlettebb megoldása',
    type: 'website',
    url: 'https://allinside.hu/',
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroBanner />

      <div id="roviden">
        <Benefits />
      </div>

      <AboutUs />
      <OurServices />
      {/* <OurDoctors /> */}
      <HowItWorks />
      <Feedbacks />
      <PricingPlan />
      <FrequentlyAskedQuestions />
      {/* <DownloadOurApp /> */}
      {/* <OurBlog /> */}
      <Cta />
    </>
  );
}