"use client";

import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { FormField } from "../FormField";
import { Button } from "../Button";
import { queryClient } from "@/app/api/queryClient";
import styles from "./ContactForm.module.scss";
import stylesInput from "./Custom__contact.module.scss";
import stylesError from "@/components/Form/FormField/FormField.module.scss";
import stylesCheckbox from "./Checkbox-from.module.scss";
import Icon from "@/components/models/Icon";
import { ContactFormValues, ContactSchema } from "@/app/schema/ContactSchema";
import { sendMessageApi } from "@/app/api/messageApi/sendMessageApi";

interface ContactFormProps {
  onSuccess?: () => void;
  onError?: () => void;
}

export const ContactForm: FC<ContactFormProps> = ({ onSuccess, onError }) => {
  const [formId] = useState(() => `form-${Math.floor(Math.random() * 10000)}`);
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

  const messageValue = watch("message") || "";

  const contactMutation = useMutation(
    {
      mutationFn: (data: ContactFormValues) => sendMessageApi(data),
      onSuccess() {
        reset();
        if (onSuccess) onSuccess();
      },
      onError(error: unknown) {
        if (error instanceof Error) {
          console.error("❌ Ошибка отправки формы:", error.message);
        } else {
          console.error("❌ Неизвестная ошибка отправки формы:", error);
        }
        if (onError) onError();
      },
    },
    queryClient,
  );

  return (
    <>
      <form
        id={formId}
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

        {/* Поле Телефон */}
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

        {/* Поле Сообщение */}
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

        {/* Чекбокс */}
        <FormField
          className={
            errors.acceptTerms ? `${stylesError["error-message__contact"]}` : ""
          }
          errorMessage={errors.acceptTerms?.message}
        >
          <div className={stylesCheckbox["checkbox-from__wrapper"]}>
            <input
              type="checkbox"
               id={`acceptTerms-${formId}`}
              className={stylesCheckbox["custom__checkbox"]}
              {...register("acceptTerms")}
            />
            <label
               htmlFor={`acceptTerms-${formId}`} 
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
        form={formId}
        type="submit"
        isLoading={contactMutation.isPending}
        className={styles["contact-form__btn"]}
      >
        Отправить сообщение
      </Button>
    </>
  );
};
