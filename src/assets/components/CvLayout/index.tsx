import styles from "./index.module.scss";
import React from "react";
import cn from "classnames";
import { Container } from "../Container";

interface Props {
  className?: string;
}

export const CvLayout: React.FC<Props> = ({ className }) => {
  return (
    <Container className={cn(styles.container, className)}>
      <div className={styles.main_section}></div>
      <div className={styles.secondary_section}></div>
    </Container>
  );
};
