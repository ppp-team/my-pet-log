"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ExtendedRecordMap } from "notion-types";
import { NotionRenderer } from "react-notion-x";

interface NotionPageProps {
  recordMap: ExtendedRecordMap;
  previewImagesEnabled: boolean;
  rootPageId: string;
  rootDomain: string;
}

interface ServiceProps {
  recordMap: ExtendedRecordMap;
  rootDomain: string;
  previewImagesEnabled: boolean;
}

export const NotionResult = ({ recordMap, previewImagesEnabled, rootPageId, rootDomain }: NotionPageProps) => {
  if (!recordMap) {
    return null;
  }

  return (
    <>
      <NotionRenderer
        recordMap={recordMap}
        rootDomain={rootDomain}
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

const Service: React.FC<ServiceProps> = ({ recordMap, pageId }) => {
  return (
    <>
      <h1>FQA</h1>
      <div>
        <NotionResult recordMap={recordMap} previewImagesEnabled={false} rootPageId={""} rootDomain={""} />
      </div>
      <div>
        <button>카카오톡 문의</button>
        <button>이메일로 문의</button>
      </div>
      <p>현재 페이지의 노션 주소: {`https://hissing-route-336.notion.site/${pageId}`}</p>
    </>
  );
};

export default Service;
