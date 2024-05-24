import type { Metadata } from "next";
import "../../../src/app/styles/globals.css";
import { Navigation } from "./../(components)/navigation/navigation";
import styles from "./../layout.module.css";

export const metadata: Metadata = {
  title: "Video courses",
  description: "Find your best course",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navigation />
      <div className={styles.main}>{children}</div>
    </>
  );
}
