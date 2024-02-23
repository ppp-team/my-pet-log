import EditForm from "@/app/diary/_components/Form/EditForm";
import { cookies } from "next/headers";

const EditPage = ({ params: { id } }: { params: { id: string } }) => {
  const diaryId = Number(id);
  const petId = Number(cookies().get("petId")?.value);

  return <EditForm petId={petId} diaryId={diaryId} />;
};

export default EditPage;
