export interface PriceItem {
  name: string;
  price: string;
}

// Связываем категорию цен со slug услуги из SERVICES_DATA
export const PRICES_SERVICE: Record<string, PriceItem[]> = {
  orthodontics: [
    { name: "Консультация стоматолога-ортопеда", price: "Бесплатно" },
    { name: "Винир керамический (E.max) за 1 ед.", price: "от 25 000 ₽" },
    { name: "Временный винир", price: "3 000 ₽" },
  ],
  otbelivanie: [
    { name: "Отбеливание зубов системой Zoom 4 (обе челюсти)", price: "35 000 ₽" },
    { name: "Домашнее отбеливание (изготовление кап + гель)", price: "12 000 ₽" },
    { name: "Профессиональная гигиена Air Flow перед отбеливанием", price: "6 500 ₽" },
  ],
  // ИСПРАВЛЕНО: Ключ с дефисом теперь в кавычках
  "lechenie-kariesa": [
    { name: "Лечение поверхностного кариеса", price: "от 4 500 ₽" },
    { name: "Лечение глубокого кариеса с реставрацией", price: "от 6 800 ₽" },
    { name: "Эстетическое восстановление зуба (световой композит)", price: "от 7 500 ₽" },
  ],
};