import AboutUsContent from "@/components/AboutUs/AboutUsContent";
import Benefits from "@/components/Common/Benefits";
import HowItWorks from "@/components/Common/HowItWorks";
import OurDoctors from "@/components/Common/OurDoctors";
import Feedbacks from "@/components/Common/Feedbacks";
import WhatDrivesUs from "@/components/Common/WhatDrivesUs";
import PageBanner from "@/components/Layout/PageBanner";
import FrequentlyAskedQuestions from "@/components/HomeDemo1/FrequentlyAskedQuestions";
import Cta from "@/components/Common/Cta";
import Navbar from "@/components/Layout/Navbar";

export default function Page() {
  return (
    <>
      <Navbar />
      
      <PageBanner
        pageTitle="About Doutor"
        shortText="We are dedicated to transforming healthcare by making expert medical care accessible, affordable, and compassionate—wherever you are"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About Doutor"
        image="/images/page-banner.png"
      />

      <Benefits />

      <AboutUsContent />

      <HowItWorks />

      <OurDoctors />

      <WhatDrivesUs />

      <Feedbacks />

      <div className="pt-140">
        <FrequentlyAskedQuestions />
      </div>

      <Cta />
    </>
  );
}
