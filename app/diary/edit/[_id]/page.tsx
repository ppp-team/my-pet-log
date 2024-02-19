import EditForm from "@/app/diary/_components/EditForm";
import { cookies } from "next/headers";

const EditPage = () => {
  const petId = Number(cookies().get("petId")?.value);

  return <EditForm petId={petId} />;
};

export default EditPage;
