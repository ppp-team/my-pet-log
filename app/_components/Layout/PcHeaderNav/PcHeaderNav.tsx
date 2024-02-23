"use client";

import Image from "next/image";
import * as styles from "./PcHeaderNav.css";
import logoImageSrc from "@/public/icons/logo.svg?url";
import Link from "next/link";

const getMenuLoginLogout = (isLoggedIn: boolean) => {
  return isLoggedIn ? { label: "로그아웃", href: "/", style: styles.linkLogin } : { label: "로그인", href: "/login", style: styles.linkLogin };
};

const PcHeaderNav = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  const PC_CENTER_MENUS = [
    { label: "홈", href: "/home" },
    { label: "육아일기", href: "/diary" },
    { label: "건강수첩", href: "/healthlog" },
    { label: "관리", href: "/settings" },
  ];

  const PC_RIGHT_MENUS = [{ label: "회원가입", href: "/signup", style: styles.linkSignUp }, getMenuLoginLogout(isLoggedIn)];

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
        {PC_RIGHT_MENUS.map((menu) => (
          <li key={menu.label}>
            <Link className={menu.style} href={menu.href}>
              {menu.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PcHeaderNav;
