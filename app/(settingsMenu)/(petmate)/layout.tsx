"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import * as styles from "./layout.css";
import CloseIcon from "@/assets/invite-petcard.svg?url"; //추후 수정
import Image from "next/image";
import TitleHeader from "@/components/@common/TitleHeader";

export default function PetmateLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <section>
      <nav>
        <TitleHeader title="펫메이트 초대 및 그룹 관리" redirectPath="/settings" />
        <ul className={styles.navList}>
          <li className={`${pathname === "/member" ? styles.active : styles.noActive}`}>
            <Link href="/member">펫메이트 그룹 관리</Link>
          </li>
          <li className={`${pathname === "/invitation" ? styles.active : styles.noActive}`}>
            <Link href="/invitation">펫메이트 초대 내역</Link>
          </li>
        </ul>
      </nav>
      {children}
    </section>
  );
}
