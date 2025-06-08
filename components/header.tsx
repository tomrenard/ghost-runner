"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import classes from "./header.module.css";
import { Box, Button, Flex } from "@radix-ui/themes";

export function Header() {
  const t = useTranslations("common");
  const locale = useLocale();

  return (
    <Box>
      <header className={classes.header}>
        <div className={classes.inner}>
          <Flex justify="between" align="center" width="100%">
            <Flex gap="4" align="center">
              <Link href={`/${locale}`} className={classes.link}>
                {t("home")}
              </Link>
            </Flex>

            <Flex gap="2" align="center">
              <Button variant="ghost" asChild>
                <Link href={`/${locale}/sign-in`}>{t("signIn")}</Link>
              </Button>
              <Button asChild>
                <Link href={`/${locale}/sign-up`}>{t("signUp")}</Link>
              </Button>
            </Flex>
          </Flex>
        </div>
      </header>
    </Box>
  );
}
