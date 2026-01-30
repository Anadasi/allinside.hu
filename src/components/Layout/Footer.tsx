import React from "react";
import Image from "next/image";
import Link from "next/link";

// Define interfaces for our data structure
interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

interface FooterLink {
  text: string;
  url: string;
  isExternal?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface AppButton {
  name: string;
  url: string;
  image: string;
  alt: string;
}

interface FooterData {
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  description: string;
  socialLinks: SocialLink[];
  sections: FooterSection[];
  appButtons: AppButton[];
  copyright: {
    text: string;
    owner: string;
    ownerUrl: string;
  };
  complianceBadges: string[];
}

// Dynamic data object
const footerData: FooterData = {
  logo: {
    src: "/images/majzik-logo.png",
    alt: "logo",
    width: 134,
    height: 35,
  },
  description:
    "Sérülés után gyors és hatékony segítségre van szüksége? Forduljon hozzám bizalommal! Foglaljon időpontot mielőbb és éljen újra fájdalommentesen!",
  socialLinks: [
    {
      platform: "facebook",
      url: "https://www.facebook.com/drmajzikerno",
      icon: "/images/icons/facebook.svg",
    },
    {
      platform: "linkedin",
      url: "https://www.linkedin.com/in/dr-majzik-erno/",
      icon: "/images/icons/linkedin.svg",
    },
    {
      platform: "instagram",
      url: "https://www.instagram.com/dr.majzik.erno/",
      icon: "/images/icons/instagram.svg",
    },
  ],
  sections: [
    {
      title: "Elérhetőségek",
      links: [
        { text: "Bemutatkozás", url: "/about-us" },
        { text: "Gyakori kérdések", url: "/doctors" },
        { text: "Kapcsolat", url: "/services" },
      ],
    },
    {
      title: "Műtétek típusai",
      links: [
        { text: "Bokaműtétek", url: "https://www.drmajzikerno.hu/szolgaltatasok/bokamutetek/" },
        { text: "Könyökműtétek", url: "https://www.drmajzikerno.hu/szolgaltatasok/konyokmutetek/" },
        { text: "Térdműtétek", url: "https://www.drmajzikerno.hu/szolgaltatasok/terdmutetek/" },
        { text: "Vállműtétek", url: "https://www.drmajzikerno.hu/szolgaltatasok/vallmutetek/" },
        { text: "PRP kezelések", url: "https://www.drmajzikerno.hu/szolgaltatasok/prp-kezelesek/" },
      ],
    },
    {
      title: "Elérhetőségek",
      links: [
        {
          text: "Email: rendeles@drmajzikerno.hu",
          url: "mailto:rendeles@drmajzikerno.hu",
          isExternal: true,
        },
        {
          text: "Telefon: +36 30 940 5846",
          url: "tel:+36309405846",
          isExternal: true,
        },
      ],
    },
  ],
  };

function Footer() {
  return (
    <>
      <footer className="footer-area">
        <div className="ptb-140">
          <div className="container">
            <div className="footer-top-content">
              <div className="row justify-content-center align-items-center g-4">
                <div className="col-lg-9 col-md-12">
                  <div className="left">
                    <div className="widget-logo">
                      <Link href="/">
                        <Image
                          src={footerData.logo.src}
                          alt={footerData.logo.alt}
                          width={footerData.logo.width}
                          height={footerData.logo.height}
                        />
                      </Link>
                    </div>
                    <p>{footerData.description}</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-12">
                  <ul className="right-social">
                    {footerData.socialLinks.map((link, index) => (
                      <li key={index}>
                        <a href={link.url} target="_blank">
                          <Image
                            src={link.icon}
                            alt={link.platform}
                            width={25}
                            height={25}
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="row justify-content-center g-4">
              <div className="col-lg-9 col-md-12">
                <div className="row justify-content-center g-4">
                  {footerData.sections.map((section, index) => (
                    <div className="col-lg-3 col-sm-6" key={index}>
                      <div className="single-footer-widget">
                        <h3>{section.title}</h3>
                        <ul className="links">
                          {section.links.map((link, linkIndex) => (
                            <li key={linkIndex}>
                              {link.isExternal ? (
                                <a href={link.url}>{link.text}</a>
                              ) : (
                                <Link href={link.url}>{link.text}</Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-lg-3 col-md-12">
                <div className="single-footer-widget end-style">
                  <h3>Download Our App</h3>
                  <ul className="apps-btn">
                    {footerData.appButtons.map((button, index) => (
                      <li key={index}>
                        <Link href={button.url} target="_blank">
                          <Image
                            src={button.image}
                            alt={button.alt}
                            width={196}
                            height={56}
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright-area">
            <div className="row justify-content-center align-items-center g-4">
              <div className="col-lg-6 col-md-12">
                <p>
                  © 2026 Dr. Majzik Ernő - Minden jog fenntartva
                </p>
              </div>
              <div className="col-lg-6 col-md-12">
                <ul className="lists">
                  {footerData.complianceBadges.map((badge, index) => (
                    <li key={index}>{badge}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
appButtons: [],
  complianceBadges: [],
  copyright: "© 2026 Dr. Majzik Ernő - Minden jog fenntartva",

export default Footer;
