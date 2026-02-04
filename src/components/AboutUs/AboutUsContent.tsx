import React from "react";
import Image from "next/image";

const AboutUsContent = () => {
  // Dynamic data
  const aboutData = {
    title: {
      subtitle: "About Us",
      title: "Transforming Healthcare Through Technology and Compassion",
      description:
        "Ez az innovatív eljárás Magyarországon elsőként Majzik doktor nevéhez fűződik, aki 2022 szeptembere óta alkalmazza sikeresen az All-inside keresztszalag-pótlási technikát. Jelenleg ő az egyetlen szakember hazánkban, aki több száz ilyen típusú műtétet végzett el.",
    },
    content: {
      image: {
        src: "/images/about/about.png",
        alt: "image",
      },
      paragraphs: [
        "Doutor was founded with a simple mission: to remove the barriers between patients and the quality care they deserve. In a world where time is limited and access to healthcare isn't always easy, we believe in a smarter, more human way to care for people—digitally.",
        "Az All-inside módszer különleges előnye, hogy gyermek- és serdülőkorban is biztonságosan alkalmazható, mivel ez az egyetlen keresztszalag-pótlási technika, amely elvégezhető a növekedési zónák lezárulása előtt, jellemzően 12–18 éves korban.",
        "With cutting-edge technology, strong data security practices, and a passionate care team, we've helped hundreds of thousands of patients receive treatment quickly, safely, and comfortably.",
      ],
    },
    /* statistics: [
      {
        id: 1,
        numbers: ["4", ".", "2"],
        suffix: "M+",
        description: "Consultations Completed",
      },
      {
        id: 2,
        numbers: ["5"],
        suffix: "Minutes",
        description: "Avg. Wait Time",
      },
      {
        id: 3,
        numbers: ["10"],
        suffix: "M+",
        description: "App Downloads",
      },
      {
        id: 4,
        numbers: ["99"],
        suffix: "%",
        description: "Satisfaction Rate",
      },
    ],
    */
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

         </div>
          </div>

          {/* A statisztikai rész teljesen eltávolítva/elrejtve */}
          {/* <div className="about-fun-inner">
            <div
              className="d-lg-flex d-md-flex justify-content-between"
              style={{ gap: "20px" }}
            >
              {aboutData.statistics && aboutData.statistics.map((stat, index) => (
                <div key={index} className="custom-grid">
                  <div className="fun">
                    <div className="d-flex align-items-center">
                      {stat.numbers.map((num, numIndex) => (
                        <React.Fragment key={numIndex}>
                          {numIndex === 0 && num === "." ? (
                            <h3 className="sub">.</h3>
                          ) : (
                            <h3 className="counter">{num}</h3>
                          )}
                        </React.Fragment>
                      ))}
                      <h3 className="sub">{stat.suffix}</h3>
                    </div>
                    <span>{stat.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          */}

        </div> 
      </div>
    </>
  );
};

export default AboutUsContent;