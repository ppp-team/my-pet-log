/**
 * url로 직접 접근 시 루트 경로로 리다이렉션
 */

import { NextPage } from "next";
import { redirect } from "next/navigation";

const ParticipatePetGroupPage: NextPage = () => {
  redirect("/");
};

export default ParticipatePetGroupPage;
