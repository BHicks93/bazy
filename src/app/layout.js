import "../app/globals.css";
import Header from "../components/Header"; 
import Footer from "../components/Footer";

export const metadata = {
  title: "Bazy Inc. | Independent Creative Studio",
  description: "Strategic design meets digital craft.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header /> 
        {children} 
        <Footer />
      </body>
    </html>
  );
}