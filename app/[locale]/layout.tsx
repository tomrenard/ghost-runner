import "../globals.css";
import "@mantine/core/styles.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { routing } from "@/src/i18n/routing";
import { ColorSchemeScript, MantineProvider, createTheme } from "@mantine/core";
import { NextIntlClientProvider } from "next-intl";
import { hasLocale } from "next-intl";
import type { Messages } from "next-intl";
import { notFound } from "next/navigation";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

const theme = createTheme({
  colors: {
    black: [
      "#000000",
      "#000000",
      "#000000",
      "#000000",
      "#000000",
      "#000000",
      "#000000",
      "#000000",
      "#000000",
      "#000000",
    ],
  },
  fontFamily: "Open Sans, sans-serif",
  primaryColor: "black",
});

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
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body>
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          <MantineProvider theme={theme}>
            <Header />
            <main>{children}</main>
            <Footer />
          </MantineProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
