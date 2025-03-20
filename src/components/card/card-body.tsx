import { FunctionComponent, ReactNode } from "react";

interface CardBodyProps {
  children: ReactNode;
}
export const CardBody: FunctionComponent<CardBodyProps> = ({ children }) => {
  return <div className="p-4">{children}</div>;
};
