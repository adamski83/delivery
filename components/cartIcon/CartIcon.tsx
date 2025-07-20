import { Store } from "lucide-react";
import React from "react";
import styles from "./cartIcon.module.css";
import Link from "next/link";
const CartIcon = () => {
  return (
    <div className={styles.relative}>
      <Link href="/cart" className={styles.icon}>
        <Store className={styles.icon} />
        <span className={styles.orderNumber}>10</span>
      </Link>
    </div>
  );
};

export default CartIcon;
