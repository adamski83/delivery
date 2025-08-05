"use client";
import { AlignLeft } from "lucide-react";
import React from "react";

import SideMenu from "../SideMenu/SideMenu";
import styles from "./MobileMenu.module.css";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <button onClick={() => setIsOpen(!isOpen)}>
      <AlignLeft className={styles.icon} />
      <div className={styles["sideMenu-hidden"]}>
        <SideMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </button>
  );
};

export default MobileMenu;
