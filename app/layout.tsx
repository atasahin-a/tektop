import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: [
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
});

export const metadata: Metadata = {
  title: "TekTop",
  description: "Tek Top Resmi Web Sitesi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={poppins.className}
    >
      <body className="min-h-screen flex flex-col bg-[#F5F5F5]">
        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}