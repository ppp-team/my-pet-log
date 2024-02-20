import { container, title, description } from "./style.css";

const EmptyMyInvitation = () => {
  return (
    <section className={container}>
      <p className={title}>초대 받은 내역이 없습니다.</p>
      <p className={description}>해당 프로필로 온 초대 내역이 없습니다. 새로운 펫메이트를 초대해볼까요?</p>
    </section>
  );
};

export default EmptyMyInvitation;
