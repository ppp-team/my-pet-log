import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import SubscriptionList from "../_components/SubscriptionList";
import TitleHeader from "@/app/_components/TitleHeader";

const Page = () => {
  // const queryClient = new QueryClient();
  // const dehydratedState = dehydrate(queryClient);

  console.log("엥");
  return (
    <div>
      <TitleHeader title="구독중인 펫 계정" />
      {/* <HydrationBoundary state={dehydratedState}> */}
      <SubscriptionList />
      {/* </HydrationBoundary> */}
    </div>
  );
};

export default Page;
