import { FC, ReactNode } from "react";
import styles from "./FormField.module.scss";

interface IFormFieldProps {
  children: ReactNode;
  errorMessage?: string;
  className?: string;
}

export const FormField: FC<IFormFieldProps> = ({
  children,
  errorMessage,
  className = "",
}) => {
  return (
    <label className={`${styles["form-field"]} ${className}`}>
      <div className={styles["form-field__control"]}>{children}</div>
      {errorMessage && (
        <span className={styles["form-field__error-text"]}>{errorMessage}</span>
      )}
    </label>
  );
};
