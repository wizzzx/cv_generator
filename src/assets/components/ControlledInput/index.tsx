import styles from "./index.module.scss";
import React, { useState } from "react";
import cn from "classnames";
import { Container } from "../Container";

interface Props {
  className?: string;
}

export const ControlledInput: React.FC<Props> = ({ className }) => {
  const [value, setValue] = useState("");

  return (
    <Container className={cn(styles.container, className)}>
      <input
        type="text"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
      />
      <p>{value}</p>
    </Container>
  );
};
