"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CalendarContent from "./CalendarContent";

// Define interfaces for our data structure
interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

interface Review {
  name: string;
  initial: string;
  rating: number;
  comment: string;
}

interface DoctorProfileData {
  name: string;
  title: string;
  specialty: string;
  reviews: {
    rating: number;
    count: number;
    totalCount: string;
  };
  experience: string;
  licenseId: string;
  note: string;
  socialLinks: SocialLink[];
  profileImage: string;
  about: {
    title: string;
    paragraphs: string[];
  };
  services: {
    included: string[];
    excluded: string[];
  };
  experienceDetails: {
    yearsOfPractice: string;
    previousInstitutions: string[];
    specialClinicalFocus: string[];
    languagesSpoken: string[];
  };
  reviewsList: Review[];
}

// Dynamic data object
const doctorData: DoctorProfileData = {
  name: "Dr. Majzik Ernő",
  title: "Rendelési helyek: Budapest és Siófok",
  specialty: "Sportsebész specialista",
  reviews: {
    rating: 5,
    count: 65,
    totalCount: "5,200+",
  },
  experience: "30 év",
  licenseId: "",
  note: "40.000+ térd, váll, csípő és boka műtét",
  socialLinks: [
    {
      platform: "facebook",
      url: "https://www.facebook.com/drmajzikerno",
      icon: "/images/icons/facebook.svg",
    },
    {
      platform: "linkedin",
      url: "https://www.linkedin.com/in/dr-majzik-erno/",
      icon: "/images/icons/linkedin.svg",
    },
    {
      platform: "instagram",
      url: "https://www.instagram.com/dr.majzik.erno/",
      icon: "/images/icons/instagram.svg",
    },
  ],
  profileImage: "/images/banner/banner-me.png",
  about: {
    title: "Bemutatkozás",
    paragraphs: [
      "Sportsebészként célom, hogy segítsek a pácienseknek visszatérni a mozgás öröméhez – legyen szó hobbi- vagy élsportolóról. A modern sebészeti technikák és személyre szabott rehabilitáció révén hatékonyan kezelem a térd, váll, boka és más mozgásszervi sérüléseket, biztosítva a gyors és tartós felépülést. Több ezer műtéttel a hátam mögött széleskörű tapasztalattal rendelkezem és betegek ezreinek segítettem pályafutásom során.",
      "Célom nem csupán a fájdalom megszüntetése, hanem a mielőbbi visszatérés az aktív, fájdalommentes élethez.",
      "Szakterületeim a boka-, térd- és vállsérülések gyógyítása.",
    ],
  },
  services: {
    included: [],
    excluded: [],
  },
  experienceDetails: {
    yearsOfPractice: "30 év",
    previousInstitutions: [],
    specialClinicalFocus: [],
    languagesSpoken: ["Magyar", "Angol"],
  },
  reviewsList: [],
};

