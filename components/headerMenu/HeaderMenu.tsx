"use client";

import { headerData } from "@/constants";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

import styles from "./headerMenu.module.css";

const HeaderMenu = () => {
  const pathname = usePathname();

  return (
    <div className={styles.hMenu}>
      {headerData?.map(item => (
        <Link
          key={item.title}
          href={item?.href}
          className={`${pathname === item?.href ? styles.headerLinkActive : styles.headerLinkInactive} ${styles.headerLink}`}
        >
          {item?.title}
        </Link>
      ))}
    </div>
  );
};

export default HeaderMenu;
