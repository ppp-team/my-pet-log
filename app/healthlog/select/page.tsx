import { getPets } from "@/app/_api/pets";
import SelectPet from "@/app/_components/SelectPet";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";

const SelectPage = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({ queryKey: ["pets"], queryFn: () => getPets() });
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <SelectPet type="건강수첩(을)" path="/healthlog" />
    </HydrationBoundary>
  );
};

export default SelectPage;
