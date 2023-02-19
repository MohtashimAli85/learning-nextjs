import { ReactNode } from "react";

type Props = {
  children:ReactNode;
};
function Heading({children}: Props) {
  return (
    <h1 className="text-base md:text-lg lg:text-xl uppercase font-medium">
      {children}
    </h1>
  );
}

export default Heading;
