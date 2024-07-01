import Link from "next/link";
import React from "react";
import styles from "./navigation.module.css";
import { ROUTES } from "../../routing";

export const Navigation = () => {
  return (
    <div className={styles.root}>
      <Link href={ROUTES.home}>Home</Link>
      <Link href={ROUTES.signin}>SignIn</Link>
      <Link href={ROUTES.login}>Login</Link>
      <Link href={ROUTES.about}>About</Link>
    </div>
  );
};
