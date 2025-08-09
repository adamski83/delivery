import banner_1 from "@/images/banner/banner_1.png";
import Image from "next/image";
import Link from "next/link";

import { Title } from "../Text/Text";
import styles from "./HomeBanner.module.css";

const HomeBanner = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				<Title className={styles.title}>
					Grab Upto 50% Off On Selected Headphone
				</Title>
				<Link href='/shop' className={styles.button}>
					Buy Now
				</Link>
			</div>
			<div className={styles.imageContainer}>
				<Image
					src={banner_1}
					alt='A girl with Headphones'
					className={styles.image}
				/>
			</div>
		</div>
	);
};

export default HomeBanner;
