import { getPets } from "@/app/_api/pets";
import SelectPet from "@/app/_components/SelectPet";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";

const SelectPage = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({ queryKey: ["pets"], queryFn: () => getPets() });
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <SelectPet type="육아일기" path="/diary" />
    </HydrationBoundary>
  );
};

export default SelectPage;
