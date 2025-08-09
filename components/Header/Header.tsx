
import { ClerkLoaded, SignedIn, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import CartIcon from "../CartIcon/CartIcon";
import Container from "../Container/Container";
import FavouriteButton from "../FavouriteButton/FavouriteButton";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import Logo from "../Logo/Logo";
import MobileMenu from "../MobileMenu/MobileMenu";
import SearchBar from "../SearchBar/SearchBar";
import SignIn from "../SignIn/SignIn";
import styles from "./Header.module.css";

const Header = async () => {
  const loggedUser = await currentUser();

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
          <ClerkLoaded>
            <SignedIn>
              <UserButton />
            </SignedIn>
            {!loggedUser && <SignIn />}
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  );
};

export default Header;
