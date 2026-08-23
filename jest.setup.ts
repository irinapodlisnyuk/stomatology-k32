import "@testing-library/jest-dom";

// Жесткий предохранитель для React 19 / Next.js 16:
// Имитируем наличие IntersectionObserver в среде Jest, так как по умолчанию в Node.js его нет.
// Это полностью защитит тесты от вылетов!
class MockIntersectionObserver {
  observe = jest.fn();
  disconnect = jest.fn();
  unobserve = jest.fn();
}

Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  configurable: true,
  value: MockIntersectionObserver,
});