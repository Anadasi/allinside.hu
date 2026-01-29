import BookAnAppointmentForm from "@/components/BookAnAppointment/BookAnAppointmentForm";
import FrequentlyAskedQuestions from "@/components/Common/FrequentlyAskedQuestions";
import Navbar from "@/components/Layout/Navbar";
import PageBanner from "@/components/Layout/PageBanner";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Schedule Your Visit"
        shortText="Get expert care at your convenience—book a virtual consultation in minutes."
        homePageUrl="/"
        homePageText="Home"
        activePageText="Book An Appointment"
        image="/images/page-banner.png"
      />

      <BookAnAppointmentForm />

      <div className="linear-gradient-inner">
        <FrequentlyAskedQuestions />
      </div>
    </>
  );
}
