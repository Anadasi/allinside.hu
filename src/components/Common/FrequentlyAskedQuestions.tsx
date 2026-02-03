"use client";

import React, { useState } from "react";

const FrequentlyAskedQuestions = () => {
  // FAQ data
  const faqs = [
    {
      id: 1,
      question: "Mi az „All-inside” technika és miben különbözik a hagyományos térd műtéttől?",
      answer: [
        "Az „All-inside” egy modern, minimálisan invazív eljárás az elülső keresztszalag (ACL) pótlására. A hagyományos műtéteknél általában teljes csontcsatornát fúrnak keresztül a combcsonton és a sípcsonton. Ezzel szemben az All-inside technika csak félig (belülről) fúr, így kevesebb csontot és szövetet érint. Ez kevesebb fájdalmat, kisebb heget, gyorsabb felépülést és esztétikusabb gyógyulást eredményez.",
      ],
    },
    {
      id: 2,
      question: "Mikor javasolt az All-inside technika?",
      answer: [
        "Az eljárás ideális fiatal, aktív életet élő pácienseknek, hobbi- és élsportolóknak, ha fontos a gyors visszatérés a sportba vagy fizikai munkába, illetve olyan esetekben is, amikor revíziós (újrakezdett) műtétre van szükség.",
      ],
    },
    {
      id: 3,
      question: "Milyen ínból készül az új keresztszalag (graft)?",
      answer: [
        "Leggyakrabban a saját semitendinosus (combhajlító) inát használjuk, amelyet a műtét során több rétegben összehajtva („quadruplálva”) rögzítünk. Ez elegendő szilárdságot és hosszúságot biztosít, miközben a többi izom működését nem befolyásolja számottevően.",
      ],
    },
    {
      id: 4,
      question: "Hogyan történik a műtét, és meddig tart?",
      answer: [
        "A műtét artroszkópos (kulcslyuk) technikával történik. Kisebb metszésekből, kamerával és speciális műszerekkel dolgozunk. A műtét átlagosan 60–90 percig tart, és legtöbbször egynapos sebészet keretében, azaz kórházi bennfekvés nélkül végezhető.",
      ],
    },
    {
      id: 5,
      question: "Fájdalmas a beavatkozás?",
      answer: [
        "A műtét altatásban vagy regionális érzéstelenítésben zajlik, így semmit nem fog érezni közben. Utána enyhe-mérsékelt fájdalom előfordulhat, de ezt hatékonyan lehet kezelni fájdalomcsillapítókkal. Az All-inside technika előnye, hogy kevesebb fájdalommal jár, mint a klasszikus eljárások.",
      ],
    },
    {
      id: 6,
      question: "Mennyi ideig tart a felépülés?",
      answer: [
        "Ez egyénfüggő, de általánosan elmondható: manuális munkához vagy irodai munkához: 2–4 hét, sporthoz való visszatérés esetén: 5–9 hónap, sportágtól és edzettségi szinttől függően. A rehabilitáció során gyógytornász segíti a fokozatos visszatérést a mozgáshoz.",
      ],
    },
    {
      id: 7,
      question: "Milyen szövődményekkel kell számolni?",
      answer: [
        "Mint minden műtétnél, itt is előfordulhatnak ritka szövődmények: fertőzés, vérömleny, ízületi merevség vagy fájdalom. Az All-inside technika azonban kisebb invazivitása miatt csökkentheti ezek kockázatát.",
      ],
    },
        {
      id: 8,
      question: "Milyen életminőség várható a műtét után?",
      answer: [
        "A legtöbb páciens teljesen visszanyeri térde stabilitását és funkcióját. Az All-inside eljárás lehetővé teszi a sporthoz való biztonságos visszatérést, akár profi szinten is. A megfelelő rehabilitáció és fokozatosság kulcsfontosságú a hosszú távú sikerhez.",
      ],
    },
        {
      id: 9,
      question: "Előzetes kivizsgálás és MRI szükséges. Fontos a térd körüli izomzat erősítése a műtét előtt (prehabilitáció). A műtét előtt részletes tájékoztatást és írásos beleegyezést is kap. Ne felejtsen el kérdéseket felírni az orvosnak!",
      answer: [
        "",
      ],
    },
        {
      id: 10,
      question: "Mi történik, ha halogatom a műtétet?",
      answer: [
        "Kezeletlen ACL-szakadás esetén: a térd instabillá válik, növekszik a porckopás és meniscus-sérülés kockázata, a sport és aktív élet korlátozódik. A konzervatív kezelés néhány esetben működhet, de aktív életvitel esetén a műtét a biztosabb megoldás.",
      ],
    },
  ];

  // State to track which FAQ is open
  const [openFaqId, setOpenFaqId] = useState<number | null>(1);

  // Toggle FAQ open/close
  const toggleFaq = (id: number) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <>
      <div className="faq-area ptb-140">
        <div className="container">
          <div className="section-title">
            <div
              className="left text-center"
              style={{
                maxWidth: "637px",
                margin: "auto",
              }}
            >
              <span className="sub wrap2">All-inside kisokos</span>
              <h2>Gyakran felmerülő kérdések</h2>
            </div>
          </div>

          <div className="faq-accordion wrap-style2">
            <div className="accordion">
              {faqs.map((faq) => (
                <div key={faq.id} className="accordion-item wrap2">
                  <button
                    className={`accordion-button ${
                      openFaqId !== faq.id ? "collapsed" : ""
                    }`}
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                  >
                    {faq.question}
                  </button>
                  <div
                    className={`accordion-collapse collapse ${
                      openFaqId === faq.id ? "show" : ""
                    }`}
                  >
                    <div className="accordion-body">
                      {faq.answer.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
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

export default FrequentlyAskedQuestions;