const DoctorProfileContent = () => {
  // Alapértelmezettként a Bemutatkozás (1) legyen nyitva
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="ri-star-fill"></i>);
    }
    if (hasHalfStar) {
      stars.push(<i key="half" className="ri-star-half-fill"></i>);
    }
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="ri-star-line"></i>);
    }
    return stars;
  };

  return (
    <>
      <div className="doctor-profile-area pb-140">
        <div className="container">
          <div className="row justify-content-center g-4">
            <div className="col-lg-3 col-md-12">
              <div className="doctor-profile-image">
                <Image
                  src={doctorData.profileImage}
                  alt={doctorData.name}
                  width={611}
                  height={917}
                />
                <div className="info-social">
                  <h5>Közösségi média</h5>
                  <ul className="list">
                    {doctorData.socialLinks.map((link, index) => (
                      <li key={index}>
                        <a href={link.url} target="_blank">
                          <Image
                            src={link.icon}
                            alt={link.platform}
                            width={25}
                            height={25}
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-9 col-md-12">
              <div className="doctor-profile-desc">
                <div className="profile-content">
                  <h2>{doctorData.name}</h2>
                  <span className="sub">{doctorData.title}</span>
                  <span className="tag">{doctorData.specialty}</span>
                  <div className="info">
                    <ul className="left">
                      <li>
                        <span className="mid">Értékelés</span>
                        <div className="rating-info">
                          <div className="list">
                            {renderStars(doctorData.reviews.rating)}
                          </div>
                          <b>{doctorData.reviews.rating}</b>
                        </div>
                      </li>
                      <li>
                        <span className="mid">Tapasztalat</span>
                        <strong className="semi">{doctorData.experience}</strong>
                      </li>
                    </ul>
                    <div className="right-btn">
                      <Link href="/book-an-appointment" className="default-btn">
                        Időpontfoglalás
                      </Link>
                    </div>
                  </div>
                  <div className="note">
                    <p><span>Megjegyzés:</span> {doctorData.note}</p>
                  </div>
                </div>

                <div className="profile-tabs">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                      <button
                        type="button"
                        onClick={() => handleTabClick(1)}
                        className={`nav-link ${activeTab === 1 ? "active" : ""}`}
                      >
                        Bemutatkozás
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        type="button"
                        onClick={() => handleTabClick(2)}
                        className={`nav-link ${activeTab === 2 ? "active" : ""}`}
                      >
                        Szakmai pályafutás
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        type="button"
                        onClick={() => handleTabClick(3)}
                        className={`nav-link ${activeTab === 3 ? "active" : ""}`}
                      >
                        Hitvallás
                      </button>
                    </li>
                  </ul>

                  <div className="tab-content">
                    {/* BEMUTATKOZÁS */}
                    {activeTab === 1 && (
                      <div className="about-tab-content pt-4">
                        <h4>{doctorData.about.title}</h4>
                        {doctorData.about.paragraphs.map((p, i) => (
                          <p key={i}>{p}</p>
                        ))}
                      </div>
                    )}

                    {/* SZAKMAI PÁLYAFUTÁS */}
                    {activeTab === 2 && (
                      <div className="experience-content pt-4">
                        <h4>Szakmai pályafutás</h4>
                        <p>
                          1995-ben végeztem a SOTE Általános Orvostudományi Karán, majd 2000-ben Traumatológiai szakvizsgát tettem. 19 évig dolgoztam a Székesfehérvári Kórház Traumatológiáján és Sportsebészetén, ahonnan 2016-ban kerültem át a Siófoki Kórházhoz, ahol a Baleseti sebészeti Osztály vezetője lettem, valamint létrehoztam a Sportsebészeti részleget. 2021 januárjától új kihívások elé néztem és orvosigazgatóként kezdtem el vezetni a Budaörsi Egészségcentrumot. Svájcban, Ausztriában és Németországban több tanulmányúton vettem részt elsősorban a Sporttraumatológia tárgykörében. Sportsebészként számos kézilabda, futball, valamint kosárlabdaklubbal szerződtem. Többek között a Magyar Jégkorong válogatott orvosa vagyok 2003 óta.
                      </div>
                    )}

                    {/* HITVALLÁS */}
                    {activeTab === 3 && (
                      <div className="about-tab-content pt-4">
                        <h4>Hitvallás</h4>
                        <p>Sporttraumatológusnak vallom magam. Kihívás számomra, hogy mindenki úgy épüljön fel sérüléseiből, hogy visszatérhessen a sport világába legyen az profi vagy amatőr sportoló. Ami a mai orvoslásban elérhető, azoknak a lehetőségeknek a tárházát alkalmazom a gyógyítás során. Tapasztalataim alapján igen jó százalékkal megállapítom a sérüléseket, de szívesen használok a kornak megfelelő diagnosztikai lehetőségeket, mint MRI, RTG vagy Ultrahang hiszen ezekkel a lehetőségekkel egy teljes körű képet tudunk kapni a sérülésről, a fájdalom kiindulási helyéről.</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorProfileContent;