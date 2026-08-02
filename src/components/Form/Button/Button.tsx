import { FC, ButtonHTMLAttributes } from "react";
import { LoaderForm } from "../LoaderForm";
import './Form__btn.scss';

// 💡 ИСПРАВЛЕНО: Заменили HTMLAttributes на ButtonHTMLAttributes
interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  isDisabled?: boolean;
  kind?: "primary" | "secondary";
}

export const Button: FC<IButtonProps> = ({
  isLoading,
  isDisabled, 
  children,
  className,
  kind = "primary",
  type = "button", 
  ...props
}) => {

  const isButtonDisabled = isLoading || isDisabled;

  return (
    <button
      disabled={isButtonDisabled}
      type={type}
      className={`form__btn ${className || ""}`}
      data-kind={kind}
      {...props} 
    >
      {isLoading ? <LoaderForm /> : children}
    </button>
  );
};