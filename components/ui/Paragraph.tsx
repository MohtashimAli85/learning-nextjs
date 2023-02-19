import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
function Paragraph({ children }: Props) {
  return <p className="text-sm md:text-base text-white/95">{children}</p>;
}

export default Paragraph;
