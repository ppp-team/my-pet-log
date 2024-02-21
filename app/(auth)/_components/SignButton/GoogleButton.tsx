"use Client";
import { signIn, signOut, useSession } from "next-auth/react";
import SignButton from ".";

const GoogleButton = () => {
  const { data: session } = useSession();

  const onClick = async () => {
    if (session) {
      // 추후 로그아웃 기능 삭제 예정
      await signOut();
    } else {
      await signIn("google", { redirect: true, callbackUrl: "/loginflow" });
    }
  };
  console.log(session);

  return (
    <div>
      <SignButton type="google" action="로그인" onClick={onClick} />
    </div>
  );
};

export default GoogleButton;
