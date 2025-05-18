import { signInAction } from "@/app/actions";
import { FormMessage, type Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Link } from "@/src/i18n/navigation";
import { getTranslations } from "next-intl/server";
import styles from "./page.module.css";

export default async function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;
  const t = await getTranslations("auth");

  return (
    <form className={styles.form}>
      <h1 className={styles.title}>{t("signInTitle")}</h1>
      <p className={styles.subtitle}>
        {t("noAccount")}{" "}
        <Link href="/sign-up" className={styles.link}>
          {t("signUp")}
        </Link>
      </p>
      <div className={styles.inputGroup}>
        <Input name="email" placeholder={t("emailPlaceholder")} required />
        <div>
          <Input
            type="password"
            name="password"
            placeholder={t("passwordPlaceholder")}
            required
          />
          <div className={styles.forgotPassword}>
            <Link href="/forgot-password" className={styles.forgotPasswordLink}>
              {t("forgotPassword")}
            </Link>
          </div>
        </div>
        <SubmitButton pendingText={t("signingIn")} formAction={signInAction}>
          {t("signIn")}
        </SubmitButton>
        <FormMessage message={searchParams} />
      </div>
    </form>
  );
}
