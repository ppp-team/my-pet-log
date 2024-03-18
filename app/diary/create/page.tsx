import CreateForm from "@/app/diary/_components/Form/CreateForm";
import { cookies } from "next/headers";
import { container, root } from "@/app/diary/(diary)/my-pet/style.css";
import BackHeader from "@/app/_components/BackHeader";

const CreatePage = () => {
  const petId = Number(cookies().get("petId")?.value);

  return (
    <div className={root}>
      <BackHeader title="육아일기 글작성" styleTop="0" />
      <div className={container}>
        <CreateForm petId={petId} />
      </div>
    </div>
  );
};

export default CreatePage;
