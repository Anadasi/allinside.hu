import { Metadata } from 'next';
import PageBanner from "@/components/Layout/PageBanner";
import FrequentlyAskedQuestions from "@/components/Common/FrequentlyAskedQuestions";
import Benefits from "@/components/Common/Benefits";
import Navbar from "@/components/Layout/Navbar";

export const metadata: Metadata = {
  title: 'Gyakori Kérdések | AllInside.hu - Segítünk a válaszokkal',
  description: 'Az alábbi gyakran ismételt kérdések segítenek megérteni az All-inside keresztszalag-műtét lényegét, előnyeit és a felépülés folyamatát.',
};

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Gyakori kérdések"
        shortText="Az alábbi gyakran ismételt kérdések segítenek megérteni az All-inside keresztszalag-műtét lényegét, előnyeit és a felépülés folyamatát."
        homePageUrl="/"
        homePageText="Főoldal"
        activePageText="Gyakori kérdések"
        image="/images/page-banner.png"
      />

      <Benefits />

      <div className="linear-gradient-inner">
        <FrequentlyAskedQuestions />
      </div>
    </>
  );
}
