import PlusIcon from "@/assets/PlusIcon";
import Link from "next/link";
const EmptyDiaryList = () => {
  return (
    <>
      <span>
        아직 일기가 없어요.
        <br />첫 일기를 작성해보세요!
      </span>
      <Link href={"/diary/edit"}>
        <PlusIcon color="black" width="20" />
      </Link>
    </>
  );
};

export default EmptyDiaryList;
