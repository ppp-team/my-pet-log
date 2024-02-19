"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import * as styles from "./layout.css";
import TitleHeader from "@/app/_components/TitleHeader";

export default function PetmateLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <section>
      <nav>
        <TitleHeader title="펫메이트 초대 및 그룹 관리" />
        <ul className={styles.navList}>
          <li className={`${pathname === "/settings/member" ? styles.active : styles.noActive}`}>
            <Link href="/settings/member" replace>
              펫메이트 그룹 관리
            </Link>
          </li>
          <li className={`${pathname === "/settings/invitation" ? styles.active : styles.noActive}`}>
            <Link href="/settings/invitation" replace>
              펫메이트 초대 내역
            </Link>
          </li>
        </ul>
      </nav>
      {children}
    </section>
  );
}
