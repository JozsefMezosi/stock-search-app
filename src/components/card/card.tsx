import { FunctionComponent, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}
export const Card: FunctionComponent<CardProps> = ({ children }) => {
  return <div className="bg-white border rounded-lg">{children}</div>;
};
