import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Simple Calculator",
  description: "Just a calculator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
