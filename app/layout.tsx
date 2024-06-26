import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./layout.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Novoplex",
  description: "Novoplex technical specification",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
