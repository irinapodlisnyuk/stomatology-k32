import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  testEnvironment: "jest-environment-jsdom",
  
  // Автоматическая очистка моков перед каждым тестом
  clearMocks: true,
  
  // Подключение файла настройки окружения (создадим на следующем шаге)
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

  // Маппинг путей alias (@/*), чтобы Jest понимал ваши импорты
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};

export default createJestConfig(config);