import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "Projek Osis Eksix",
  description: "Semua yang asix berawal dari anak eksix",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.ico" />
      </head>
      <body className={poppins.className}>
        <Navbar />
        <div className="w-full mx-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
