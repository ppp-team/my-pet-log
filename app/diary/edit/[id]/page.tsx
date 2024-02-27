import BackHeader from "@/app/_components/BackHeader";
import EditForm from "@/app/diary/_components/Form/EditForm";
import { cookies } from "next/headers";
import { container, root } from "@/app/diary/style.css";

const EditPage = ({ params: { id } }: { params: { id: string } }) => {
  const diaryId = Number(id);
  const petId = Number(cookies().get("petId")?.value);

  return (
    <div className={root}>
      <BackHeader title="육아일기 글작성" styleTop="0" />
      <div className={container}>
        <EditForm petId={petId} diaryId={diaryId} />
      </div>
    </div>
  );
};

export default EditPage;
