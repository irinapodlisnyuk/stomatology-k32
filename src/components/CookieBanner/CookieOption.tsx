import React from "react";
import Icon from "@/components/models/Icon";
import styles from "./CookieBanner.module.scss";
import stylesInput from "./Custom__checkbox.module.scss";

interface CookieOptionProps {
  id: "necessary" | "analytics" | "advertising";
  title: string;
  description: string;
  checked: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  isExpanded: boolean;
  onToggle: () => void;
}

export default function CookieOption({
  id,
  title,
  description,
  checked,
  onChange,
  disabled = false,
  isExpanded,
  onToggle,
}: CookieOptionProps) {
  return (
    <div className={styles.cookie__checkboxWrapper}>
      <div className={styles.cookie__top}>
        <div className={styles["cookie__top-wrapper"]}>
          <div
            className={styles["cookie__top-header"]}
            onClick={onToggle}
            style={{ cursor: "pointer", userSelect: "none" }}
          >
            <Icon
              className={styles["cookie__top-icon"]}
              name={"open-icon"}
              style={{
                transform: isExpanded ? "rotate(90deg)" : "rotate(0)",
                transition: "transform 0.3s ease",
              }}
            />
            <span className={styles["cookie__top-title"]}>{title}</span>
          </div>

          <div className={stylesInput.custom__cookieContainer}>
            <input
              type="checkbox"
              id={`${id}-checkbox`}
              checked={checked}
              readOnly={disabled}
              disabled={disabled}
              onChange={(e) => onChange && onChange(e.target.checked)}
              className={stylesInput["custom__cookie"]}
            />
            <Icon
              name="icon-check"
              className={stylesInput["custom__checkbox-icon"]}
              aria-hidden="true"
            />
          </div>
        </div>

        <div
          className={`${styles.cookie__accordion} ${
            isExpanded ? styles["cookie__accordion--open"] : ""
          }`}
        >
          <div className={styles["cookie__accordion-inner"]}>
            <p
              className={styles["cookie__options-text"]}
              style={{ margin: 0, paddingBottom: "10px" }}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
