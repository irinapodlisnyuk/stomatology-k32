export interface GalleryItem {
  id: string;
  slug: string;
  imgName: string;
  altText: string;
}

export const Gallery_DATA: GalleryItem[] = [
  {
    id: "Check-Ups",
    slug: "check-ups",
    imgName: "Check-Ups",
    altText: "Важность регулярных стоматологических осмотров",
  },
  {
    id: "Smile",
    slug: "smile",
    imgName: "smile",
    altText: "5 советов для поддержания белоснежной улыбки",
  },
  {
    id: "braces-vs-aligners",
    slug: "braces-vs-aligners",
    imgName: "orthodontics",
    altText: "Сравнение металлических брекетов и прозрачных элайнеров",
  },
  {
    id: "dental-implants",
    slug: "dental-implants",
    imgName: "implants",
    altText: "Процесс имплантации и восстановления зубов",
  },
  {
    id: "brush-selection",
    slug: "brush-selection",
    imgName: "hygiene",
    altText: "Различные типы мануальных и электрических зубных щеток",
  },
  {
    id: "after-extraction",
    slug: "after-extraction",
    imgName: "after-extraction",
    altText: "Рекомендации врача после хирургического удаления зуба",
  },
  {
    id: "after-implantation",
    slug: "after-implantation",
    imgName: "after-implantation",
    altText: "Уход за полостью рта после установки зубного импланта",
  },
  {
    id: "after-whitening",
    slug: "after-whitening",
    imgName: "after-whitening",
    altText: "Продукты для сохранения результата после отбеливания зубов",
  },
  {
    id: "after-prosthetics",
    slug: "after-prosthetics",
    imgName: "after-prosthetics",
    altText: "Уход за ортопедическими конструкциями и коронками",
  },
];