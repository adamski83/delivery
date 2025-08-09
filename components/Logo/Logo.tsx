import { cn } from "@/lib/utils";
import Link from "next/link";

import styles from "./Logo.module.css";

interface LogoProps {
  className?: string;
  variant?: "default" | "white";
}

const Logo = ({ className, variant = "default" }: LogoProps) => {
  const logoClass = variant === "white" ? styles["logo-white"] : styles.logo;

  return (
    <Link href="/">
      <h2 className={cn(logoClass, className)}>Delivery</h2>
    </Link>
  );
};

export default Logo;
