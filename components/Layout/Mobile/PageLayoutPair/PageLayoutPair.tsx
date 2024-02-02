"use client";

import { useRouter } from "next/router";
import FooterNavigationBar from "../FooterNavigationBar/FooterNavigationBar";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import HeaderPetGroup from "../HeaderPetGroup/HeaderPetGroup";

const layoutPair = {
  none: {
    header: null,
    footer: null,
  },
  logo: {
    header: <HeaderPetGroup />,
    footer: <FooterNavigationBar />,
  },
  petGroup: {
    header: <HeaderLogo />,
    footer: <FooterNavigationBar />,
  },
};

const pageHeaderTypes = {
  logo: ["/settings"],
  petGroup: ["/home"],
};

const PageLayoutPair = () => {
  const { pathname } = useRouter();
  if (pageHeaderTypes.logo.includes(pathname)) {
    return layoutPair.logo;
  } else if (pageHeaderTypes.petGroup.includes(pathname)) {
    return layoutPair.petGroup;
  } else {
    return layoutPair.none;
  }
};

export default PageLayoutPair;
