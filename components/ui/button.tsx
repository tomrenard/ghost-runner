import { Button as MantineButton, type ButtonProps } from "@mantine/core";
import type { ButtonHTMLAttributes } from "react";

type ExtendedButtonProps = ButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  type = "button",
  ...props
}: ExtendedButtonProps) => {
  return (
    <MantineButton type={type} radius="xl" {...props}>
      {children}
    </MantineButton>
  );
};

export { Button };
