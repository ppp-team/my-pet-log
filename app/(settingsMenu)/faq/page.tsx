import { NotionAPI } from "notion-client";
import Service from "@/components/Setting/Service";
import pageInfoMap from "@/components/Setting/Service/PageInfo";

const Page = async () => {
  const notion = new NotionAPI();

  const { pageId } = pageInfoMap.faq; // Use "qna" directly
  const recordMap = await notion.getPage(pageId);

  return (
    <div>
      <Service pageType="faq" recordMap={recordMap} />
    </div>
  );
};

export default Page;
