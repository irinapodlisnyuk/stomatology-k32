import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ContactForm } from "./ContactForm";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// 1. Создаем чистый клиент QueryClient для изоляции тестов мутаций
const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: { retry: false },
      mutations: { retry: false },
    },
  });

// 2. Мокаем глобальный fetch браузера
global.fetch = jest.fn();

describe("Тестирование компонента ContactForm через Jest", () => {

    
  it("Должен выводить ошибки валидации Zod при отправке пустых полей", async () => {
    const queryClient = createTestQueryClient();
    
    render(
      <QueryClientProvider client={queryClient}>
        <ContactForm />
      </QueryClientProvider>
    );

    // Находим кнопку и имитируем клик отправки пустой формы
    const submitButton = screen.getByRole("button", { name: /отправить сообщение/i });
    fireEvent.click(submitButton);

    // Ожидаем появление ошибок из вашей ContactSchema в DOM-дереве
    await waitFor(() => {
      expect(screen.getByText("Введите не менее 2 символов")).toBeInTheDocument();
      expect(screen.getByText("Введите Email")).toBeInTheDocument();
      expect(screen.getByText("Введите номер телефона")).toBeInTheDocument();
      expect(screen.getByText("Сообщение должно быть не менее 10 символов")).toBeInTheDocument();
    });
  });

  it("Должен успешно вызывать fetch API при полной валидности данных", async () => {
    const queryClient = createTestQueryClient();
    const handleSuccess = jest.fn();

    // Имитируем успешный ответ сервера /api/contact
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true }),
    });

    render(
      <QueryClientProvider client={queryClient}>
        <ContactForm onSuccess={handleSuccess} />
      </QueryClientProvider>
    );

    // Заполняем поля формы текстовыми данными пациента
    fireEvent.change(screen.getByPlaceholderText("Ваше Имя"), { target: { value: "Константин" } });
    fireEvent.change(screen.getByPlaceholderText("Адрес электронной почты"), { target: { value: "test@k32clinic.ru" } });
    fireEvent.change(screen.getByPlaceholderText("Номер телефона"), { target: { value: "+79991112233" } });
    fireEvent.change(screen.getByPlaceholderText("Ваше сообщение"), { target: { value: "Хочу записаться на имплантацию зубов." } });

    const checkbox = document.getElementById("k32-accept-terms-checkbox");
    if (checkbox) {
      fireEvent.click(checkbox);
    }

    // Нажимаем отправить
    const submitButton = screen.getByRole("button", { name: /отправить сообщение/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      // Проверяем, что сетевой fetch улетел на роут /api/contact, а форма сбросилась
      expect(global.fetch).toHaveBeenCalledWith("/api/contact", expect.any(Object));
      expect(handleSuccess).toHaveBeenCalled();
    });
  });

   it("Должен безопасно обрабатывать попытки внедрения вредоносного кода (XSS Injection)", async () => {
    const queryClient = createTestQueryClient();
    const handleSuccess = jest.fn();

    // Имитируем успешный ответ сервера /api/contact
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true }),
    });

    render(
      <QueryClientProvider client={queryClient}>
        <ContactForm onSuccess={handleSuccess} />
      </QueryClientProvider>
    );

    // ⚡ ВРЕДОНОСНЫЙ СКРИПТ: Имитируем атаку хакера через поля Имя и Сообщение
    const maliciousScriptName = "<script>destroySite()</script>";
    const maliciousScriptMessage = "Привет! <img src='x' onerror='alert(\"XSS Attack\")'> Запишите на прием.";

    // Заполняем поля формы вредоносным кодом
    fireEvent.change(screen.getByPlaceholderText("Ваше Имя"), { target: { value: maliciousScriptName } });
    fireEvent.change(screen.getByPlaceholderText("Адрес электронной почты"), { target: { value: "hacker@evil.com" } });
    fireEvent.change(screen.getByPlaceholderText("Номер телефона"), { target: { value: "+79991112233" } });
    fireEvent.change(screen.getByPlaceholderText("Ваше сообщение"), { target: { value: "Достаточно длинный текст сообщения, чтобы пройти валидацию Zod: " + maliciousScriptMessage } });

    // Кликаем по чекбоксу согласия
    const checkbox = document.getElementById("k32-accept-terms-checkbox");
    if (checkbox) fireEvent.click(checkbox);

    // Нажимаем отправить
    const submitButton = screen.getByRole("button", { name: /отправить сообщение/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      // 1. Проверяем, что форма НЕ упала, а fetch успешно вызвался
      expect(global.fetch).toHaveBeenCalledWith("/api/contact", expect.any(Object));
      
      // 2. Достаем точные данные, которые форма отправила в сеть в формате JSON
      const lastFetchCall = (global.fetch as jest.Mock).mock.calls[0];
      const sentRequestBody = JSON.parse(lastFetchCall[1].body);

      // 3. Главная проверка безопасности: проверяем, что отправленные данные 
      //    содержат переданный текст просто как безопасную строку, а не исполняемый скрипт
      expect(sentRequestBody.name).toBe(maliciousScriptName);
      expect(sentRequestBody.message).toContain("XSS Attack");
      
      expect(handleSuccess).toHaveBeenCalled();
    });
  });
});