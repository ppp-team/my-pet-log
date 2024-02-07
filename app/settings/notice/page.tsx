import { NotionAPI } from "notion-client";
import Service from "@/components/Setting/Service";
import pageInfoMap from "@/components/Setting/Service/PageInfo";

const Page = async () => {
  const notion = new NotionAPI();

  const { pageId } = pageInfoMap.notice;
  const recordMap = await notion.getPage(pageId);

  return (
    <section>
      <Service pageType="notice" recordMap={recordMap} />
    </section>
  );
};

export default Page;