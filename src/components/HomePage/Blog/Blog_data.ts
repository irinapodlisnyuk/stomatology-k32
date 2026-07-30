export interface BlogItem {
  id: string;
  slug: string;
  name: string;
  title: string;
  imgName: string;
  altText: string;
}

export const BLOG_DATA: BlogItem[] = [
  {
    id: "Check-Ups",
    slug: "check-ups",
    name: "БЛОГ",
    title: "Важность Регулярных Стоматологических Осмотров",
    imgName: "Check-Ups",
    altText: "Важность регулярных стоматологических осмотров",
  },
  {
    id: "Smile",
    slug: "smile",
    name: "БЛОГ",
    title: "5 Советов Для Поддержания Белоснежной Улыбки",
    imgName: "smile",
    altText: "5 советов для поддержания белоснежной улыбки",
  },
  {
    id: "braces-vs-aligners",
    slug: "braces-vs-aligners",
    name: "БЛОГ",
    title: "Брекеты или Элайнеры: Что Выбрать Для Идеального Прикуса?",
    imgName: "orthodontics",
    altText: "Сравнение металлических брекетов и прозрачных элайнеров",
  },
  {
    id: "dental-implants",
    slug: "dental-implants",
    name: "БЛОГ",
    title: "Имплантация Зубов: Разрушаем 5 Главных Мифов",
    imgName: "implants",
    altText: "Процесс имплантации и восстановления зубов",
  },
  {
    id: "brush-selection",
    slug: "brush-selection",
    name: "БЛОГ",
    title: "Электрическая или Обычная: Как Правильно Выбрать Зубную Щетку",
    imgName: "hygiene",
    altText: "Различные типы мануальных и электрических зубных щеток",
  },
  {
    id: "after-extraction",
    slug: "after-extraction",
    name: "БЛОГ",
    title: "Что Можно и Нельзя Делать После Удаления Зуба: Памятка Пациенту",
    imgName: "after-extraction",
    altText: "Рекомендации врача после хирургического удаления зуба",
  },
  {
    id: "after-implantation",
    slug: "after-implantation",
    name: "БЛОГ",
    title: "Реабилитация После Имплантации: Как Ускорить Заживление",
    imgName: "after-implantation",
    altText: "Уход за полостью рта после установки зубного импланта",
  },
  {
    id: "after-whitening",
    slug: "after-whitening",
    name: "БЛОГ",
    title: "Белая Диета После Отбеливания Зубов: Что Включить в Рацион",
    imgName: "after-whitening",
    altText: "Продукты для сохранения результата после отбеливания зубов",
  },
  {
    id: "after-prosthetics",
    slug: "after-prosthetics",
    name: "БЛОГ",
    title: "Как Привыкнуть к Новым Зубным Протезам и Коронкам: Советы Эксперта",
    imgName: "after-prosthetics",
    altText: "Уход за ортопедическими конструкциями и коронками",
  },
];