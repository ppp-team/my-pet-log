import DiaryDetail from "@/app/diary/_components/DiaryDetail/DiaryDetail";
import { cookies } from "next/headers";

const DiaryDetailPage = () => {
  const petId = Number(cookies().get("petId")?.value);

  return <DiaryDetail petId={petId} />;
};

export default DiaryDetailPage;
