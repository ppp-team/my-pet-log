import { Metadata } from "next";

export const metadata: Metadata = {
  title: "홈 | 마이펫로그",
  description: "반려동물 프로필과 건강 수첩을 빠르게 확인하세요",
};

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
