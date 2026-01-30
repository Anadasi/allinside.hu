export const menus = [
  {
    id: "home",
    title: "Főoldal",
    href:  "/",
  },
  {
    id: "services",
    title: "Services",
    isDropdown: true,
    dropdownItems: [
      { title: "Services", href: "/services/" },
      { title: "Services 02", href: "/services/two/" },
      { title: "Service Details", href: "/services/details/" },
    ],
  },
  {
    id: "pages",
    title: "Pages",
    isDropdown: true,
    dropdownItems: [
      { title: "About Us", href: "/about-us/" },
      { title: "Book An Appointment", href: "/book-an-appointment/" },
      { title: "Feedbacks", href: "/feedbacks/" },
      { title: "FAQ's", href: "/faq/" },
      { title: "Register", href: "/register/" },
      { title: "Privacy Policy", href: "/privacy-policy/" },
      { title: "Terms & Conditions", href: "/terms-conditions/" },
      { title: "Kapcsolat", href: "/contact-us/" },
    ],
  },
  {
    id: "doctors",
    title: "Doctors",
    isDropdown: true,
    dropdownItems: [
      { title: "Doctors", href: "/doctors/" },
      { title: "Doctors 02", href: "/doctors/two/" },
      { title: "Rólam", href: "/doctors/profile/" },
    ],
  },
  {
    id: "pricing",
    title: "Pricing",
    isDropdown: true,
    dropdownItems: [
      { title: "Pricing Plan", href: "/pricing-plan/" },
      { title: "Pricing Plan 02", href: "/pricing-plan/two/" },
    ],
  },
  {
    id: "blog",
    title: "Blog",
    isDropdown: true,
    dropdownItems: [
      { title: "Blog", href: "/blogs/" },
      { title: "Blog 02", href: "/blogs/two/" },
      { title: "Blog 03", href: "/blogs/three/" },
      { title: "Blog Classic", href: "/blogs/classic/" },
      { title: "Blog Details", href: "/blogs/details/" },
      { title: "Blog Details 02", href: "/blogs/details/two/" },
    ],
  },
  {
    id: "tovabbi",
    title: "További kezelések",
    href: "https://www.drmajzikerno.hu/",
  },
  {
    id: "contact",
    title: "Kapcsolat",
    href: "/contact-us/",
  },
];
