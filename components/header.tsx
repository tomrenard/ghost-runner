"use client";

import {
  Box,
  Burger,
  Center,
  Collapse,
  Divider,
  Drawer,
  Group,
  HoverCard,
  ScrollArea,
  SimpleGrid,
  Text,
  ThemeIcon,
  UnstyledButton,
  rem,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  Bell,
  Book,
  ChevronDown,
  Code,
  Coins,
  Fingerprint,
  PieChart,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./header.module.css";

const mockdata = [
  {
    icon: Code,
    title: "Open source",
    description: "This Pokémon's cry is very loud and distracting",
  },
  {
    icon: Coins,
    title: "Free for everyone",
    description: "The fluid of Smeargle's tail secretions changes",
  },
  {
    icon: Book,
    title: "Documentation",
    description: "Yanma is capable of seeing 360 degrees without",
  },
  {
    icon: Fingerprint,
    title: "Security",
    description: "The shell's rounded shape and the grooves on its.",
  },
  {
    icon: PieChart,
    title: "Analytics",
    description: "This Pokémon uses its flying ability to quickly chase",
  },
  {
    icon: Bell,
    title: "Notifications",
    description: "Combusken battles with the intensely hot flames it spews",
  },
];

export function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();
  const t = useTranslations("common");
  const locale = useLocale();

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon size={22} color={theme.colors.blue[6]} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box>
      <header className={classes.header}>
        <div className={classes.inner}>
          <Group justify="space-between" h="100%">
            <Group h="100%" gap={0} visibleFrom="sm">
              <Link href={`/${locale}`} className={classes.link}>
                {t("home")}
              </Link>
              <HoverCard
                width={600}
                position="bottom"
                radius="md"
                shadow="md"
                withinPortal
              >
                <HoverCard.Target>
                  <Link href={`/${locale}/features`} className={classes.link}>
                    <Center inline>
                      <Box component="span" mr={5}>
                        {t("features")}
                      </Box>
                      <ChevronDown
                        style={{ width: rem(16), height: rem(16) }}
                        color="var(--mantine-color-blue-6)"
                      />
                    </Center>
                  </Link>
                </HoverCard.Target>

                <HoverCard.Dropdown style={{ overflow: "hidden" }}>
                  <Group justify="space-between" px="md">
                    <Text fw={500}>{t("features")}</Text>
                  </Group>

                  <Divider my="sm" />

                  <SimpleGrid cols={2} spacing={0}>
                    {links}
                  </SimpleGrid>
                </HoverCard.Dropdown>
              </HoverCard>
              <Link href={`/${locale}/learn`} className={classes.link}>
                {t("learn")}
              </Link>
              <Link href={`/${locale}/academy`} className={classes.link}>
                {t("academy")}
              </Link>
            </Group>

            <Group visibleFrom="sm">
              <Link href={`/${locale}/sign-in`} className={classes.link}>
                {t("signIn")}
              </Link>
              <Link href={`/${locale}/sign-up`} className={classes.link}>
                {t("signUp")}
              </Link>
            </Group>

            <Burger
              opened={drawerOpened}
              onClick={toggleDrawer}
              hiddenFrom="sm"
            />
          </Group>
        </div>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <Link href={`/${locale}`} className={classes.link}>
            {t("home")}
          </Link>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                {t("features")}
              </Box>
              <ChevronDown
                style={{ width: rem(16), height: rem(16) }}
                color="var(--mantine-color-blue-6)"
              />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <Link href={`/${locale}/learn`} className={classes.link}>
            {t("learn")}
          </Link>
          <Link href={`/${locale}/academy`} className={classes.link}>
            {t("academy")}
          </Link>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Link href={`/${locale}/sign-in`} className={classes.link}>
              {t("signIn")}
            </Link>
            <Link href={`/${locale}/sign-up`} className={classes.link}>
              {t("signUp")}
            </Link>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
