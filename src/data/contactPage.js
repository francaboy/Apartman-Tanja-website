const contactPage = {
  title: "Imate pitanje?",
  tagline: "Apartman Tanja",
  inputs: [
    {
      type: "text",
      placeholder: "Vaše Ime",
      name: "name",
      required: true,
    },
    {
      type: "email",
      placeholder: "E-mail adresa",
      name: "email",
      required: true,
    },
    {
      type: "text",
      placeholder: "Telefon",
      name: "phone",
      required: false,
    },
    {
      type: "email",
      placeholder: "Tema",
      name: "subject",
      required: true,
    },
    {
      type: "",
      placeholder: "Napiši Poruku",
      name: "message",
      required: true,
    },
  ],
};

export default contactPage;
