import { ClerkLoaded, SignedIn, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { log } from "console";

import CartIcon from "../cartIcon/CartIcon";
import Container from "../container/Container";
import FavouriteButton from "../favouriteButton/FavouriteButton";
import HeaderMenu from "../headerMenu/HeaderMenu";
import Logo from "../logo/Logo";
import MobileMenu from "../mobileMenu/MobileMenu";
import SearchBar from "../searchBar/SearchBar";
import SignIn from "../signIn/SignIn";
import styles from "./header.module.css";

const Header = async () => {
  const user = await currentUser();
  log("Current User:", user);
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
            {!user && <SignIn />}
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  );
};

export default Header;
