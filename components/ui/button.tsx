import { Button as RadixButton } from "@radix-ui/themes";
import type { ComponentProps, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
} & ComponentProps<typeof RadixButton>;

const Button = ({ children, ...props }: ButtonProps) => {
  return <RadixButton {...props}>{children}</RadixButton>;
};

export { Button };
