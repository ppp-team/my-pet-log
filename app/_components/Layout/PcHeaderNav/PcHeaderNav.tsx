"use client";

import Image from "next/image";
import * as styles from "./PcHeaderNav.css";
import logoImageSrc from "@/public/icons/logo.svg?url";
import Link from "next/link";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { postLogout } from "@/app/_api/auth";
import { useRouter } from "next/navigation";

const PC_CENTER_MENUS = [
  { label: "홈", href: "/home" },
  { label: "육아일기", href: "/diary" },
  { label: "건강수첩", href: "/healthlog" },
  { label: "관리", href: "/settings" },
];

const PcHeaderNav = () => {
  const [cookies] = useCookies();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (cookies.accessToken) setIsLoggedIn(true);
  }, [cookies]);

  const router = useRouter();

  const logoutMutation = useMutation({
    mutationFn: () => postLogout(),
    onSuccess: () => {
      router.push("/login");
    },
  });

  return (
    <nav className={styles.nav}>
      <Link href="/">
        <Image className={styles.logo} src={logoImageSrc} alt="로고 이미지" width={37} height={36} />
      </Link>
      <ul className={styles.centerMenuList}>
        {PC_CENTER_MENUS.map((menu) => (
          <li key={menu.label}>
            <Link className={styles.menu} href={menu.href}>
              {menu.label}
            </Link>
          </li>
        ))}
      </ul>
      <ul className={styles.rightMenuList}>
        <li>
          {isLoggedIn ? (
            <button
              className={styles.linkLoginLogout}
              onClick={() => {
                logoutMutation.mutate();
              }}
            >
              로그아웃
            </button>
          ) : (
            <Link className={styles.linkLoginLogout} href="/login">
              로그인
            </Link>
          )}
        </li>
        <li>
          <Link className={styles.linkSignUp} href="/signUp">
            회원가입
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default PcHeaderNav;
