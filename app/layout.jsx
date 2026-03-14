import { Urbanist } from "next/font/google";
import "regenerator-runtime/runtime"; // Evitar problemas de async
import "./globals.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Navbar from "@/components/navbar";
import Header from "@/components/header";
// import ChatbotWrapper from "@/components/chatbot/ChatbotWrapper";
import Footer from "@/components/Footer";
const urbanist = Urbanist({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>TorreSegura</title>
      </head>
      <body className={urbanist.className}  cz-shortcut-listen="true">
        <Header />
        {children}
        {/* <Navbar /> */}
        {/* <ChatbotWrapper /> */}
        <Footer/>
      </body>
    </html>
  );
}
