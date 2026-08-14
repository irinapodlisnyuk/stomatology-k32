export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  imgName: string;
  altText: string;
  fullText: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "therapy",
    slug: "therapy",
    title: "Терапия",
    imgName: "preventivecare",
    altText: "Терапевтическое лечение зубов в клинике К+32",
    fullText:
      "<p>Керамические виниры — это тонкие пластинки, которые позволяют исправить форму и цвет зубов...</p>",
  },
  {
    id: "orthopedics",
    slug: "orthopedics",
    title: "Ортопедия",
    imgName: "orthopedics",
    altText: "Ортопедическая стоматология в клинике К+32",
    fullText:
      "<p>Керамические виниры — это тонкие пластинки, которые позволяют исправить форму и цвет зубов...</p>",
  },
  {
    id: "whitening",
    slug: "whitening",
    title: "Отбеливание",
    imgName: "whitening",
    altText: "Отбеливание зубов в клинике К+32",
    fullText:
      "<p>Керамические виниры — это тонкие пластинки, которые позволяют исправить форму и цвет зубов...</p>",
  },
  {
    id: "implantation",
    slug: "implantation",
    title: "Имплантация",
    imgName: "implantation",
    altText: "Имплантация зубов в клинике К+32",
    fullText:
      "<p>Керамические виниры — это тонкие пластинки, которые позволяют исправить форму и цвет зубов...</p>",
  },
  {
    id: "surgery",
    slug: "surgery",
    title: "Хирургия",
    imgName: "surgery",
    altText: "Хирургическая стоматология в клинике К+32",
    fullText:
      "<p>Керамические виниры — это тонкие пластинки, которые позволяют исправить форму и цвет зубов...</p>",
  },
  {
    id: "orthodontics",
    slug: "orthodontics",
    title: "Ортодонтия",
    imgName: "orthodontics",
    altText: "Ортодонтическая стоматология в клинике К+32",
    fullText:
      "<p>Керамические виниры — это тонкие пластинки, которые позволяют исправить форму и цвет зубов...</p>",
  },
  {
    id: "planmeca",
    slug: "planmeca",
    title: "3D",
    imgName: "planmeca",
    altText: "ТРЕХМЕРНЫЙ ТОМОГРАФ PLANMECA PROMAX 3D CLASSIC в клинике К+32",
    fullText:
      "<p>Керамические виниры — это тонкие пластинки, которые позволяют исправить форму и цвет зубов...</p>",
  },
  {
    id: "endodontics",
    slug: "endodontics",
    title: "Эндодонтия",
    imgName: "endodontics",
    altText: "Эндодонтическая стоматология в клинике К+32",
    fullText:
      "<p>Керамические виниры — это тонкие пластинки, которые позволяют исправить форму и цвет зубов...</p>",
  },
  {
    id: "hygiene",
    slug: "hygiene",
    title: "Профессиональная гигиена",
    imgName: "hygiene",
    altText: "Профессиональная гигиена в клинике К+32",
    fullText:
      "<p>Керамические виниры — это тонкие пластинки, которые позволяют исправить форму и цвет зубов...</p>",
  },
];
