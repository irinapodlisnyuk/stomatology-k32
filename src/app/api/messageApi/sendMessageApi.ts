import { ContactFormValues } from "@/app/schema/ContactSchema";

export const sendMessageApi = async (data: ContactFormValues) => {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: data.name,
      phone: data.phone,
      email: data.email,
      message: data.message,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.error || "Ошибка отправки через серверный роутер",
    );
  }

  return response.json();
};