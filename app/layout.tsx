import type { Metadata } from "next";
import "./globals.css";
import { Footer, Topbar } from "@/components/shared";
import { Quicksand } from "next/font/google";
import Providers from "@/lib/Providers";

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand'
})

export const metadata: Metadata = {
  title: "Sakura",
  description: "Anime streaming site",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body
          className={`${quicksand.variable} bg-primary text-gray-50 font-sans antialiased`}
        >
          <Topbar />
          <main>
            {children}
          </main>
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
