export interface PageInfo {
  title: string;
  pageId: string;
}

const pageInfoMap: Record<string, PageInfo> = {
  faq: {
    title: "FAQ",
    pageId: "Q-A-4aea4500929845c0a961ae2ba0f49688",
  },
  ask: {
    title: "1:1 문의하기",
    pageId: "1-1-491e9e4975da4693b83629e47422ed95",
  },
  notice: {
    title: "공지사항",
    pageId: "6459e17f8bf54d85a970e3f8d2bee4c8",
  },
};

export default pageInfoMap;
