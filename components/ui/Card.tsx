import { ReactNode } from "react";
import Button from "./Button";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

type Props = {
  title: string;
  description: string;
  className?: string;
  color?: string;
  icon: ReactNode;
};

function Card({ title, description, className, color, icon }: Props) {
  return (
    <div className={` ${className} bg-[${color}]`}>
      {icon}
      <Heading>{title}</Heading>
      <Paragraph>{description}</Paragraph>
      <Button className={`text-[${color}]`}>Learn More</Button>
    </div>
  );
}

export default Card;
