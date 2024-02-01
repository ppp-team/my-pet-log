"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <section>
      <nav>
        <ul>
          <li>
            <Link className={`link ${pathname === "/about" ? "active" : ""}`} href="/profile">
              프로필 설정
            </Link>
          </li>
          <li>
            <Link className={`link ${pathname === "/password" ? "active" : ""}`} href="/password">
              비밀번호 변경
            </Link>
          </li>
        </ul>
        <div>----------------------------------------</div>
      </nav>
      {children}
    </section>
  );
}
