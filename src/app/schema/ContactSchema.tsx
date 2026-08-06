import z from "zod";

const phoneRegex =
  /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;

 export const ContactSchema = z.object({
  name: z.string().min(2, "Введите не менее 2 символов"),
  email: z.string().min(1, "Введите Email").email("Некорректный формат Email"),
  phone: z
    .string()
    .min(11, "Введите номер телефона")
    .regex(phoneRegex, "Некорректный формат номера"),
  message: z
    .string()
    .min(10, "Сообщение должно быть не менее 10 символов")
    .max(500, "Максимум 500 символов"),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "Необходимо согласиться с условиями",
  }),
});

export type ContactFormValues = z.infer<typeof ContactSchema>;