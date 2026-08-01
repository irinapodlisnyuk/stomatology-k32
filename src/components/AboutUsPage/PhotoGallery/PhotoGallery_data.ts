export interface GalleryItem {
  id: string;
  slug: string;
  imgName: string;
  altText: string;
}

export const Gallery_DATA: GalleryItem[] = [
  {
    id: "Street",
    slug: "street",
    imgName: "street",
    altText: "Фотография стоматологии с улицы Мира",
  },
  {
    id: "Holl",
    slug: "holl",
    imgName: "holl",
    altText: "Фотография хола стоматологии",
  },
  {
    id: "Reception",
    slug: "reception",
    imgName: "reception",
    altText: "Фотография ресепшна в стоматологии",
  },
  {
    id: "cabinet1",
    slug: "cabinet1",
    imgName: "cabinet1",
    altText: "Процесс приёма в стоматологическом кабинете №1",
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