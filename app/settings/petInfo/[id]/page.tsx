import PetRegisterEdit from "@/app/_components/PetRegister/PetEditForm";
import PetDetailPage from "@/app/_components/PetRegister/PetEditPage";

// const page = () => {
//   return (
//     <div>
//       <PetRegisterEdit />
//     </div>
//   );
// };

// export default page;

import { cookies } from "next/headers";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";

const EditPage = () => {
  const queryClient = new QueryClient();
  const petId = Number(cookies().get("petId")?.value);
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <PetRegisterEdit petId={petId} />;
    </HydrationBoundary>
  );
};

export default EditPage;

// const HomeSelectPage = async () => {
//   const queryClient = new QueryClient();
//   await queryClient.prefetchQuery({ queryKey: ["pets"], queryFn: () => getPets() });
//   const dehydratedState = dehydrate(queryClient);

//   return (
//     <HydrationBoundary state={dehydratedState}>
//       <SelectPet type="기록" path="/home" />
//     </HydrationBoundary>
//   );
// };

// export default HomeSelectPage;
