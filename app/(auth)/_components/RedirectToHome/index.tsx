"use client";
import { postSocial } from "@/app/_api/auth"; // import 경로 수정
import { useAtom } from "jotai";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import { userAccessTokenAtom, userRefreshTokenAtom, isLoggedInAtom } from "@/app/_states/atom";

export default function RedirectToHome() {
  const router = useRouter();

  const { data: session } = useSession();

  const [userAccessToken, setUserAccessToken] = useAtom(userAccessTokenAtom);
  const [userRefreshToken, setUserRefreshToken] = useAtom(userRefreshTokenAtom);
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);

  const socialEmail = session?.user?.email;

  const handleUserInfo = useCallback(async () => {
    if (!session) return;

    try {
      const { accessToken, refreshToken } = (await postSocial({ email: socialEmail })) as any;
      setUserAccessToken(accessToken);
      setUserRefreshToken(refreshToken);
      setIsLoggedIn(true);
    } catch (error) {
      console.error(error);
      setIsLoggedIn(false);
    }
  }, [session, setIsLoggedIn, setUserAccessToken, setUserRefreshToken, socialEmail]);

  useEffect(() => {
    handleUserInfo();
  }, [session, handleUserInfo]);

  return null;
}
