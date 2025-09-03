import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const noto = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "ROIブースター",
  description: "媒体運用×LP改善×記事LPでROIを底上げ"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${noto.className} bg-white text-slate-800 antialiased`}>
        {children}
      </body>
    </html>
  );
}
