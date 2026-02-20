import React from "react";

import Image from "next/image";

import Link from "next/link";

import { redirect } from "next/navigation";



async function handleContact(formData: FormData) {

  "use server";

  const name = String(formData.get("name") || "").trim();

  const email = String(formData.get("email") || "").trim();

  const subject = String(formData.get("subject") || "").trim();

  const number = String(formData.get("number") || "").trim();

  const text = String(formData.get("text") || "").trim();

  const agree = formData.get("agree") === "on";



  // TODO: Wire up to email/CRM service

  console.log("[Contact]", { name, email, subject, number, textLength: text.length, agree });

  redirect("/thank-you");

}



const ContactForm = () => {

  return (

    <>

      <div className="contact-us-area pb-140">

        <div className="container">

          <div className="row justify-content-center g-4">

            <div className="col-lg-6 col-md-12">

              <div

                className="contact-us-image"

                style={{

                  backgroundImage: "url(/images/contact.jpg)",

                }}

              >

                {/*<div className="wrap-content">

                  <div className="left">

                    <div className="icon">

                      <Image

                        src="/images/live.svg"

                        alt="live"

                        width={63}

                        height={63}

                      />

                    </div>

                 <div className="title">

                      <h3>Prefer to Chat Live?</h3>

                      <p>

                        Our support team is available 24/7 to assist you in

                        real-time.

                      </p>

                    </div>

                  </div>

                  <div className="right">

                    <Link href="/login" className="link-btn">

                      Start Live Chat

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

                 */}

              </div>

            </div>



<div className="contact-cta-box text-center">

  <h3>Kérdése van vagy időpontot foglalna?</h3>

  <p>Üzenet küldéshez skérjük, látogasson el Dr. Majzik Ernő hivatalos kapcsolatfelvételi oldalára:</p>

 

  <a

    href="https://www.drmajzikerno.hu/kapcsolat/"

    className="default-btn"

    target="_blank"

    rel="noopener noreferrer"

    style={{

        display: 'inline-block',

        padding: '15px 30px',

        backgroundColor: '#007bff',

        color: '#fff',

        borderRadius: '5px',

        textDecoration: 'none',

        fontWeight: 'bold',

        marginTop: '20px'

    }}

  >

    Tovább az üzenetküldéshez

  </a>

</div>



          </div>

        </div>

      </div>

    </>

  );

};



export default ContactForm;