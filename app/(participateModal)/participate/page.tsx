/**
 * url로 직접 접근 시 루트 경로로 리다이렉션
 */

import ParticipatePetGroupModal from "@/components/ParticipatePetGroupModal/ParticipatePetGroupModal";
import { NextPage } from "next";
import { redirect } from "next/navigation";

const ParticipatePetGroupPage: NextPage = () => {
  // redirect("/");
  return <ParticipatePetGroupModal />;
};

export default ParticipatePetGroupPage;
