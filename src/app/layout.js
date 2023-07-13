import Nav from "@/components/Nav";
import "./globals.css";
import { Playfair_Display } from "next/font/google";
import Footer from "@/components/Footer";

const Playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-Playfair_Display",
});

export const metadata = {
  title: "Arya Glam",
  description: "Your one stop shop for everything glamorous",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${Playfair.variable} font-sans bg-slate-100 text-slate-900`}
      >
        <header>
          <Nav />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
