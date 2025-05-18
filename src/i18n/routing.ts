import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "es", "fr", "it", "de"],

  // Used when no locale matches
  defaultLocale: "en",

  // Optional: Configure locale prefix behavior
  localePrefix: "as-needed",
});
