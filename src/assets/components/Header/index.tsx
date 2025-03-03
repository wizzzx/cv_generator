import styles from "./index.module.scss";
import React from "react";
import cn from "classnames";

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <div className={cn(styles.container, className)}>
      <div></div>
    </div>
  );
};
