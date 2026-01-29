import React from "react";
import Image from "next/image";

// Step data structure
interface WorkStep {
  id: number;
  icon: string;
  title: string;
  description: string;
  vectorImage?: string;
  vectorWidth?: number;
  vectorHeight?: number;
}

const HowItWorks = () => {
  // Steps data - this could come from an API or CMS
  const workSteps: WorkStep[] = [
    {
      id: 1,
      icon: "/images/icons/work1.svg",
      title: "Időpontkérés, alapos vizsgálat és személyre szabott konzultáció",
      description: "Az időpont kérést követően részletes ortopédiai vizsgálatra és személyre szabott konzultációra kerül sor, ahol a páciens minden kérdésre választ kap. A kezelési terv minden esetben egyénre szabottan, a beteg életkorához, aktivitási szintjéhez és egyéni adottságaihoz igazodik, a legmegfelelőbb megoldás kiválasztásával.",
      vectorImage: "/images/vector1.png",
      vectorWidth: 42,
      vectorHeight: 88,
    },
    {
      id: 2,
      icon: "/images/icons/work2.svg",
      title: "A műtét menete",
      description: "A műtétet artroszkópos módszerrel végezzük, amely minimálisan invazív, azaz kisebb bemetszéssel jár. A sebész a térdízületbe kis kamerát (artroszkópot) és speciális műszereket vezet be, hogy lássa a sérülést, és a beavatkozást pontosan végezze el.",
      vectorImage: "/images/vector2.png",
      vectorWidth: 30,
      vectorHeight: 91,
    },
    {
      id: 3,
      icon: "/images/icons/work3.svg",
      title: "Rehabilitáció",
      description: "Az All-inside műtét után a rehabilitáció hasonlóan zajlik, mint más keresztszalag műtét esetén, célja a térd stabilizálása, az izomerő visszaállítása, valamint a mozgástartomány fokozatos visszanyerése. Ez az eljárás elsősorban azoknak ajánlott, akik elülső keresztszalag szakadás miatt szenvednek és akiknek a sérülései olyan mértékűek, hogy az artroszkópos műtét megfelelő megoldást kínál.",
    },
  ];

  return (
    <>
      <div className="work-area ptb-140">
        <div className="container">
          <div className="section-title">
            <div className="row justify-content-center align-items-center g-4">
              <div className="col-lg-7 col-md-12">
                <div className="left">
                  <span className="sub">How It Works</span>
                  <h2>
                    How Doutor Works—Signup to Consultation in Just Minutes
                  </h2>
                </div>
              </div>
              <div className="col-lg-5 col-md-12">
                <div className="right">
                  <p>
                    Skip the waiting room and take control of your health in
                    three simple steps. With Doutor, getting expert care is
                    fast, secure, and effortless
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center align-items-center g-5">
            <div className="col-lg-6 col-md-12">
              <div className="work-image">
                <Image
                  src="/images/all-inside.jpg"
                  alt="How Doutor works"
                  width={1052}
                  height={1254}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="work-items">
                {workSteps.map((step) => (
                  <div key={step.id} className="item">
                    <div className="icon">
                      <Image
                        src={step.icon}
                        alt={`${step.title} icon`}
                        width={44}
                        height={44}
                      />
                    </div>
                    <div className="content">
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                    {step.vectorImage && (
                      <div className="vector">
                        <Image
                          src={step.vectorImage}
                          alt="decoration vector"
                          width={step.vectorWidth || 42}
                          height={step.vectorHeight || 88}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
