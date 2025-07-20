import { cn } from "@/lib/utils";
import React from "react";

import styles from "./container.module.css";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return <div className={cn(styles.container, className)}>{children}</div>;
};

export default Container;
