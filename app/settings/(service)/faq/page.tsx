import { NotionAPI } from "notion-client";
import Service from "@/app/settings/_components/Service";
import pageInfoMap from "@/app/settings/_components/Service/PageInfo";

const Page = async () => {
  const notion = new NotionAPI();

  const { pageId } = pageInfoMap.faq;
  const recordMap = await notion.getPage(pageId);

  return (
    <section>
      <Service pageType="faq" recordMap={recordMap} />
    </section>
  );
};

export default Page;
