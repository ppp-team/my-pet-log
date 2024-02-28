import { container, profile, email, nickname, checkRightIcon } from "./style.css";
import CheckRigntIcon from "@/public/icons/chevron-right.svg";

const Skeleton = () => (
  <section className={container}>
    <div className={profile} />
    <div>
      <div className={nickname} />
      <div className={email} />
    </div>
    <CheckRigntIcon className={checkRightIcon} width={22} height={22} />
  </section>
);

export default Skeleton;
