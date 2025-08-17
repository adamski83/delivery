import { Clock, Mail, MapPin, Phone } from "lucide-react";
import React from "react";

import styles from "./Footer.module.css";

interface FooterTopProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

const data: FooterTopProps[] = [
  {
    title: "Visit Us",
    subtitle: "Berlin, Germany",
    icon: <MapPin />,
  },
  {
    title: "Call Us",
    subtitle: "+1-234-567-890",
    icon: <Phone />,
  },
  {
    title: "Working Hours",
    subtitle: "Mon - Fri: 7:00 - 17:00",
    icon: <Clock />,
  },
  {
    title: "Email Us",
    subtitle: "fakedata@.gmail.com",
    icon: <Mail />,
  },
];
const FooterTop = () => {
  return (
    <div className={styles.container}>
      {data?.map((item, index) => (
        <div key={index} className={styles.item}>
          {item.icon}
          <div>
            <h3 className={styles["item-h3"]}>{item?.title}</h3>
            <p className={styles.paragrapf}>{item?.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FooterTop;
