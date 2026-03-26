import { Outfit, Ovo, Vollkorn } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});

const vollkorn = Vollkorn({
  subsets: ["latin"], weight: ["400", "500", "600"]
});

export const metadata = {
  title: "Maddalen DeMars - Portfolio",
  description: "Welcome to my collection of professional and personal works.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} ${vollkorn.className} antialiased leading-8 
        overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
