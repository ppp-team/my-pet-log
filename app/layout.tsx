import QueryProvider from "@/components/QueryProvider";
import "@/styles/global.css";
import "@/styles/colors.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "마이펫로그",
  description: "반려동물의 일상을 기록하고 공유하세요",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
