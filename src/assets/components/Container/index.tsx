import styles from "./index.module.scss";
import React, { PropsWithChildren } from "react";
import cn from "classnames";

interface Props {
  className?: string;
}

export const Container: React.FC<PropsWithChildren<Props>> = ({
  className = "",
  children,
}) => {
  return <div className={cn(styles.container, className)}>{children}</div>;
};
