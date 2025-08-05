import { Store } from "lucide-react";
import React from "react";
import styles from "./CartIcon.module.css";
import Link from "next/link";
import { PATHS } from "@/constants";

const CartIcon = () => {
  return (
    <div className={styles.relative}>
      <Link href={PATHS.BASKET.href}>
        <Store />
        <span className={styles["order-number"]}>10</span>
      </Link>
    </div>
  );
};

export default CartIcon;
