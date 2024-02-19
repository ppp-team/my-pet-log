"use client";

import { usePathname } from "next/navigation";
import { pagesWithHeader } from "@/app/_constants/pagesWithHeader";
import PcHeader from "./PcHeader/PcHeader";
import MobileHeaderLogo from "./MobileHeaderLogo/MobileHeaderLogo";
import MainWrapper from "./MainWrapper/MainWrapper";
import MobileFooterNavigationBar from "./MobileFooterNavigationBar/MobileFooterNavigationBar";
import MobileHeaderPetGroup from "./MobileHeaderPetGroup/MobileHeaderPetGroup";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
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
};

export default AppLayout;
