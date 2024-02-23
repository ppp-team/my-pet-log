import PetRegisterEdit from "@/app/_components/PetRegister/PetEditForm";
import { cookies } from "next/headers";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";

const EditPage = () => {
  const queryClient = new QueryClient();
  const petId = Number(cookies().get("petId")?.value);
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <PetRegisterEdit />;
    </HydrationBoundary>
  );
};

export default EditPage;
