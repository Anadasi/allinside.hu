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
      name: "Dr. Aisha Rahman",
      qualification: "MBBS, FCPS (Medicine)",
      specialization: "Internal Medicine",
      experience: "12+ Years of Experience",
      rating: 4.9,
      reviews: 3560,
      imageUrl: "/images/doctors/doctor1.png",
      profileLink: "/doctors/profile",
    },
    {
      id: 2,
      name: "Dr. Mark Davis",
      qualification: "MD, Psychiatry",
      specialization: "Mental Health",
      experience: "8+ Years of Experience",
      rating: 4.8,
      reviews: 2350,
      imageUrl: "/images/doctors/doctor2.png",
      profileLink: "/doctors/profile",
    },
    {
      id: 3,
      name: "Dr. Emily Carter",
      qualification: "MD, FAAD",
      specialization: "Dermatology",
      experience: "11+ Years of Experience",
      rating: 4.7,
      reviews: 1375,
      imageUrl: "/images/doctors/doctor3.png",
      profileLink: "/doctors/profile",
    },
    {
      id: 4,
      name: "Dr. Samuel Lee",
      qualification: "MBBS, MD",
      specialization: "Chronic Conditions",
      experience: "15+ Years of Experience",
      rating: 4.9,
      reviews: 4892,
      imageUrl: "/images/doctors/doctor4.png",
      profileLink: "/doctors/profile",
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
