import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";

import Footer from "./components/Footer";

import Navbar from "./components/Nav/Navbar";
import { Suspense } from "react";
import NavbarSkeleton from "./components/Nav/NavbarSkeleton";
import { Toaster } from "react-hot-toast";


const hindSiliguri = Hind_Siliguri({

  subsets: ['bengali', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
});



export const metadata: Metadata = {
   title: "বাজার দর | BazarDor",
  description: "প্রয়োজনীয় পণ্যের আজকের দাম এক নজরে।",
  icons: {
  icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🛒</text></svg>",
},
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="bn"
      data-theme="light"
      className={`${hindSiliguri.className} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-[#F0FFF0]/50">
        <Suspense fallback={<NavbarSkeleton />}>
          <Navbar />
        </Suspense>
        <div className="flex-1">{children}</div>
        <Toaster position="top-center" />
        <Footer />
      </body>
    </html>
  );
}
