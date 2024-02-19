import AuthContext from "@/app/(auth)/_components/AuthContext";
import QueryProvider from "@/app/_components/QueryProvider";
import "@/styles/global.css";
import "@/styles/colors.css";
import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "마이펫로그",
  description: "반려동물의 일상을 기록하고 공유하세요",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <QueryProvider>
          <AuthContext>
            {children}
            <ToastContainer />
            <div id="portal"></div>
          </AuthContext>
        </QueryProvider>
      </body>
    </html>
  );
}
