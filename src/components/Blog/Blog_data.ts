export interface BlogItem {
  id: string;
  name: string;
  title: string;
  imgName: string;
  altText: string;
}

export const BLOG_DATA: BlogItem[] = [
  {
    id: "therapy2",
    name: "Блог",
    title: "Врач стоматолог-терапевт",
    imgName: "Podlisnyuk",
    altText: "Врач стоматолог-терапевт Подлиснюк П.А",
  },
  {
    id: "therapy1",
    name: "Блог",
    title: "Врач стоматолог-терапевт",
    imgName: "Lazaridi",
    altText: "Врач стоматолог-терапевт Лазарида А.А",
  },
  {
    id: "surgery",
    name: "Блог",
    title: "Врач стоматолог-хирург\nВрач стоматолог-ортопед",
    imgName: "Bitukov",
    altText: "Врач стоматолог-хирург в клинике К+32",
  },
];
