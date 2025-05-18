import { resetPasswordAction } from "@/app/actions";
import { FormMessage, type Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import styles from "./page.module.css";

export default async function ResetPassword(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;
  const t = await useTranslations("auth");

  return (
    <form className={styles.form}>
      <h1 className={styles.title}>{t("resetPassword")}</h1>
      <p className={styles.subtitle}>{t("enterNewPassword")}</p>
      <div className={styles.inputGroup}>
        <Input
          type="password"
          name="password"
          placeholder={t("newPassword")}
          required
        />
        <Input
          type="password"
          name="confirmPassword"
          placeholder={t("confirmPassword")}
          required
        />
        <SubmitButton formAction={resetPasswordAction}>
          {t("resetPassword")}
        </SubmitButton>
        <FormMessage message={searchParams} />
      </div>
    </form>
  );
}
