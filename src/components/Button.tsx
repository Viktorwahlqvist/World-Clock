import type { JSX } from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}

export default function Button({
  text,
  onClick,
  className,
}: ButtonProps): JSX.Element {
  return (
    <button onClick={onClick} className={className}>
      {text}
    </button>
  );
}
