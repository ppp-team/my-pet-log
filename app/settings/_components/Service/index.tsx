"use client";

import pageInfoMap, { PageInfo } from "@/app/settings/_components/Service/PageInfo";
import * as styles from "@/app/settings/_components/Service/style.css";
import CloseIcon from "@/public/icons/close.svg";
import "katex/dist/katex.min.css";
import { useRouter } from "next/navigation";
import { ExtendedRecordMap } from "notion-types";
import "prismjs/themes/prism-tomorrow.css";
import * as React from "react";
import "react-notion-x/src/styles.css";
import NotionPage from "./_components/NotionPage";

interface ServiceProps {
  recordMap: ExtendedRecordMap;
  pageType: "faq" | "ask" | "notice";
}

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
      <main className={styles.mainWrapper}>
        <NotionPage recordMap={recordMap} previewImagesEnabled={false} rootDomain={""} rootPageId={pageInfo.pageId} />
      </main>
    </>
  );
};

export default Service;
