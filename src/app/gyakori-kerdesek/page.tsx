import PageBanner from "@/components/Layout/PageBanner";
import FrequentlyAskedQuestions from "@/components/Common/FrequentlyAskedQuestions";
import Benefits from "@/components/Common/Benefits";
import Navbar from "@/components/Layout/Navbar";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Gyakori kérdések"
        shortText="Az alábbi gyakran ismételt kérdések segítenek megérteni az All-inside keresztszalag-műtét lényegét, előnyeit és a felépülés folyamatát."
        homePageUrl="/"
        homePageText="Home"
        activePageText="FAQ's"
        image="/images/page-banner.png"
      />

      <Benefits />

      <div className="linear-gradient-inner">
        <FrequentlyAskedQuestions />
      </div>
    </>
  );
}
