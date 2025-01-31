import { ReactNode } from "react";
import "./GradientBackground.css";

interface ChildrenProps {
  children: ReactNode;
}

export const GradientBackground = ({ children }: ChildrenProps) => {
  return (
    <>
      <div className="container">
        <div className="gradient-circle-1 color-gradient"></div>
        {/* <div className="gradient-circle-2 color-gradient"></div> */}
      </div>
      <div>{children}</div>
    </>
  );
};
