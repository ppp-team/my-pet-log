"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function PetmateLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <section>
      <nav>
        <ul>
          <li>
            <Link className={`link ${pathname === "/member" ? "active" : ""}`} href="/member">
              펫메이트 그룹 관리
            </Link>
          </li>
          <li>
            <Link className={`link ${pathname === "/invitation" ? "active" : ""}`} href="/invitation">
              펫메이트 초대 내역
            </Link>
          </li>
        </ul>
        <div>----------------------------------------</div>
      </nav>
      {children}
    </section>
  );
}
