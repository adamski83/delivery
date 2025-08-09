"use client";

import { headerData } from "@/constants";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

import styles from "./HeaderMenu.module.css";

const HeaderMenu = () => {
  const pathname = usePathname();

  return (
    <div className={styles["header-menu"]}>
      {headerData?.map(item => (
        <Link
          key={item.title}
          href={item?.href}
          className={`${pathname === item?.href ? styles["header-link-active"] : styles["header-link"]} ${styles["header-link"]}`}
        >
          {item?.title}
        </Link>
      ))}
    </div>
  );
};

export default HeaderMenu;
