import Link from "next/link";

import banner_1 from "@/images/banner/banner_1.png";
import Image from "next/image";
import { Title } from "../text/text";
import styles from "./HomeBanner.module.css";

const HomeBanner = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Title>
          Grab Upto 50% Off On <br /> Selected Headphone
        </Title>
        <Link href={"/shop"} className={styles.button}>
          Buy Now
        </Link>
      </div>
      <div className={styles.imageContainer}>
        <Image src={banner_1} alt="Home Banner" className={styles.image} />
      </div>
    </div>
  );
};

export default HomeBanner;
