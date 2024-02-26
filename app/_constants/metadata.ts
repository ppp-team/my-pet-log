import logoImageUrl from "@/public/icons/logo.svg?url";
import { OpenGraphType } from "next/dist/lib/metadata/types/opengraph-types";
import { BASE_URL } from "@/app/_constants/index";

export const METADATA = {
  title: "마이펫로그",
  description: "반려동물의 일상을 기록하고 공유하세요",
  imageUrl: logoImageUrl,
  url: BASE_URL,
  locale: "ko_KR",
  type: "website" as OpenGraphType,
  creator: "PPP",
  generator: "Next.js",
  publisher: "PPP",
  applicationName: "마이펫로그",
  keywords: ["마이펫로그", "PPP", "코드잇", "CodeIt"],
  googleSiteVerificationVerification: `${process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION}`,
  naverSiteVerificationVerification: `${process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION}`,
};
