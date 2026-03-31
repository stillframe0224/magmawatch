import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MagmaWatch — Discourse Observatory",
  description: "Observe shifts before they surface. ネット世論の「量」ではなく、構造変化を見る。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
