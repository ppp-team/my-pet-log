import PetRegisterEdit from "@/app/_components/PetRegister/PetEditForm";

// const page = () => {
//   return (
//     <div>
//       <PetRegisterEdit />
//     </div>
//   );
// };

// export default page;

import { cookies } from "next/headers";

const EditPage = ({ params: { petId: paramPetId } }: { params: { petId: string } }) => {
  const petId = Number(cookies().get("petId")?.value);

  return <PetRegisterEdit petId={petId} />;
};

export default EditPage;
