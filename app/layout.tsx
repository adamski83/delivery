import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className="font-poppins antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
