import bg from "@/images/shapes/site-footer-top-shape.png";

const footerData = {
  bg,
  title: "Kontaktirajte Nas Putem Viber ili Whatsapp Aplikacije.",
  phone: "387 65 606 426",
  email: "igortaki@gmail.com",
  address: "Banja Luka, 78000",
  city: "Bosna i Hercegovina",
  year: new Date().getFullYear(),
  author: "Srđan.",
  socials: [
    {
      id: 1,
      icon: "fab fa-facebook",
      href: "#",
    },
    {
      id: 2,
      icon: "fab fa-instagram",
      href: "#",
    },
    {
      id: 3,
      icon: "fab fa-airbnb",
      href: "#",
    },
    {
      id: 4,
      icon: "fab fa-blogger-b",
      href: "#",
    },
  ],
  links: [
    {
      id: 1,
      title: "Početna",
      href: "/",
    },
    {
      id: 2,
      title: "O nama",
      href: "/o-nama",
    },
    {
      id: 3,
      title: "Kontakt",
      href: "/kontakt",
    },
  ],
};

export default footerData;
