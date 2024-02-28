"use Client";
import { signIn, signOut, useSession } from "next-auth/react";
import SignButton from ".";

const KakaoButton = () => {
  const { data: session } = useSession();

  const onClick = async () => {
    if (!session) {
      await signIn("kakao", { redirect: true, callbackUrl: "/loginflow" });
    }
  };
  console.log(session);

  return (
    <div>
      <SignButton type="kakao" action="시작하기" onClick={onClick} />
    </div>
  );
};

export default KakaoButton;
