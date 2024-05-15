import Link from "next/link";
import React, { ReactNode } from "react";
import styles from "./appLink.module.css";
import { UrlObject } from "url";

export const AppLink = ({
  children,
  href,
}: {
  children: ReactNode;
  href: string | UrlObject;
}) => {
  return (
    <Link href={href} className={styles.root}>
      {children}
    </Link>
  );
};
