import "../globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { routing } from "@/src/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { hasLocale } from "next-intl";
import type { Messages } from "next-intl";
import { notFound } from "next/navigation";
import { Theme } from "@radix-ui/themes";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Ensure that the incoming `locale` is valid
  if (!hasLocale(routing.locales, params.locale)) {
    notFound();
  }

  let messages: Messages;
  try {
    messages = (await import(`../../messages/${params.locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={params.locale} suppressHydrationWarning>
      <head />
      <body>
        <Theme
          accentColor="blue"
          grayColor="gray"
          panelBackground="solid"
          scaling="100%"
          radius="medium"
        >
          <NextIntlClientProvider locale={params.locale} messages={messages}>
            <Header />
            <main>{children}</main>
            <Footer />
          </NextIntlClientProvider>
        </Theme>
      </body>
    </html>
  );
}
