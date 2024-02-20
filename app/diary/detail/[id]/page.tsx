import { getDiary } from "@/app/_api/diary";
import DiaryDetail from "@/app/diary/_components/DiaryDetail";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { cookies } from "next/headers";

const DiaryDetailPage = async ({ params: { id } }: { params: { id: string } }) => {
  const diaryId = Number(id);
  const queryClient = new QueryClient();
  const petId = Number(cookies().get("petId")?.value);
  await queryClient.prefetchQuery({ queryKey: ["diary", { petId, diaryId }], queryFn: () => getDiary({ diaryId }) });
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <DiaryDetail petId={petId} diaryId={diaryId} />
    </HydrationBoundary>
  );
};

export default DiaryDetailPage;
