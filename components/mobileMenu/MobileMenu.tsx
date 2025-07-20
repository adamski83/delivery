import { AlignLeft } from "lucide-react";
import React from "react";
import styles from "./mobileMenu.module.css";
const MobileMenu = () => {
  return (
    <button>
      <AlignLeft className={styles.icon} />
    </button>
  );
};

export default MobileMenu;
