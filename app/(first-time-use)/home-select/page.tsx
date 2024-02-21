import { getPets } from "@/app/_api/pets";
import SelectPet from "@/app/_components/SelectPet";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";

const HomeSelectPage = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({ queryKey: ["pets"], queryFn: () => getPets() });
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <SelectPet type="기록" path="/home" />
    </HydrationBoundary>
  );
};

export default HomeSelectPage;
