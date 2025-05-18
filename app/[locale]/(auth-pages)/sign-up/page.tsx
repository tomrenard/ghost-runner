import { signUpAction } from "@/app/actions";
import { FormMessage, type Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Link } from "@/src/i18n/navigation";
import { getTranslations } from "next-intl/server";
import SmtpMessage from "../smtp-message";
import styles from "./page.module.css";

export default async function Signup(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;
  const t = await getTranslations("auth");

  if ("message" in searchParams) {
    return (
      <div className={styles.messageContainer}>
        <FormMessage message={searchParams} />
      </div>
    );
  }

  return (
    <>
      <form className={styles.form}>
        <h1 className={styles.title}>{t("signUpTitle")}</h1>
        <p className={styles.subtitle}>
          {t("hasAccount")}{" "}
          <Link href="/sign-in" className={styles.link}>
            {t("signIn")}
          </Link>
        </p>
        <div className={styles.inputGroup}>
          <Input name="email" placeholder={t("emailPlaceholder")} required />
          <Input
            type="password"
            name="password"
            placeholder={t("passwordPlaceholder")}
            minLength={6}
            required
          />
          <SubmitButton formAction={signUpAction} pendingText={t("signingUp")}>
            {t("signUp")}
          </SubmitButton>
          <FormMessage message={searchParams} />
        </div>
      </form>
      <SmtpMessage />
    </>
  );
}
