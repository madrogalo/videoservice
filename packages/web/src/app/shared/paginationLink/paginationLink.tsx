import React, { ReactNode } from "react";
import { UrlObject } from "url";
import { AppLink } from "../app-link/appLink";
import styles from "./paginationLink.module.css";

export const PaginationLink = ({
  children,
  href,
}: {
  children: ReactNode;
  href: string | UrlObject;
}) => {
  return (
    <span className={styles.root}>
      <AppLink href={href}>{children}</AppLink>
    </span>
  );
};
