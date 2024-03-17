"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import * as styles from "./layout.css";

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <section>
      <nav>
        <ul className={styles.navList}>
          <li className={`${pathname === "/diary/my-pet" ? styles.active : styles.noActive}`}>
            <Link href="/diary/my-pet" replace>
              마이펫 일기
            </Link>
          </li>
          <li className={`${pathname === "/diary/friend-pet" ? styles.active : styles.noActive}`}>
            <Link href="/diary/friend-pet" replace>
              친구의 일기
            </Link>
          </li>
        </ul>
      </nav>
      {children}
    </section>
  );
}
