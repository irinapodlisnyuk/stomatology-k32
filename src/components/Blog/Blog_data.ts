export interface BlogItem {
  id: string;
  name: string;
  title: string;
  imgName: string;
  altText: string;
}

export const BLOG_DATA: BlogItem[] = [
  {
    id: "Check-Ups",
    name: "Блог",
    title: "Важность регулярных стоматологических осмотров",
    imgName: "Check-Ups",
    altText: "Важность регулярных стоматологических осмотров",
  },
  {
    id: "Smile",
    name: "Блог",
    title: "5 советов для поддержания белоснежной улыбки",
    imgName: "smile",
    altText: "5 советов для поддержания белоснежной улыбки",
  },
  {
    id: "braces-vs-aligners",
    name: "Блог",
    title: "Брекеты или элайнеры: что выбрать для идеального прикуса?",
    imgName: "orthodontics",
    altText: "Сравнение металлических брекетов и прозрачных элайнеров",
  },
   {
    id: "dental-implants",
    name: "Блог",
    title: "Имплантация зубов: разрушаем 5 главных мифов",
    imgName: "implants",
    altText: "Процесс имплантации и восстановления зубов",
  },
    {
    id: "brush-selection",
    name: "Блог",
    title: "Электрическая или обычная: как правильно выбрать зубную щетку",
    imgName: "hygiene",
    altText: "Различные типы мануальных и электрических зубных щеток",
  },

  {
    id: "after-extraction",
    name: "Блог",
    title: "Что можно и нельзя делать после удаления зуба: памятка пациенту",
    imgName: "after-extraction",
    altText: "Рекомендации врача после хирургического удаления зуба",
  },
    {
    id: "after-implantation",
    name: "Блог",
    title: "Реабилитация после имплантации: как ускорить заживление",
    imgName: "after-implantation",
    altText: "Уход за полостью рта после установки зубного импланта",
  },
    {
    id: "after-whitening",
    name: "Блог",
    title: "Белая диета после отбеливания зубов: что включить в рацион",
    imgName: "after-whitening",
    altText: "Продукты для сохранения результата после отбеливания зубов",
  },
    {
    id: "after-prosthetics",
    name: "Блог",
    title: "Как привыкнуть к новым зубным протезам и коронкам: советы эксперта",
    imgName: "after-prosthetics",
    altText: "Уход за ортопедическими конструкциями и коронками",
  },
];
