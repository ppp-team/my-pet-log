"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import * as styles from "@/app/settings/(account)/layout.css";
import TitleHeader from "@/app/_components/TitleHeader";

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <section>
      <nav>
        <TitleHeader title="나의 프로필" redirectPath="/settings" />
        <ul className={styles.navList}>
          <li className={`${pathname === "/settings/profile" ? styles.active : styles.noActive}`}>
            <Link href="/settings/profile">프로필 설정</Link>
          </li>
          <li className={`${pathname === "/settings/password" ? styles.active : styles.noActive}`}>
            <Link href="/settings/password">비밀번호 변경</Link>
          </li>
        </ul>
      </nav>
      {children}
    </section>
  );
}
