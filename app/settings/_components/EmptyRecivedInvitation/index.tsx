import Image from "next/image";
import letter from "@/public/icons/letter-gray.svg?url";
import TitleHeader from "@/app/_components/TitleHeader";
import Link from "next/link";

import { button, container, title, description, icon } from "./style.css";

const EmptyRecivedInvitation = () => {
  return (
    <>
      <TitleHeader title="초대 받은 내역" />
      <section className={container}>
        <Image className={icon} src={letter} alt="letter" width={110} height={81} />
        <p className={title}>초대 받은 내역이 없습니다.</p>
        <p className={description}>해당 프로필로 온 초대 내역이 없습니다. 새로운 펫메이트를 초대해볼까요?</p>
        <Link className={button} href="/settings/invitation">
          초대하러 가기
        </Link>
      </section>
    </>
  );
};

export default EmptyRecivedInvitation;
