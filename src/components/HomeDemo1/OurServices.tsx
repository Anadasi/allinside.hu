import React from "react";
import Image from "next/image";
import Link from "next/link";

function OurServices() {
  const servicesData = [
    {
      id: 1,
      icon: "/images/icons/service6.svg",
      title: "Graft típusa",
      description:
        "Jellemzően quadruplált semitendinosus ín, amely önmagában is megfelelő hosszúságú és szilárdságú.",
      features: ["Megfelelő hosszúság", "Nagy szilárdság", "Gyorsabb beépülés"],
    },
    {
      id: 2,
      icon: "/images/icons/benefit3.svg",
      title: "Rögzítés",
      description:
        "Mindkét oldalon felfüggesztéses (suspensiós) rögzítés történik (pl. TightRope rendszerrel).",
      features: ["TightRope technológia", "Stabil rögzítés", "Csavarmentes megoldás"],
    },
    {
      id: 3,
      icon: "/images/icons/work2.svg",
      title: "Fúrási technika",
      description:
        "Retrográd fúrók segítségével történik a „socket” kialakítása (pl. FlipCutter).",
      features: ["FlipCutter fúró", "Minimális csontveszteség", "Precíz kialakítás"],
    },
    {
      id: 4,
      icon: "/images/icons/work3.svg",
      title: "Műtéti idő",
      description:
        "Tapasztalt kezekben rövidebb, mint a hagyományos technikáé.",
      features: ["Gyorsabb lefolyás", "Kevesebb altatási idő", "Hatékonyabb rehabilitáció"],
    },
  ];

  return (
    <>
      <div className="services-area ptb-140">
        <div className="container">
          <div className="section-title">
            <div className="row justify-content-center align-items-center g-4">
              <div className="col-lg-7 col-md-12">
                <div className="left">
                  <span className="sub">További részletek</span>
                  <h2>Az All-inside eljárás szakmai szemmel</h2>
                </div>
              </div>
              <div className="col-lg-5 col-md-12">
                <div className="right">
                  <p>
                    Az All-inside óriási előnye, hogy a csontban a furat hossza pontosan akkora, amekkora helyre a beültetett graftnak szüksége van. Másik előnye, hogy a csont belsejében nincs rögzítő elem (pl.: csavar), ezáltal az ín beépülése körkörösen lehetséges.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center g-4">
            {servicesData.map((service: any, index: number) => (
              <div key={index} className="col-xl-3 col-md-6">
                <div className="service-card">
                  <div className="top">
                    <div className="icon">
                      <Image
                        src={service.icon}
                        alt="icon"
                        width={60}
                        height={60}
                      />
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                  <div className="bottom">
                    <ul className="list">
                      {service.features.map((feature: any, fIdx: number) => (
                        <li key={fIdx}>
                          <i className="ri-check-line"></i>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default OurServices;