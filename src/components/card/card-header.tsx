import { FunctionComponent, ReactNode } from "react";

interface CardHeaderProps {
  children: ReactNode;
}
export const CardHeader: FunctionComponent<CardHeaderProps> = ({ children }) => {
  return <div className="p-4 border-b">{children}</div>;
};
