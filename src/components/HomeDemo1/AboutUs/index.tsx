import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  // Dynamic data
  const aboutData = {
    title: {
      subtitle: "A térdsérülés gyakori sporttal kapcsolatos sérülés",
      title: "Sérülés után gyors és hatékony segítségre van szüksége?",
      description:
        "A sportolás — legyen szó hobbiról vagy versenyszintű tevékenységről — mindig magában hordozza a sérülés kockázatát. Egy rossz mozdulat, egy ütközés, túlterhelés vagy egy visszatérő fájdalom mind elég ahhoz, hogy megálljt parancsoljon a teljesítménynek. Itt jövök én a képbe, sportsebészként: célom, hogy a lehető leggyorsabban és legbiztonságosabban segítsem visszatérni a mozgáshoz, az edzésekhez és a versenyekhez.",
    },
    content: {
      image: {
        src: "/images/about/about.png",
        alt: "image",
      },
      paragraphs: [
        "A gyors és pontos diagnózis után a célom nem csupán a fájdalom csökkentése, hanem a funkció teljes helyreállítása. Minden kezelés egyéni terv szerint történik, sportágspecifikusan és a sportoló céljait szem előtt tartva.",
        "Tudom, hogy minden nap számít — sportolóként nem engedheti meg magának a hosszú kihagyást vagy visszaesést. Az én feladatom, hogy Ön gyorsan, stabilan és fájdalommentesen térjen vissza a pályára — akár hobbisportoló, akár profi versenyző.",
      ],
      link: {
        text: "Időpontkérés",
        href: "/kapcsolat",
      },
    },
    statistics: [
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
                <Link href={aboutData.content.link.href} className="link-btn">
                  {aboutData.content.link.text}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                  >
                    <path
                      d="M12.5 0H0.5C0.224 0 0 0.224 0 0.5C0 0.776 0.224 1 0.5 1H11.2928L0.1465 12.1465C-0.04875 12.3417 -0.04875 12.6583 0.1465 12.8535C0.24425 12.9513 0.372 13 0.5 13C0.628 13 0.756 12.9513 0.8535 12.8535L12 1.707V12.5C12 12.776 12.224 13 12.5 13C12.776 13 13 12.776 13 12.5V0.5C13 0.224 12.776 0 12.5 0Z"
                      fill="white"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="about-fun-inner">
            <div
              className="d-lg-flex d-md-flex justify-content-between"
              style={{ gap: "20px" }}
            >
              {aboutData.statistics.map((stat, index) => (
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
        </div>
      </div>
    </>
  );
};

export default AboutUs;
