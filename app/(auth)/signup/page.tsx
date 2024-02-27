import * as styles from "./style.css";
import SignUpForm from "@/app/(auth)/_components/SignForm/SignupForm";
import Link from "next/link";

const page = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>이메일로 회원가입</p>
      <SignUpForm />

      <p className={styles.p}>
        이미 회원이신가요?
        <Link className={styles.link} href="/login">
          로그인 하기
        </Link>
      </p>
    </div>
  );
};

export default page;
