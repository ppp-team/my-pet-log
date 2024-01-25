import QueryProvider from "@/components/QueryProvider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "반려일기",
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
