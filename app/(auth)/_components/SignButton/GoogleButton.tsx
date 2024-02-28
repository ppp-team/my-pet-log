import { signIn, useSession } from "next-auth/react"; // signOut import 삭제
import SignButton from ".";

const GoogleButton = () => {
  const { data: session } = useSession();

  const onClick = async () => {
    if (!session) {
      await signIn("google", { redirect: true, callbackUrl: "/loginflow" });
    }
  };
  console.log(session);

  return (
    <div>
      <SignButton type="google" action="시작하기" onClick={onClick} />
    </div>
  );
};

export default GoogleButton;
