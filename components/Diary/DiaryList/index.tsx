import EmptyDiaryList from "@/components/Diary/EmptyDiaryList";
import { useState } from "react";

const Diary = () => {
  return <div>다이어리</div>;
};
const DiaryList = () => {
  const [data, setData] = useState(null);

  if (!data) return <EmptyDiaryList />;
  return (
    <>
      <input />
      <span>2024.12.24</span>
      <Diary />
    </>
  );
};

export default DiaryList;
