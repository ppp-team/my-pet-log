"use client";
import Link from "next/link";
import { ExtendedRecordMap } from "notion-types";
import { NotionRenderer } from "react-notion-x";
import { useEffect, useState } from "react";
import pageInfoMap, { PageInfo } from "@/components/Setting/Service/PageInfo";

const notionDomain = "https://hissing-route-336.notion.site";

interface NotionResultProps {
  rootPageId: string;
  rootDomain: string;
  previewImagesEnabled: boolean;
  recordMap: ExtendedRecordMap;
}
interface ServiceProps {
  recordMap: ExtendedRecordMap;
  pageType: "faq" | "ask" | "notice";
}

const NotionResult: React.FC<NotionResultProps> = ({ rootPageId, previewImagesEnabled, recordMap }) => {
  const [loadedRecordMap, setLoadedRecordMap] = useState<ExtendedRecordMap | null>(null);

  useEffect(() => {
    setLoadedRecordMap(recordMap);
  }, [recordMap]);

  if (!loadedRecordMap) {
    return null;
  }

  return (
    <>
      <NotionRenderer
        recordMap={loadedRecordMap}
        rootDomain={notionDomain}
        rootPageId={rootPageId}
        fullPage={false}
        previewImages={previewImagesEnabled}
        components={{
          nextLink: Link,
        }}
      />
    </>
  );
};

const Service: React.FC<ServiceProps> = ({ pageType, recordMap }) => {
  const pageInfo: PageInfo = pageInfoMap[pageType] || { title: "", pageId: "" };
  return (
    <>
      <h1>{pageInfo.title}</h1>
      <div>
        <NotionResult recordMap={recordMap} previewImagesEnabled={false} rootDomain={""} rootPageId={pageInfo.pageId} />
      </div>
    </>
  );
};

export default Service;
