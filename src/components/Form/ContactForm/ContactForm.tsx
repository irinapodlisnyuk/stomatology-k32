"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import z from "zod";
import { FormField } from "../FormField";
import { Button } from "../Button";
import { queryClient } from "@/api/queryClient";
import emailjs from "@emailjs/browser";
import styles from "./ContactForm.module.scss";
import stylesInput from "./Custom__contact.module.scss";
import stylesError from "@/components/Form/FormField/FormField.module.scss";
import stylesCheckbox from "./Checkbox-from.module.scss";
import Icon from "@/models/Icon";

interface ContactFormProps {
  onSuccess?: () => void;
  onError?: () => void;
}

const phoneRegex =
  /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;

// Схема валидации Zod,
const ContactSchema = z.object({
  name: z.string().min(3, "Введите не менее 3 символов"),
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

type ContactFormValues = z.infer<typeof ContactSchema>;

interface ContactFormProps {
  onSuccess?: () => void;
}

const sendMessageApi = async (data: ContactFormValues) => {
  return emailjs.send(
    "service_m6hlvnl", //ID server
    "template_2okk6mi", //ID
    {
      name: data.name,
      phone: data.phone,
      email: data.email,
      message: data.message,
    },
    "OdfkqVGRqWEDcRtwx", // key
  );
};

export const ContactForm: FC<ContactFormProps> = ({ onSuccess, onError }) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      acceptTerms: false,
    },
  });

  // Следим за длиной текста для счетчика символов
  const messageValue = watch("message") || "";

  // Мутация для отправки данных формы
  const contactMutation = useMutation(
    {
      mutationFn: (data: ContactFormValues) => sendMessageApi(data),
      onSuccess() {
        reset();
        if (onSuccess) onSuccess();
      },
      onError(error) {
        console.error("Ошибка отправки формы:", error);
        if (onError) onError();
      },
    },
    queryClient,
  );

  return (
    <>
      <form
        id="dentist-contact-form"
        className={styles["contact-form"]}
        onSubmit={handleSubmit((data) => contactMutation.mutate(data))}
      >
        {/* Поле Имя */}
        <FormField
          className={`${styles["contact-form__full-width"]} ${
            errors.name || contactMutation.isError
              ? stylesError["error-message__contact"]
              : ""
          }`}
          errorMessage={errors.name?.message}
        >
          <input
            type="text"
            className={stylesInput["custom__contact"]}
            placeholder="Ваше Имя"
            {...register("name")}
          />
        </FormField>

        {/* Поле Email */}
        <FormField
          className={
            errors.email || contactMutation.isError
              ? `${stylesError["error-message__contact"]}`
              : ""
          }
          errorMessage={errors.email?.message}
        >
          <input
            type="email"
            className={stylesInput["custom__contact"]}
            placeholder="Адрес электронной почты"
            {...register("email")}
          />
        </FormField>

        <FormField
          className={
            errors.phone || contactMutation.isError
              ? `${stylesError["error-message__contact"]}`
              : ""
          }
          errorMessage={errors.phone?.message}
        >
          <input
            type="tel"
            className={stylesInput["custom__contact"]}
            placeholder="Номер телефона"
            {...register("phone")}
          />
        </FormField>

        <FormField
          className={`${styles["contact-form__full-width"]} ${
            errors.message || contactMutation.isError
              ? stylesError["error-message__contact"]
              : ""
          }`}
          errorMessage={errors.message?.message}
        >
          <div className={stylesInput["form-post__textarea-wrapper"]}>
            <textarea
              {...register("message")}
              placeholder="Ваше сообщение"
              rows={8}
              maxLength={500}
              className={stylesInput["custom__textarea"]}
            />
            <div className={stylesInput["form-post__textarea-counter"]}>
              {messageValue.length} / 500
            </div>
          </div>
        </FormField>

        <FormField
          className={
            errors.acceptTerms ? `${stylesError["error-message__contact"]}` : ""
          }
          errorMessage={errors.acceptTerms?.message}
        >
          <div className={stylesCheckbox["checkbox-from__wrapper"]}>
            <input
              type="checkbox"
              id="acceptTerms"
              className={stylesCheckbox["custom__checkbox"]}
              {...register("acceptTerms")}
            />
            <label
              htmlFor="acceptTerms"
              className={stylesCheckbox["custom__checkbox-label"]}
            >
              Я согласен на обработку персональных данных
              <Icon
                name="icon-check"
                className={stylesCheckbox["custom__checkbox-icon"]}
                aria-hidden="true"
              />
            </label>
          </div>
        </FormField>
      </form>

      <Button
        form="dentist-contact-form"
        type="submit"
        isLoading={contactMutation.isPending}
        className={`${styles["contact-form__btn"]} ${styles.btn}`}
      >
        Отправить сообщение
      </Button>
    </>
  );
};
