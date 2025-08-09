import { headerData } from "@/constants";
import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

import Logo from "../Logo/Logo";
import SocialMedia from "../SocialMedia/SocialMedia";
import styles from "./SideMenu.module.css";

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu: FC<SideMenuProps> = ({ isOpen, onClose }) => {
  const path = usePathname();

  return (
    <div
      className={`${styles["side-menu"]} ${isOpen ? styles["side-menu-open"] : styles["side-menu-closed"]}`}
    >
      <div>
        <Logo className={styles["side-menu-logo"]} />
        <div onClick={onClose} className={styles["logo-close"]}>
          <X />
        </div>

        <div className={styles["side-menu-links"]}>
          {headerData?.map(item => {
            return (
              <Link
                href={item?.href}
                key={item?.title}
                className={`${styles["side-menu-links a:hover"]} ${path === item?.href && styles["side-menu-links-active"]}`}
              >
                {item?.title}
              </Link>
            );
          })}
        </div>
        <SocialMedia />
      </div>
    </div>
  );
};

export default SideMenu;
