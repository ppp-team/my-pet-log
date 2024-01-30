import Link from "next/link";
import * as styles from "./FooterNavigationBar.css";

const FOOTER_NAVIGATION_LIST = [
  { id: 1, name: "홈", icon: "", href: "/home" },
  { id: 2, name: "육아일기", icon: "", href: "/diary" },
  { id: 3, name: "건강수첩", icon: "", href: "/healthlog" },
  { id: 4, name: "관리", icon: "", href: "settings" },
];

const FooterNavigationBar = () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        {FOOTER_NAVIGATION_LIST.map((menu) => (
          <Link key={menu.id} href={menu.href}>
            {menu.name}
          </Link>
        ))}
      </nav>
    </footer>
  );
};

export default FooterNavigationBar;
