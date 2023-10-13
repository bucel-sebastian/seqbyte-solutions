import Header from "@/components/Header";
import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });

export const metadata = {
  title: "Seqbyte Solutions",
  description: "Turning ideas into code",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
