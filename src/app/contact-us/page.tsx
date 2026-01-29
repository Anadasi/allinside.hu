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
        pageTitle="We're Here to Help"
        shortText="Have questions about our services, need support, or want to speak with our team? Reach out—we're ready to assist you 24/7."
        homePageUrl="/"
        homePageText="Home"
        activePageText="Contact Us"
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
