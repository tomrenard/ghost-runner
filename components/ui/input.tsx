import type { InputHTMLAttributes } from "react";

type ExtendedInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

const Input = (props: ExtendedInputProps) => {
  return <input {...props} />;
};

export { Input };
