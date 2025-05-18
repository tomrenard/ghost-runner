import { forgotPasswordAction } from "@/app/actions";
import { FormMessage, type Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Link } from "@/src/i18n/navigation";
import { getTranslations } from "next-intl/server";
import SmtpMessage from "../smtp-message";
import styles from "./page.module.css";

export default async function ForgotPassword(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;
  const t = await getTranslations("auth");

  return (
    <>
      <form className={styles.form}>
        <div>
          <h1 className={styles.title}>{t("resetPassword")}</h1>
          <p className={styles.subtitle}>
            {t("hasAccount")}{" "}
            <Link className={styles.link} href="/sign-in">
              {t("signIn")}
            </Link>
          </p>
        </div>
        <div className={styles.inputGroup}>
          <Input
            label={t("email")}
            placeholder={t("emailPlaceholder")}
            required
          />
          <SubmitButton formAction={forgotPasswordAction}>
            {t("resetPassword")}
          </SubmitButton>
          <FormMessage message={searchParams} />
        </div>
      </form>
      <SmtpMessage />
    </>
  );
}
