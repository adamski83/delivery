import { Star } from "lucide-react";
import React from "react";
import styles from "./favouriteButton.module.css";

const FavouriteButton = () => {
  return (
    <button>
      <Star className={styles.icon} />
    </button>
  );
};

export default FavouriteButton;
