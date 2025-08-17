import { cn } from "@/lib/utils";
import { createElement } from "react";

import styles from "./Text.module.css";

interface TitleProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
}

export const Title = ({ children, className, as = "h2" }: TitleProps) => {
  return createElement(as, { className: cn(styles.text, className) }, children);
};
