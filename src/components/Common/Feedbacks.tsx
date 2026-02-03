import React from "react";
import Image from "next/image";
import Link from "next/link";

// Feedback data structure
interface Feedback {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  image: string;
}

const Feedbacks = () => {
  // Feedback data - this could come from an API or CMS
  const feedbacks: Feedback[] = [
    {
      id: 1,
      name: "Anett",
      location: "Magyarország",
      rating: 5,
      text: '"Majzik Doktor kiváló munkát végzett rajtam. All inside technikával műtött elülső keresztszalag szakadással. Gyönyörűen begyógyt a sebem, a felépülésem gyors volt és komplikáció mentes. Még egyszer nagyon köszönöm, hogy újra úgy tudom használni a lábam, mint a síbalesetem előtt."',
      image: "/images/users/anett.png",
    },
    {
      id: 2,
      name: "Attila",
      location: "Magyarország",
      rating: 5,
      text: '"Majzik Főorvos Úr egy évekkel ezelőtti balesetemet követő elhibázott keresztszalag műtétem következményeit hozta rendbe egy újfajta technikával. Már azt hittem, hogy az állandó fájdalommal kell együtt élnem, de meggyőzött, hogy egy ismételt műtéti beavatkozással megszüntethető a fájdalom. Azóta már a seb is gyönyörűen begyógyult és a fájdalom is megszűnt. Mindig minden kérdésemre választ kaptam, ha nem a Főorvos Úrtól akkor a mindig kedves feleségétől, Katától. Köszönöm szépen a segítséget és csak ajánlani tudom mindenkinek!"',
      image: "/images/users/user1.png",
    },
    {
      id: 3,
      name: "Szilvia",
      location: "Magyarország",
      rating: 5,
      text: '"Több családtagomat is a Doktor Úr műtötte! Nekünk rossz szavunk nem lehet rá, lelkiismeretes, kedves és szakmailag is kiváló orvos! Egy térd műtétnèl nem volt szükség az egyik beavatkozásra (műtét közben derült ki), így vissza is kaptuk annak az árát! Marcsi is egy tündér volt. Mi hálásak lehetünk! Sose felejtjük el, hogy a műtét utáni rehabilitáció is nagyon fontos a teljes gyógyuláshoz! Köszönjük, hogy van nekünk!"',
      image: "/images/users/user12.png",
    },
    {
      id: 4,
      name: "Gábor",
      location: "Magyarország",
      rating: 5,
      text: '"2002-ben operált először. Fiatal sportolóként kerültem hozzá, és az első pillanattól kezdve éreztem, hogy figyel rám, foglalkozik velem és partnerként kezel. Összesen négyszer műtött, négy különböző sportsérülés miatt. Az utolsó műtét májusban volt. Közel negyed évszázad után is pont azt a figyelmet éreztem, mint az első találkozáskor. Csak ajánlani tudom. Köszi, Doki!"',
      image: "/images/users/gabor.png",
    },
  ];

  // Function to render star ratings
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <li key={i}>
            <i className="ri-star-s-fill"></i>
          </li>
        ))}
        {hasHalfStar && (
          <li>
            <i className="ri-star-half-s-fill"></i>
          </li>
        )}
        {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
          <li key={i + fullStars}>
            <i className="ri-star-line"></i>
          </li>
        ))}
      </>
    );
  };

  // Function to determine wrap class based on index
  const getWrapClass = (index: number): string => {
    const wrapClasses = ["wrap1", "wrap2", "wrap3", "wrap4"];
    return wrapClasses[index % wrapClasses.length];
  };

  return (
    <>
      <div className="feedback-area ptb-140">
        <div className="container">
          <div className="section-title">
            <div className="row justify-content-center align-items-center g-4">
              <div className="col-lg-6 col-md-12">
                <div className="left">
                  <span className="sub wrap2">Betegeink visszajelzései</span>
                  <h2>Műtét utáni vélemények</h2>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="right wrap2">
                  <Link href="/feedbacks" className="link-btn">
                    View All Feedbacks
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                    >
                      <path
                        d="M12.5 0H0.5C0.224 0 0 0.224 0 0.5C0 0.776 0.224 1 0.5 1H11.2928L0.1465 12.1465C-0.04875 12.3417 -0.04875 12.6583 0.1465 12.8535C0.24425 12.9513 0.372 13 0.5 13C0.628 13 0.756 12.9513 0.8535 12.8535L12 1.707V12.5C12 12.776 12.224 13 12.5 13C12.776 13 13 12.776 13 12.5V0.5C13 0.224 12.776 0 12.5 0Z"
                        fill="#336AEA"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center g-0 feedback-items">
            {feedbacks.map((feedback, index) => (
              <div key={feedback.id} className="col-xl-3 col-md-6">
                <div className={`feedback-card ${getWrapClass(index)}`}>
                  <div className="info">
                    <div className="image">
                      <Image
                        src={feedback.image}
                        alt={feedback.name}
                        width={46}
                        height={46}
                      />
                    </div>
                    <div className="title">
                      <h4>{feedback.name}</h4>
                      <span>— {feedback.location}</span>
                    </div>
                  </div>
                  <ul className="list">{renderStars(feedback.rating)}</ul>
                  <p>{feedback.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedbacks;
