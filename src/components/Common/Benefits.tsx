import React from "react";
import Image from "next/image";

const Benefits = () => {
  // Dynamic data array
  const benefitsData = [
    {
      id: 1,
      icon: "/images/icons/benefit2.svg",
      title: "Kevesebb csontelvétel",
      description: "Csak az ízület belső részében történik fúrás, nem hatolunk át teljesen a csonton.",
    },
    {
      id: 2,
      icon: "/images/icons/benefit3.svg",
      title: "Erősebb graft-rögzítés",
      description: "Különleges felfüggesztő rendszerek biztosítják a stabil rögzítést (pl. TightRope).",
    },
    {
      id: 3,
      icon: "/images/icons/benefit1.svg",
      title: "Kisebb műtéti terhelés",
      description: "Enyhébb szöveti károsodás, kisebb metszések, kevésbé látható hegek, gyorsabb és esztétikusabb sebgyógyulás.",
    },
    {
      id: 4,
      icon: "/images/icons/benefit4.svg",
      title: "Gyorsabb rehabilitáció",
      description: "A páciensek jellemzően hamarabb térhetnek vissza sporthoz, munkához, aktív életmódhoz.",
    },
  ];

  return (
    <>
      <div className="benefits-area ptb-140">
        <div className="container">
          <div className="section-title">
            <div className="row justify-content-center align-items-center g-4">
              <div className="col-lg-7 col-md-12">
                <div className="left">
                  <span className="sub">A lényeg röviden</span>
                  <h2>Mi az „All-inside” technika és miért előnyös ez a modern beavatkozás?</h2>
                </div>
              </div>
              <div className="col-lg-5 col-md-12">
                <div className="right">
                  <p>
                     Az „All-inside” egy olyan korszerű sebészeti eljárás, amelyet elülső keresztszalag (ACL) szakadás esetén alkalmazunk. A módszer lényege, hogy kisebb feltárással, precíziós eszközökkel, minimálisan invazív módon történik a szalag pótlása. A beavatkozás fő előnyei a páciensek szempontjából:


                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Dynamic rendering of benefit cards */}
          <div className="row justify-content-center g-4">
            {benefitsData.map((benefit, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="benefit-card">
                  <div className="icon">
                    <Image
                      src={benefit.icon}
                      alt={benefit.title}
                      width={60}
                      height={60}
                      style={{ width: "auto", height: "auto" }}
                    />
                  </div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefits;
