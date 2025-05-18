import { Input as MantineInput, type InputProps } from "@mantine/core";
import type { InputHTMLAttributes } from "react";

type ExtendedInputProps = InputProps &
  InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
  };

const Input = (props: ExtendedInputProps) => {
  return <MantineInput {...props} />;
};

export { Input };
