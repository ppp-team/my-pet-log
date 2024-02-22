"use client";

import { usePathname } from "next/navigation";
import { pagesWithHeader } from "@/app/_constants/pagesWithHeader";
import PcHeader from "@/app/_components/Layout/PcHeader/PcHeader";
import MobileHeaderLogo from "@/app/_components/Layout/MobileHeaderLogo/MobileHeaderLogo";
import MainWrapper from "@/app/_components/Layout/MainWrapper/MainWrapper";
import MobileFooterNavigationBar from "@/app/_components/Layout/MobileFooterNavigationBar/MobileFooterNavigationBar";
import MobileHeaderPetGroup from "@/app/_components/Layout/MobileHeaderPetGroup/MobileHeaderPetGroup";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (pagesWithHeader.logo.includes(pathname)) {
    return (
      <>
        <PcHeader />
        <MobileHeaderLogo />
        <MainWrapper>{children}</MainWrapper>
        <MobileFooterNavigationBar />
      </>
    );
  } else if (pagesWithHeader.petGroup.includes(pathname) || pathname.startsWith("/diary/detail")) {
    return (
      <>
        <PcHeader />
        <MobileHeaderPetGroup />
        <MainWrapper>{children}</MainWrapper>
        <MobileFooterNavigationBar />
      </>
    );
  } else {
    return (
      <>
        <PcHeader />
        <MainWrapper>{children}</MainWrapper>
      </>
    );
  }
}
