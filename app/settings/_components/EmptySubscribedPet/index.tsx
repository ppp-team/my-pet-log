import Image from "next/image";
import empty from "@/public/icons/empty-box.svg?url";
import Link from "next/link";

import { button, container, title, description, icon } from "./style.css";

const EmptySubscribedPet = () => {
  return (
    <>
      <section className={container}>
        <Image className={icon} src={empty} alt="letter" width={200} height={193.3} />
        <p className={title}>앗! 비어있어요</p>
        <p className={description}>{`구독중인 펫 계정이 없어요.\n 친구들을 찾아볼까요?`}</p>
        <Link className={button} href="/diary/friend-pet">
          추천피드로 가기
        </Link>
      </section>
    </>
  );
};

export default EmptySubscribedPet;
