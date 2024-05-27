import type { Metadata } from "next";
import { Martian_Mono, PT_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const pt_san = PT_Sans({
  subsets: ["latin"],
  weight: "400",
});
const martian_mono = Martian_Mono({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Auglee Sneakers",
  description: "Showcasing my favourites shoes in a store.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`  ${pt_san.className} ${martian_mono.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
