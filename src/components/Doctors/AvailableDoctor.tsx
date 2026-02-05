import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Doctor {
  id: number;
  name: string;
  qualification: string;
  specialization: string;
  experience: string;
  rating: number;
  reviews: number;
  imageUrl: string;
  profileLink: string;
}

const AvailableDoctor = () => {
  // Sample doctor data - this could come from an API or CMS
  const doctorsData: Doctor[] = [
    {
      id: 1,
      name: "Dr. Majzik Ernő",
      qualification: "Ortopéd szakorvos, Budapest és Siófok",
      specialization: "Sportsebész specialista",
      experience: "30 év szakmai tapasztalat",
      rating: 5,
      reviews: 66,
      imageUrl: "/images/doctors/doctor1.png",
      profileLink: "/doctor/bemutatkozas",
    },
  ];

  // Function to render star ratings
  const renderRatingStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <li key={i}>
            <i className="ri-star-fill"></i>
          </li>
        ))}
        {hasHalfStar && (
          <li>
            <i className="ri-star-half-fill"></i>
          </li>
        )}
        {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
          <li key={i + fullStars}>
            <i className="ri-star-line"></i>
          </li>
        ))}
      </>
    );
  };

  return (
    <>

    </>
  );
};

export default AvailableDoctor;
