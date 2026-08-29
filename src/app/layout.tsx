import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Lo Zoccolaio - CRM",
  description: "Luxury handcrafted wooden clogs management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ variables: { colorPrimary: "#8B7355" } }}>
      <html lang="it">
        <body
          className={`${inter.variable} ${playfair.variable} antialiased bg-[#FAF9F6] text-[#3E3A35] font-sans selection:bg-[#D4C3B3] selection:text-[#3E3A35] min-h-screen flex flex-col`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
