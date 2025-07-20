import Container from "../container/Container";
import HeaderMenu from "../headerMenu/HeaderMenu";
import Logo from "../logo/Logo";
import styles from "./header.module.css";
import SearchBar from "../searchBar/SearchBar";
import CartIcon from "../cartIcon/CartIcon";
import FavouriteButton from "../favouriteButton/FavouriteButton";
import SignIn from "../signIn/SignIn";
import MobileMenu from "../mobileMenu/MobileMenu";

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <Logo />
        <div className={styles.mobile_logo}>
          <MobileMenu />
        </div>
        <HeaderMenu />
        <div className={styles.header_container}>
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
