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
      question: "What types of conditions can Doutor treat?",
      answer:
        "Leggyakrabban a saját semitendinosus (combhajlító) inát használjuk, amelyet a műtét során több rétegben összehajtva („quadruplálva”) rögzítünk. Ez elegendő szilárdságot és hosszúságot biztosít, miközben a többi izom működését nem befolyásolja számottevően.",
    },
    {
      question: "Will I receive a prescription after my consultation?",
      answer:
        "A műtét artroszkópos (kulcslyuk) technikával történik. Kisebb metszésekből, kamerával és speciális műszerekkel dolgozunk. A műtét átlagosan 60–90 percig tart, és legtöbbször egynapos sebészet keretében, azaz kórházi bennfekvés nélkül végezhető.",
    },
    {
      question: "Is my health information safe and private?",
      answer:
        "Yes. Doutor is fully compliant with HIPAA and other privacy regulations. Your data is encrypted and securely stored to ensure your personal health information stays confidential.",
    },
    {
      question: "Can I choose which doctor I see?",
      answer:
        "Absolutely. You can browse available providers by specialty, experience, ratings, and availability—then choose the one who best fits your needs.",
    },
    {
      question: "What devices can I use for my virtual visit?",
      answer:
        "You can join your virtual visit from a smartphone, tablet, or computer. All you need is a stable internet connection and a device with a camera and microphone.",
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
