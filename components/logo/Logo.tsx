import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

import styles from "./logo.module.css";

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <Link href="/">
      <h2 className={cn(styles.logo, className)}>Delivery</h2>
    </Link>
  );
};

export default Logo;
