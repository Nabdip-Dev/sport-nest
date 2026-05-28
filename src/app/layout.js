import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen !bg-[#e8eefd] flex flex-col">

        <Navbar />

        <main className="flex-1">
          {children}
        </main>
        <Toaster position="top-center" />

        <Footer />

      </body>
    </html>
  );
}