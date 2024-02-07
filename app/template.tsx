"use client";

import { usePathname } from "next/navigation";
import { pagesWithHeader } from "@/constants/pagesWithHeader";
import PcHeader from "@/components/Layout/PcHeader/PcHeader";
import MobileHeaderLogo from "@/components/Layout/MobileHeaderLogo/MobileHeaderLogo";
import MainWrapper from "@/components/Layout/MainWrapper/MainWrapper";
import MobileFooterNavigationBar from "@/components/Layout/MobileFooterNavigationBar/MobileFooterNavigationBar";
import MobileHeaderPetGroup from "@/components/Layout/MobileHeaderPetGroup/MobileHeaderPetGroup";

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
  } else if (pagesWithHeader.petGroup.includes(pathname)) {
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
        {children}
      </>
    );
  }
}
