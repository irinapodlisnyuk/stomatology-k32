export interface AdvantageItem {
  id: number;
  value: string;
  icon: string;
  text: string;
}

export const advantagesList: AdvantageItem[] = [
  { 
    id: 1, 
    value: "6 лет", 
    text: "Многолетний искренний опыт служения пациентам." ,
    icon: "phone"
  },
  // { 
  //   id: 2, 
  //   value: "2000+", 
  //   text: "Счастливых пациентов получили здоровые и красивые улыбки" 
  // },
  // { 
  //   id: 3, 
  //   value: "98.9%", 
  //   text: "Приживаемости имплантов благодаря цифровым протоколам" 
  // },
  // { 
  //   id: 4, 
  //   value: "24/7", 
  //   text: "Непрерывный многоступенчатый контроль стерильности оборудования" 
  // },
];