"use client";
import Link from "next/link";
import { ExtendedRecordMap } from "notion-types";
import { NotionRenderer } from "react-notion-x";
import { useEffect, useState } from "react";
import pageInfoMap, { PageInfo } from "@/components/Setting/Service/PageInfo";
import * as styles from "@/components/Setting/Service/style.css";
import CloseIcon from "@/assets/close.svg";
import { useRouter } from "next/navigation";

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
  redirectPath: string;
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
  const pageInfo: PageInfo = pageInfoMap[pageType];
  const router = useRouter();

  return (
    <>
      <header className={styles.titleWrapper}>
        <h1 className={styles.title}>{pageInfo.title}</h1>
        <div className={styles.IconWrapper} onClick={() => router.back()}>
          <CloseIcon className={styles.Icon} alt="close icon" />
        </div>
      </header>
      <div>
        <NotionResult recordMap={recordMap} previewImagesEnabled={false} rootDomain={""} rootPageId={pageInfo.pageId} />
      </div>
    </>
  );
};

export default Service;
