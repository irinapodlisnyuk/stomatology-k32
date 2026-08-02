import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import z from "zod";
import { FormField } from "../FormField";
import { Button } from "../Button";
import { queryClient } from "@/api/queryClient";
import { ModalOpen } from "@/components/ModalOpen/ModalOpen";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import styles from "./ContactForm.module.scss";
import stylesInput from "./Custom__contact.module.scss";
import stylesError from "@/components/Form/FormField/FormField.module.scss";
import stylesCheckbox from "./Checkbox-from.module.scss";
import Icon from "@/components/types/Icon";

// Схема валидации Zod,
const ContactSchema = z.object({
  name: z.string().min(3, "Введите не менее 3 символов"),
  email: z.string().min(1, "Введите Email").email("Некорректный формат Email"),
  message: z
    .string()
    .min(10, "Сообщение должно быть не менее 10 символов")
    .max(1000, "Максимум 1000 символов"),
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
      email: data.email,
      message: data.message,
    },
    "OdfkqVGRqWEDcRtwx", // key
  );
};

export const ContactForm: FC<ContactFormProps> = ({ onSuccess }) => {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const { t } = useTranslation();

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
        setIsSuccessModalOpen(true);
        if (onSuccess) onSuccess();
      },
    },
    queryClient,
  );

  return (
    <>
      <form
        className={styles["contact-form"]}
        onSubmit={handleSubmit((data) => contactMutation.mutate(data))}
      >
        {/* Поле Имя */}
        <FormField
          className={
            errors.name || contactMutation.isError
              ? `${stylesError["error-message__contact"]}`
              : ""
          }
          errorMessage={errors.name?.message}
        >
          <input
            type="text"
            className={stylesInput["custom__contact"]}
            placeholder={t("input__name")}
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
            placeholder={t("input__email")}
            {...register("email")}
          />
        </FormField>

        <FormField
          className={
            errors.message || contactMutation.isError
              ? `${stylesError["error-message__contact"]}`
              : ""
          }
          errorMessage={errors.message?.message}
        >
          <div className={stylesInput["form-post__textarea-wrapper"]}>
            <textarea
              {...register("message")}
              placeholder={t("input__message")}
              rows={8}
              maxLength={1000}
              className={stylesInput["custom__textarea"]}
            />
            <div className={stylesInput["form-post__textarea-counter"]}>
              {messageValue.length} / 1000
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
              {t("custom__checkbox_text") ||
                "Я согласен на обработку персональных данных"}
              <Icon
                name="icon-check"
                className={stylesCheckbox["custom__checkbox-icon"]}
                aria-hidden="true"
              />
            </label>
          </div>
        </FormField>

        {/* Кнопка отправки */}
        <Button
          type="submit"
          isLoading={contactMutation.isPending}
          className={`${styles["contact-form__btn"]} ${styles.btn}`}
        >
          {t("btn_form")}
        </Button>
      </form>

      <ModalOpen
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        text={t("modal_text")}
      />
    </>
  );
};
