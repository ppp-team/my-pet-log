import { NotionAPI } from "notion-client";
import Service from "@/components/Setting/Service";

const rootDomain = "https://hissing-route-336.notion.site";
const previewImagesEnabled = true;

const Page = async () => {
  const pageId = "Q-A-4aea4500929845c0a961ae2ba0f49688";
  const notion = new NotionAPI();
  const recordMap = await notion.getPage(pageId);

  return (
    <div>
      <Service recordMap={recordMap} rootDomain={rootDomain} previewImagesEnabled={previewImagesEnabled} />
    </div>
  );
};

export default Page;
