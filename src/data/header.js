import phoneIcon from "@/images/icon/phone-icon.png";
import logo1 from "@/images/resources/logo-1.png";
import logo2 from "@/images/resources/logo-2.png";

const navItems = [
  {
    id: 1,
    name: "Početna",
    href: "/",
    subNavItems: [],
  },
  {
    id: 2,
    name: "O nama",
    href: "/o-nama",
    subNavItems: [],
  },

  {
    id: 6,
    name: "Kontakt",
    href: "/kontakt",
    subNavItems: [],
  },
];

const header = {
  logo1,
  logo2,
  phone: "387 65 606 426",
  email: "igortaki@gmail.com",
  phoneIcon,
  navItems,
  socials: [
    "fab fa-facebook-square",
    "fab fa-instagram",
    "fab fa-airbnb",
    "fab fa-blogger-b",
  ],
};

export default header;
