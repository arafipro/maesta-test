import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notsSans = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AIコーチング",
  description: "AIコーチングプラットフォーム",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={notsSans.className}>
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
