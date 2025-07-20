import { SearchIcon } from "lucide-react";
import React from "react";
import styles from "./searchBar.module.css";
const SearchBar = () => {
  return (
    <div>
      <SearchIcon className={styles.searchIcon} />
    </div>
  );
};

export default SearchBar;
