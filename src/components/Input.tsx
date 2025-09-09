import { type JSX } from "react";

interface InputProps {
  label: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
}

export default function Input({
  label,
  value,
  type,
  onChange,
}: InputProps): JSX.Element {
  return (
    <label>
      {label}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}
