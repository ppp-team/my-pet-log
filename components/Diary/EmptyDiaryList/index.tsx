import Link from "next/link";
import Image from "next/image";
import PlusButton from "@/assets/plusbutton.svg";
const EmptyDiaryList = () => {
  return (
    <>
      <span>
        아직 일기가 없어요.
        <br />첫 일기를 작성해보세요!
      </span>
      <Link href={"/diary/edit"}>
        <Image src={PlusButton} alt="plut button" />
      </Link>
    </>
  );
};

export default EmptyDiaryList;
