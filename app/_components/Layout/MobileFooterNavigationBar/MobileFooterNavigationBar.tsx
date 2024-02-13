import Link from "next/link";
import * as styles from "./MobileFooterNavigationBar.css";

import HomeIcon from "@/public/icons/home.svg";
import DiaryIcon from "@/public/icons/diary.svg";
import HealthlogIcon from "@/public/icons/healthlog.svg";
import SettingsIcon from "@/public/icons/settings.svg";
import { usePathname } from "next/navigation";

const MOBILE_FOOTER_NAVIGATION = [
  { name: "홈", iconComp: HomeIcon, href: "/home" },
  { name: "육아일기", iconComp: DiaryIcon, href: "/diary" },
  { name: "건강수첩", iconComp: HealthlogIcon, href: "/healthlog" },
  { name: "관리", iconComp: SettingsIcon, href: "/settings" },
];

const MobileFooterNavigationBar = () => {
  const pathname = usePathname();
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        {MOBILE_FOOTER_NAVIGATION.map((menu) => {
          const isActivePage = pathname.includes(menu.href);
          return (
            <Link className={styles.link} key={menu.href} href={menu.href}>
              <menu.iconComp className={styles.menuIcon} color={isActivePage ? "var(--MainOrange)" : "var(--GrayC2)"} />
              <span className={isActivePage ? styles.activeMenuName : styles.noActiveMenuName}>{menu.name}</span>
            </Link>
          );
        })}
      </nav>
    </footer>
  );
};

export default MobileFooterNavigationBar;
