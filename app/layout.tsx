import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Timeline",
  description: "A React UI for a timeline of posts",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-foreground min-h-screen antialiased",
          inter?.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
