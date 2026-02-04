"use client";

import React from "react";
import Image from "next/image";

const AboutUsContent = () => {
  // Dynamic data
  const aboutData = {
    title: {
      subtitle: "Rólunk",
      title: "Dr. Majzik Ernő - Modern Ortopédiai Megoldások",
      description:
        "Ez az innovatív eljárás Magyarországon elsőként Majzik doktor nevéhez fűződik, aki 2022 szeptembere óta alkalmazza sikeresen az All-inside keresztszalag-pótlási technikát. Jelenleg ő az egyetlen szakember hazánkban, aki több száz ilyen típusú műtétet végzett el.",
    },
    content: {
      image: {
        src: "/images/about/about.png",
        alt: "Dr. Majzik Ernő műtét közben",
      },
      paragraphs: [
        "Küldetésünk, hogy lebontsuk az akadályokat a páciensek és a megérdemelt minőségi ellátás között. Hiszünk abban, hogy az orvostudomány fejlődése és a technológia ötvözése gyorsabb és fájdalommentesebb gyógyulást tesz lehetővé.",
        "Az All-inside módszer különleges előnye, hogy gyermek- és serdülőkorban is biztonságosan alkalmazható, mivel ez az egyetlen keresztszalag-pótlási technika, amely elvégezhető a növekedési zónák lezárulása előtt, jellemzően 12–18 éves korban.",
        "A legmodernebb technológiával, szigorú adatbiztonsági protokollokkal és elkötelezett csapattal segítünk pácienseinknek abban, hogy gyorsan, biztonságosan és kényelmesen visszanyerjék mozgásszabadságukat.",
      ],
    },
  };

  return (
    <>
      <div className="about-area ptb-140">
        <div className="container">
          <div className="section-title">
            <div className="row justify-content-center align-items-center g-4">
              <div className="col-lg-7 col-md-12">
                <div className="left">
                  <span className="sub">{aboutData.title.subtitle}</span>
                  <h2 className="text-white">{aboutData.title.title}</h2>
                </div>
              </div>
              <div className="col-lg-5 col-md-12">
                <div className="right">
                  <p className="text-white">{aboutData.title.description}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center align-items-center g-5">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <Image
                  src={aboutData.content.image.src}
                  alt={aboutData.content.image.alt}
                  width={1270}
                  height={700}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                {aboutData.content.paragraphs.map((paragraph, index) => (
                  <p key={index} className={index === 1 ? "left" : ""}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Statisztikai rész eltávolítva a hibák elkerülése végett */}
        </div>
      </div>
    </>
  );
};

export default AboutUsContent;