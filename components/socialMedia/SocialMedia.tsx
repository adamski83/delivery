import React from "react";
import styles from "./SocialMedia.module.css";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { title: "Facebook", url: "https://www.facebook.com", icon: <Facebook /> },
  { title: "Twitter", url: "https://www.twitter.com", icon: <Twitter /> },
  { title: "Instagram", url: "https://www.instagram.com", icon: <Instagram /> },
  { title: "LinkedIn", url: "https://www.linkedin.com", icon: <Linkedin /> },
  { title: "YouTube", url: "https://www.youtube.com", icon: <Youtube /> },
];

const SocialMedia = () => {
  return (
    <div className={styles["social-media"]}>
      {socialLinks.map(link => {
        return (
          <Link
            href={link?.url}
            key={link?.title}
            className={styles["social-media"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link?.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default SocialMedia;
