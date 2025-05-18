import { useTranslations } from "next-intl";
import styles from "./smtp-message.module.css";

export default function SmtpMessage() {
  const t = useTranslations("auth");

  return (
    <div className={styles.container}>
      <h1>{t("checkEmail")}</h1>
      <p>{t("checkEmailMessage")}</p>
    </div>
  );
}
