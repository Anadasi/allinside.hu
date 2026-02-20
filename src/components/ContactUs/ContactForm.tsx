import React from "react";

const ContactForm = () => {
  return (
    <>
      <div className="contact-us-area pb-140">
        <div className="container">
          <div className="row align-items-center justify-content-center g-4">
            
            {/* BAL OLDAL: A FOTÓ (Fix magassággal, hogy látszódjon) */}
            <div className="col-lg-6 col-md-12">
              <div
                className="contact-us-image"
                style={{
                  backgroundImage: "url(/images/contact.jpg)",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '500px', 
                  borderRadius: '10px',
                  display: 'block'
                }}
              >
              </div>
            </div>

            {/* JOBB OLDAL: ELÉRHETŐSÉGEK ÉS ÁTIRÁNYÍTÁS */}
            <div className="col-lg-6 col-md-12">
              <div className="contact-content-box" style={{ padding: '30px' }}>
                <h3 style={{ marginBottom: '25px', color: '#264653' }}>Rendelések</h3>
                
                <div className="info-list" style={{ textAlign: 'left', marginBottom: '30px' }}>
                    <div style={{ marginBottom: '20px' }}>
                    <h5 style={{ marginBottom: '5px' }}>Budapest</h5>
                    <p style={{ margin: 0, fontSize: '16px', lineHeight: '1.6' }}>
                      <strong>Újbuda Medical Center</strong><br />
                      1116 Budapest, Fehérvári út 126-128.<br />
                      Rendelés:<br />
                      Szerda és Csütörtök 15:00-20:00<br />
                      Péntek 11:00-17:00
                    </p>
                  </div>

                    <div style={{ marginBottom: '20px' }}>
                    <h5 style={{ marginBottom: '5px' }}>Siófok</h5>
                    <p style={{ margin: 0, fontSize: '16px', lineHeight: '1.6' }}>
                      <strong>Siómedical Egészségügyi Központ</strong><br />
                      8600 Siófok, Semmelweis u. 1.<br />
                      Rendelés:<br />
                      Hétfő
                    </p>
                  </div>
                  

                </div>

                <hr style={{ border: '0', borderTop: '1px solid #eee', margin: '25px 0' }} />

                <div className="cta-section">
                  <p><strong>Online üzenetküldéshez és időpontfoglaláshoz</strong> kérjük, használja központi űrlapunkat:</p>
                  
                  <a 
                    href="https://www.drmajzikerno.hu/kapcsolat/" 
                    className="default-btn" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-block',
                        padding: '15px 30px',
                        backgroundColor: '#264653',
                        color: '#fff',
                        borderRadius: '5px',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        marginTop: '10px'
                    }}
                  >
                    Tovább az űrlaphoz
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;