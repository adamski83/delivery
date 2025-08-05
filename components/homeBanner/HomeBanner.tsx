import Link from "next/link";
import React from "react";

import { Title } from "../text/text";
import styles from "./homeBanner.module.css";

const HomeBanner = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <Title>Grab Upto 50% Off On Selected Headphone</Title>
        <Link href={"/shop"}>Buy Now</Link>
      </div>
    </div>
  );
};

export default HomeBanner;
