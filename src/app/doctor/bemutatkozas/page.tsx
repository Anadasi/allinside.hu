import { Metadata } from 'next';
import AvailableDoctor from "@/components/Doctors/AvailableDoctor";
import DoctorProfileContent from "@/components/Doctors/DoctorProfileContent";
import Navbar from "@/components/Layout/Navbar";

export const metadata: Metadata = {
  title: 'Bemutatkozás: Dr. Majzik Ernő | AllInside.hu',
  description: 'Sportsebészként célom, hogy segítsek a pácienseknek visszatérni a mozgás öröméhez, legyen szó hobbi- vagy élsportolóról. ',
};

export default function Page() {
  return (
    <>
      <Navbar />

      <DoctorProfileContent />

      <AvailableDoctor />
    </>
  );
}
