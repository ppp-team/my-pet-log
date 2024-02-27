import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NotionRenderer } from "react-notion-x";
import { ExtendedRecordMap } from "notion-types";

interface NotionResultProps {
  rootPageId: string;
  rootDomain: string;
  previewImagesEnabled: boolean;
  recordMap: ExtendedRecordMap;
}

const notionDomain = "https://hissing-route-336.notion.site";

const NotionPage: React.FC<NotionResultProps> = ({ rootPageId, previewImagesEnabled, recordMap }) => {
  const [loadedRecordMap, setLoadedRecordMap] = useState<ExtendedRecordMap | null>(null);
  const Code = dynamic(() => import("react-notion-x/build/third-party/code").then((m) => m.Code));
  const Collection = dynamic(() => import("react-notion-x/build/third-party/collection").then((m) => m.Collection));
  const Equation = dynamic(() => import("react-notion-x/build/third-party/equation").then((m) => m.Equation));
  const Modal = dynamic(() => import("react-notion-x/build/third-party/modal").then((m) => m.Modal), {
    ssr: false,
  });

  useEffect(() => {
    setLoadedRecordMap(recordMap);
  }, [recordMap]);

  if (!loadedRecordMap) {
    return null;
  }

  return (
    <>
      <NotionRenderer
        disableHeader
        recordMap={loadedRecordMap}
        rootDomain={notionDomain}
        rootPageId={rootPageId}
        fullPage={true}
        darkMode={false}
        previewImages={previewImagesEnabled}
        components={{
          nextLink: Link,
          nextImage: Image,
          Code,
          Collection,
          Equation,
          Modal,
        }}
      />
    </>
  );
};

export default NotionPage;
