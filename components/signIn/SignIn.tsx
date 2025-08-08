import { SignInButton } from "@clerk/nextjs";
import { LogInIcon } from "lucide-react";
import React from "react";

import styles from "./SignIn.module.css";

const SignIn = () => {
  return (
    <SignInButton mode="modal">
      <LogInIcon className={styles["sign-in"]} />
    </SignInButton>
  );
};

export default SignIn;
