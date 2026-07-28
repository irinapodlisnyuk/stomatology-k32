export interface MenuItem {
  key: number;
  path: string;
  label: string;
}

export const navigationItems: MenuItem[] = [
  { key: 0, path: "/", label: "Главная" },
  { key: 1, path: "/aboutUs", label: "О Клинике" },
  { key: 2, path: "/services", label: "Услуги" },
  { key: 4, path: "/team", label: "Наша команда" },
  { key: 5, path: "/contact", label: "Контакты" },
   { key: 6, path: "/blog", label: "Блог" },
];