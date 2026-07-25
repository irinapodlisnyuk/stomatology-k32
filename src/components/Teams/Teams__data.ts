export interface TeamsItem {
  id: string;
  name: string;
  surname: string;
  title: string;
  imgName: string;
  altText: string;
}

export const TEAMS_DATA: TeamsItem[] = [
  {
    id: "therapy2",
    name: "Павел Андреевич",
    surname:  "Подлиснюк",
    title: "Врач стоматолог-терапевт",
    imgName: "Podlisnyuk",
    altText: "Врач стоматолог-терапевт Подлиснюк П.А",
  },
  {
    id: "therapy1",
    name: "Афина Александровна",
    surname:  "Лазариди",
    title: "Врач стоматолог-терапевт",
    imgName: "Lazaridi",
    altText: "Врач стоматолог-терапевт Лазарида А.А",
  },
  {
    id: "surgery",
    name: "Богдан Юрьевич",
    surname:  "Битюков",
    title: "Врач стоматолог-хирург\nВрач стоматолог-ортопед",
    imgName: "Bitukov",
    altText: "Врач стоматолог-хирург в клинике К+32",
  },

  // {
  // id: "orthodontics",
  // name: "Элина Ивановна",
  //   title: "Врач стоматолог-ортодонт",
  //   imgName: "Kornienko",
  //   altText: "Врач стоматолог-ортодонт Корниенко Э.И.",
  // },
];
