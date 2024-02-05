import Image from "next/image";
import Link from "next/link";
import CheckRigntIcon from "@/assets/chevron-right.svg?url";
import * as styles from "./style.css";

interface MenuListProps {
  href: string;
  src: string;
  alt: string;
  text: string;
}

const MenuList = ({ href, src, alt, text }: MenuListProps) => {
  return (
    <Link className={styles.list} href={href}>
      <Image src={src} alt={alt} width={24} height={24} />
      {text}
      <Image src={CheckRigntIcon} alt="check right icon" width={22} height={22} />
    </Link>
  );
};

export default MenuList;
