import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tiệm Trà Tony | Một chút ngọt ngào",
  description: "Trà tươi pha mới mỗi ngày tại Thủ Đức. Khám phá Trà Vải Hoa Hồng, Coco Matcha và những món được yêu thích tại Tiệm Trà Tony.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: `${basePath}/tony-logo.jpg`,
    shortcut: `${basePath}/tony-logo.jpg`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
