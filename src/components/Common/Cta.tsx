import React from "react";
import Image from "next/image";
import Link from "next/link";

const Cta = () => {
  return (
    <>
      <div className="overview-area">
        <div className="container">
          <div className="row justify-content-center align-items-center g-4">
            <div className="col-lg-6 col-md-12">
              <div className="overview-content">
                <h2>
                  Ne hagyja, hogy a fájdalom korlátozza a mozgásban, kérjen időpontot most!
                </h2>
                <p>
                “Sportsebészként tudom, hogy minden hét, minden nap, minden perc számít betegeim számára, hiszen a cél mindenkinél ugyanaz: mielőbb visszatérni a pályára, a mindennapi életbe.”
                </p>

                <div className="overview-btn">
                  <Link href="/kapcsolat" className="default-btn">
                    <span className="left">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M11.5385 0H0.461538C0.206769 0 0 0.206769 0 0.461538C0 0.716308 0.206769 0.923077 0.461538 0.923077H10.4241L0.135231 11.2122C-0.045 11.3924 -0.045 11.6845 0.135231 11.8648C0.225462 11.955 0.343385 12 0.461538 12C0.579692 12 0.697846 11.955 0.787846 11.8648L11.0769 1.57569V11.5385C11.0769 11.7932 11.2837 12 11.5385 12C11.7932 12 12 11.7932 12 11.5385V0.461538C12 0.206769 11.7932 0 11.5385 0Z"
                          fill="#336AEA"
                        />
                      </svg>
                    </span>
                    <strong>Időpontkérés</strong>
                    <span className="right">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M11.5385 0H0.461538C0.206769 0 0 0.206769 0 0.461538C0 0.716308 0.206769 0.923077 0.461538 0.923077H10.4241L0.135231 11.2122C-0.045 11.3924 -0.045 11.6845 0.135231 11.8648C0.225462 11.955 0.343385 12 0.461538 12C0.579692 12 0.697846 11.955 0.787846 11.8648L11.0769 1.57569V11.5385C11.0769 11.7932 11.2837 12 11.5385 12C11.7932 12 12 11.7932 12 11.5385V0.461538C12 0.206769 11.7932 0 11.5385 0Z"
                          fill="#336AEA"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="overview-image">
                <Image
                  src="/images/overview.png"
                  alt="overview"
                  width={1230}
                  height={1025}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cta;
