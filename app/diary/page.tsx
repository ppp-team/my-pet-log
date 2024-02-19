import dynamic from "next/dynamic";

const DiaryList = dynamic(() => import("@/app/diary/_components/DiaryList"), { ssr: false });
const DiaryPgae = () => {
  return <DiaryList />;
};

export default DiaryPgae;
