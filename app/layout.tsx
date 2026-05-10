import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "REGAIN CLINIC",
  description: "프리미엄 피부미용·재생 클리닉 REGAIN CLINIC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
