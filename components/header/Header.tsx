import CartIcon from "../CartIcon/CartIcon";
import Container from "../Container/Container";
import FavouriteButton from "../FavouriteButton/FavouriteButton";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import Logo from "../Logo/Logo";
import MobileMenu from "../MobileMenu/MobileMenu";
import SearchBar from "../SearchBar/SearchBar";
import SignIn from "../SignIn/SignIn";
import styles from "./Header.module.css";

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
