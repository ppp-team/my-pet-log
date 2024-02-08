"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import * as styles from "@/app/settings/(accounts)/layout.css";
import CloseIcon from "@/assets/close.svg?url";
import Image from "next/image";

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <section>
      <nav>
        <header className={styles.header}>
          나의 프로필
          <div className={styles.closeIcon} onClick={() => router.push("/settings")}>
            <Image src={CloseIcon} alt="close icon" width={25} height={25} />
          </div>
        </header>
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
