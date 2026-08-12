export interface MenuItem {
  key: number;
  path: string;
  label: string;
}

export const navigationItems: MenuItem[] = [
  { key: 0, path: "/", label: "Главная" },
  { key: 1, path: "/about-us", label: "О нас" },
  { key: 2, path: "/service", label: "Услуги" },
  { key: 4, path: "/blog", label: "Блог" },
  { key: 5, path: "/contact", label: "Связаться с нами" },
   
];