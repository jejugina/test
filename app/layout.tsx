import { Suspense } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AccountHeader from "./auth/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "bloom | 동백마을 × A2O Lite",
  description: "동백숲의 이야기가, 당신의 일상에 피어납니다. 꽃님이와 블룸이가 전하는 동백마을 × A2O Lite 콜라보레이션.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col"><Suspense fallback={<div className="account-header">회원 메뉴 불러오는 중…</div>}><AccountHeader /></Suspense>{children}</body>
    </html>
  );
}



