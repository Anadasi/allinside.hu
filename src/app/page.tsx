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

export default function Home() {
  return (
    <>
      <Navbar />

      <HeroBanner />

      <Benefits />

      <AboutUs />

      <OurServices />

      <OurDoctors />

      <HowItWorks />

      <Feedbacks />

      <PricingPlan />

      <FrequentlyAskedQuestions />

      <DownloadOurApp />

      <OurBlog />

      <Cta />
    </>
  );
}
