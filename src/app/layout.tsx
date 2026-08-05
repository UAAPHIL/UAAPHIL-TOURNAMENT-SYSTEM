import type {Metadata, Viewport} from "next";
import {Inter} from "next/font/google";
import "@/styles/globals.css";
import {Providers} from "@/components/providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400","500","600","700"],
});

export const metadata:Metadata={
  title:{default:"UAAPHIL Tournament System v2",template:"%s | UAAPHIL"},
  description:"Foundation - Phase 2 UI",
};

export const viewport:Viewport={
  themeColor:"#0a0a0b",
  colorScheme:"dark",
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans bg-background text-foreground antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
