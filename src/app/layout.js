import { Manrope } from "next/font/google";
import "../app/globals.css";
import Header from "../components/Header"; 
import Footer from "../components/Footer";

// 1. Configure the Manrope font
const manrope = Manrope({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope", // Our new CSS variable
});

export const metadata = {
  title: "Bazy Inc. | Independent Creative Studio",
  description: "Strategic design meets digital craft.",
};

export default function RootLayout({ children }) {
  return (
    // 2. Attach the new variable to the HTML tag
    <html lang="en" className={manrope.variable}>
      <body>
        <Header /> 
        {children} 
        <Footer />
      </body>
    </html>
  );
}