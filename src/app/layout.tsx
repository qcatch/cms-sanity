import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sanity CMS Demo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isStudioRoute = false; // = router.pathname.startsWith("/studio");

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
