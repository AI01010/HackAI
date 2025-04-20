import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saucy Sales",
  description: "Pizza sales forecasting & insights",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Background image */}
        <div className="fixed inset-0 -z-10 w-full h-full">
          <Image
            src="/background-image.png" // Use a string path for public images
            alt="Background"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <main className="relative min-h-screen">{children}</main>
      </body>
    </html>
  );
}
