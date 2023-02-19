import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
};

function Button({ children, className, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`bg-white p-3 rounded-3xl ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
