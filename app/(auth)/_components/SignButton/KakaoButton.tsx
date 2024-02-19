"use Client";
import { signIn, signOut, useSession } from "next-auth/react";
import SignButton from ".";

const KakaoButton = () => {
  const { data: session } = useSession();

  const onClick = async () => {
    if (session) {
      // 추후 로그아웃 기능 삭제 예정
      await signOut();
    } else {
      await signIn("kakao", { redirect: true, callbackUrl: "/loginflow" });
    }
  };
  console.log(session);

  return (
    <div>
      <SignButton type="kakao" action="로그인" onClick={onClick} />
    </div>
  );
};

export default KakaoButton;
