export interface AdvantageItem {
  id: number;
  icon: string;
  number?: string;
  text: string;
  hasBorder?: boolean;
}

export const advantagesList: AdvantageItem[] = [
  {
    id: 1,
    text: "Многолетний искренний опыт служения пациентам.",
    icon: "years",
    number: "6+",
    hasBorder: false,
  },
  {
    id: 2,
    text: "Счастливых пациентов получили здоровые и красивые улыбки",
    icon: "patients",
    number:" 2000+",
    hasBorder: true,
  },
  {
    id: 3,
    text: "Приживаемости имплантов благодаря цифровым протоколам",
    icon: "implants",
    number: "98.9%",
    hasBorder: true,
  },
  {
    id: 4,
    text: "Непрерывный многоступенчатый контроль стерильности инструментов и оборудования",
    icon: "time",
    hasBorder: false,
  },
];
