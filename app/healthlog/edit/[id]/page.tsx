import EditForm from "@/app/healthlog/_components/EditForm";
import { cookies } from "next/headers";

const EditPage = ({ params: { id } }: { params: { id: string } }) => {
  const logId = Number(id);
  const petId = Number(cookies().get("petId")?.value);

  return <EditForm petId={petId} logId={logId} />;
};

export default EditPage;
