import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../src/app/styles/globals.css";
import styles from "./layout.module.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <main className={styles.main}>{children}</main>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
