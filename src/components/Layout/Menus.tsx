export const menus = [
  {
    id: "home",
    title: "Főoldal",
    href:  "/",
    isDropdown: false,
    dropdownItems: [
    { title: "", href: "" } 
  ],
  },
  {
    id: "bemutatkozas",
    title: "Bemutatkozás",
    href:  "/doctors/profile/",
    isDropdown: false,
  dropdownItems: [
    { title: "", href: "" } 
  ],
  },
  {
    id: "gyakori",
    title: "Gyakori kérdések",
    href:  "/gyakori-kerdesek",
    isDropdown: false,
dropdownItems: [
    { title: "", href: "" } 
  ],
  },
  {
  id: "tovabbi",
  title: "További kezelések",
  href: "https://www.drmajzikerno.hu/szolgaltatasok/", 
  isDropdown: true, 
  dropdownItems: [
    { title: "Bokaműtétek", href: "https://www.drmajzikerno.hu/szolgaltatasok/bokamutetek/" },
    { title: "Könyökműtétek", href: "https://www.drmajzikerno.hu/szolgaltatasok/konyokmutetek/" },
    { title: "Térdműtétek", href: "https://www.drmajzikerno.hu/szolgaltatasok/terdmutetek/" },
    { title: "Vállműtétek", href: "https://www.drmajzikerno.hu/szolgaltatasok/vallmutetek/" },
    { title: "PRP Kezelések", href: "https://www.drmajzikerno.hu/szolgaltatasok/prp-kezelesek/" },
  ],
},
];
