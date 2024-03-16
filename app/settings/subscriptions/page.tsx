import SubscriptionList from "../_components/SubscriptionList";
import TitleHeader from "@/app/_components/TitleHeader";

const Page = () => {
  console.log("엥");
  return (
    <div>
      <TitleHeader title="구독중인 펫 계정" />
      <SubscriptionList />
    </div>
  );
};

export default Page;
