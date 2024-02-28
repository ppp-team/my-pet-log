import AuthContext from "@/app/(auth)/_components/AuthContext";
import QueryProvider from "@/app/_components/QueryProvider";
import "@/styles/global.css";
import "@/styles/colors.css";
import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FontLayout from "@/fonts/layout";
import { METADATA } from "./_constants/metadata";

export const metadata: Metadata = {
  title: METADATA.title,
  description: METADATA.description,
  metadataBase: new URL(METADATA.url),
  openGraph: {
    title: METADATA.title,
    description: METADATA.description,
    url: METADATA.url,
    siteName: METADATA.title,
    images: [
      {
        url: METADATA.imageUrl,
        width: 800,
        height: 600,
      },
    ],
    locale: METADATA.locale,
    type: METADATA.type,
  },
  creator: METADATA.creator,
  generator: METADATA.generator,
  publisher: METADATA.publisher,
  applicationName: METADATA.publisher,
  keywords: METADATA.keywords,
  icons: {
    icon: METADATA.imageUrl,
  },
  verification: {
    google: METADATA.googleSiteVerificationVerification,
    other: {
      naverSiteVerification: METADATA.naverSiteVerificationVerification,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <FontLayout>
        <QueryProvider>
          <AuthContext>
            {children}
            <ToastContainer />
            <div id="portal"></div>
          </AuthContext>
        </QueryProvider>
      </FontLayout>
    </html>
  );
}
