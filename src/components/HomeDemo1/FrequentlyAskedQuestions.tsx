"use client";

import React, { useState } from "react";

const FrequentlyAskedQuestions = () => {
  // State to track which accordion item is open
  const [openIndex, setOpenIndex] = useState<number>(0);

  // FAQ data
  const faqData = [
    {
      question: "Mi az „All-inside” technika és miben különbözik a hagyományos térd műtéttől?",
      answer:
        "Az „All-inside” egy modern, minimálisan invazív eljárás az elülső keresztszalag (ACL) pótlására. A hagyományos műtéteknél általában teljes csontcsatornát fúrnak keresztül a combcsonton és a sípcsonton. Ezzel szemben az All-inside technika csak félig (belülről) fúr, így kevesebb csontot és szövetet érint. Ez kevesebb fájdalmat, kisebb heget, gyorsabb felépülést és esztétikusabb gyógyulást eredményez.",
    },
    {
      question: "Mikor javasolt az All-inside technika?",
      answer:
        "Az eljárás ideális: fiatal, aktív életet élő pácienseknek, hobbi- és élsportolóknak, ha fontos a gyors visszatérés a sportba vagy fizikai munkába, illetve olyan esetekben is, amikor revíziós (újrakezdett) műtétre van szükség.",
    },
    {
      question: "Milyen ínból készül az új keresztszalag (graft)?",
      answer:
        "Leggyakrabban a saját semitendinosus (combhajlító) inát használjuk, amelyet a műtét során több rétegben összehajtva („quadruplálva”) rögzítünk. Ez elegendő szilárdságot és hosszúságot biztosít, miközben a többi izom működését nem befolyásolja számottevően.",
    },
    {
      question: "Hogyan történik a műtét, és meddig tart?",
      answer:
        "A műtét artroszkópos (kulcslyuk) technikával történik. Kisebb metszésekből, kamerával és speciális műszerekkel dolgozunk. A műtét átlagosan 60–90 percig tart, és legtöbbször egynapos sebészet keretében, azaz kórházi bennfekvés nélkül végezhető.",
    },
    {
      question: "Fájdalmas a beavatkozás?",
      answer:
        "A műtét altatásban vagy regionális érzéstelenítésben zajlik, így semmit nem fog érezni közben. Utána enyhe-mérsékelt fájdalom előfordulhat, de ezt hatékonyan lehet kezelni fájdalomcsillapítókkal. Az All-inside technika előnye, hogy kevesebb fájdalommal jár, mint a klasszikus eljárások.",
    },
    {
      question: "Mennyi ideig tart a felépülés?",
      answer:
        "Ez egyénfüggő, de általánosan elmondható: manuális munkához vagy irodai munkához: 2–4 hét, sporthoz való visszatérés esetén: 5–9 hónap, sportágtól és edzettségi szinttől függően. A rehabilitáció során gyógytornász segíti a fokozatos visszatérést a mozgáshoz.",
    },
    {
      question: "Milyen szövődményekkel kell számolni?",
      answer:
        "Mint minden műtétnél, itt is előfordulhatnak ritka szövődmények: fertőzés, vérömleny, ízületi merevség vagy fájdalom. Az All-inside technika azonban kisebb invazivitása miatt csökkentheti ezek kockázatát.",
    },
  ];

  // Toggle accordion item
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <>
      <div className="faq-area pb-140">
        <div className="container">
          <div className="section-title">
            <div className="row justify-content-center align-items-center g-4">
              <div className="col-lg-7 col-md-12">
                <div className="left">
                  <span className="sub">Frequently Asked Questions</span>
                  <h2>Everything You Need to Know About Doutor</h2>
                </div>
              </div>
              <div className="col-lg-5 col-md-12">
                <div className="right">
                  <p>
                    Find quick answers to common questions about virtual visits,
                    insurance, prescriptions, and more.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center g-4">
            <div className="col-lg-6 col-md-12">
              <div
                className="faq-image"
                style={{ backgroundImage: "url(/images/faq.jpg)" }}
              ></div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="faq-accordion">
                <div className="accordion">
                  {faqData.map((item, index) => (
                    <div key={index} className="accordion-item">
                      <button
                        className={`accordion-button ${
                          openIndex === index ? "" : "collapsed"
                        }`}
                        type="button"
                        onClick={() => toggleAccordion(index)}
                      >
                        {item.question}
                      </button>
                      <div
                        className={`accordion-collapse collapse ${
                          openIndex === index ? "show" : ""
                        }`}
                      >
                        <div className="accordion-body">
                          <p>{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrequentlyAskedQuestions;
