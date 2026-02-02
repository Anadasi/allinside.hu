import FrequentlyAskedQuestions from "@/components/Common/FrequentlyAskedQuestions";
import ContactForm from "@/components/ContactUs/ContactForm";
import ContactInfo from "@/components/ContactUs/ContactInfo";
import Navbar from "@/components/Layout/Navbar";
import PageBanner from "@/components/Layout/PageBanner";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Kapcsolat"
        shortText="Amennyiben kérdése van az all-inside keresztszalag-rekonstrukcióval vagy a műtéti lehetőségekkel kapcsolatban, forduljon hozzánk bizalommal."
        homePageUrl="/"
        homePageText="Főoldal"
        activePageText="Kapcsolat"
        image="/images/page-banner.png"
      />

      <ContactInfo />

      <ContactForm />

      <div className="linear-gradient-inner">
        <FrequentlyAskedQuestions />
      </div>
    </>
  );
}
