import {
  Button,
  Container,
  Group,
  Image,
  List,
  ListItem,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { Check } from "lucide-react";
import { useTranslations } from "next-intl";
import classes from "./hero.module.css";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <Container size="md" pt={48} pb={48}>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>{t("title")}</Title>
          <Text c="dimmed" mt="md">
            {t("description")}
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <Check size={12} />
              </ThemeIcon>
            }
          >
            <ListItem>
              <b>{t("features.typescript.title")}</b> –{" "}
              {t("features.typescript.description")}
            </ListItem>
            <ListItem>
              <b>{t("features.opensource.title")}</b> –{" "}
              {t("features.opensource.description")}
            </ListItem>
            <ListItem>
              <b>{t("features.focus.title")}</b> –{" "}
              {t("features.focus.description")}
            </ListItem>
          </List>

          <Group mt={30}>
            <Button radius="xl" size="md" className={classes.control}>
              {t("buttons.getStarted")}
            </Button>
            <Button
              variant="default"
              radius="xl"
              size="md"
              className={classes.control}
            >
              {t("buttons.sourceCode")}
            </Button>
          </Group>
        </div>
        <Image
          src={"https://placehold.co/600x400"}
          className={classes.image}
          alt="Hero image"
        />
      </div>
    </Container>
  );
}
