import SubscriptionsLayout from "@/app/settings/subscriptions/layout";
import SubscriptionList from "../_components/SubscriptionList";

const Page = () => {
  return (
    <div>
      <SubscriptionsLayout />
      <SubscriptionList members={members} />
    </div>
  );
};

export default Page;
