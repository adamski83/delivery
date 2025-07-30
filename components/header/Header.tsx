import CartIcon from "../cartIcon/CartIcon";
import Container from "../container/Container";
import FavouriteButton from "../favouriteButton/FavouriteButton";
import HeaderMenu from "../headerMenu/HeaderMenu";
import Logo from "../logo/Logo";
import MobileMenu from "../mobileMenu/MobileMenu";
import SearchBar from "../searchBar/SearchBar";
import SignIn from "../signIn/SignIn";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <Logo />
        <div className={styles["mobile-logo"]}>
          <MobileMenu />
        </div>
        <HeaderMenu />
        <div className={styles["header-container"]}>
          <SearchBar />
          <CartIcon />
          <FavouriteButton />
          <SignIn />
        </div>
      </Container>
    </header>
  );
};

export default Header;
