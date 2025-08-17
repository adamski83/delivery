import { categoriesData, quickLinksData } from "@/constants";
import Link from "next/link";

import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import SocialMedia from "../SocialMedia/SocialMedia";
import { Title } from "../Text/Text";
import styles from "./Footer.module.css";
import FooterTop from "./FooterTop";
import { Button, Input } from "@mui/material";

const Footer = () => {
  return (
    <footer>
      <Container className={styles["container-footer"]}>
        <FooterTop />
        <div className={styles.footerGrid}>
          <div className={styles.spaceY4}>
            <Logo />
            <Title as="p" className={styles.text}>
              Discover the Best what we have to offer.
            </Title>
            <SocialMedia />
          </div>
          <div>
            <Title as="h3" className={styles.title}>
              Quick Links
            </Title>
            <ul className={styles.listContainer}>
              {quickLinksData?.map(item => (
                <li key={item?.title}>
                  <Link href={item?.href} className={styles.link}>
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Title as="h3" className={styles.title}>
              Categories
            </Title>
            <ul className={styles.listContainer}>
              {categoriesData?.map(item => (
                <li key={item?.title}>
                  <Link
                    href={`/category/${item?.href}`}
                    className={styles.link}
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.spaceY4}>
            <Title as="h3" className={styles.title}>
              Contact Us
            </Title>
            <p className={styles.link}>Subscribe to our newsletter</p>
            <form className={styles.form}>
              <Input
                type="email"
                placeholder="Enter your email"
                required
                className={styles.input}
              />
              <Button
                sx={{
                  backgroundColor: "#000000",
                  color: "#ffffff",
                  "&:hover": {
                    backgroundColor: "#374151",
                  },
                }}
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className={styles["footer-bottom"]}>
          {new Date().getFullYear()} © Delivery <Logo />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
