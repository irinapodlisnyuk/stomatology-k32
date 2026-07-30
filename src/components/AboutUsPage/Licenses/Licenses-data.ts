export interface LicenseItem {
  id: number;
  title: string;
  baseName: string;
}

export const licenseList: LicenseItem[] = [
  {
    id: 1,
    title: "Лицензия на осуществление медицинской деятельности (стр. 1)",
    baseName: "Licenses1",
  },
  {
    id: 2,
    title: "Лицензия на осуществление медицинской деятельности (стр. 2)",
    baseName: "Licenses2",
  },
  {
    id: 3,
    title: "Приложение к медицинской лицензии",
    baseName: "Licenses3",
  },
];
