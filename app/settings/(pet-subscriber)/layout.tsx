"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import * as styles from "./layout.css";
import TitleHeader from "@/app/_components/TitleHeader";

export default function PetSubscriberLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <section>
      <nav>
        <TitleHeader title="구독자 관리" />
        <ul className={styles.navList}>
          <li className={`${pathname === "/settings/subscriber" ? styles.active : styles.noActive}`}>
            <Link href="/settings/subscriber" replace>
              구독자 목록 (10)
            </Link>
          </li>
          <li className={`${pathname === "/settings/blocked-user" ? styles.active : styles.noActive}`}>
            <Link href="/settings/blocked-user" replace>
              차단한 유저 (5)
            </Link>
          </li>
        </ul>
      </nav>
      {children}
    </section>
  );
}
