import CreateForm from "@/app/diary/_components/Form/CreateForm";
import { cookies } from "next/headers";

const CreatePage = () => {
  const petId = Number(cookies().get("petId")?.value);

  return <CreateForm petId={petId} />;
};

export default CreatePage;
