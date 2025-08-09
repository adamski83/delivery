import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { ThemeProvider } from "@/components/ThemeProvider";

import type { Metadata } from "next";
import "./globals.css";
import styles from "./layout.module.css";

export const metadata: Metadata = {
  title: "Delivery",
  description: "Just a simple delivery app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <ClerkProvider>
      <html lang="en">
        <body className="font-poppins antialiased">
          <ThemeProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
