"use client";

import Modal from "@/app/_components/Modal";
import { container, memberlist, profileWrapper, profileImg, nickname, button } from "@/app/settings/(petmate)/petmate.css";
import { useModal } from "@/app/_hooks/useModal";
import NoProfileImage from "@/public/images/person-profile-default.svg?url";
import MemberList from "@/app/settings/_components/MemberList";
import { useRouter } from "next/navigation";
import { GuardiansType } from "@/app/_types/guardians/types";
import { useQuery } from "@tanstack/react-query";
import { getGuardians } from "@/app/_api/guardians";
import { UserType } from "@/app/_types/user/types";
import { getMe } from "@/app/_api/users";

const petId = 6; //소희님네 동물

const Page = () => {
  const router = useRouter();
  const { isModalOpen: isModalOpen1, openModalFunc: openModal1, closeModalFunc: closeModal1 } = useModal();
  const { isModalOpen: isModalOpen2, openModalFunc: openModal2, closeModalFunc: closeModal2 } = useModal();

  const { data: user } = useQuery<UserType>({
    queryKey: ["me"],
    queryFn: () => getMe(),
  });
  const { data } = useQuery<GuardiansType>({
    queryKey: ["petmate", petId],
    queryFn: () => getGuardians(petId),
  });

  const petmate = data?.data ?? [];
  // mockData에서 현재 사용자의 데이터를 찾음
  const currentUserData = petmate.find((member) => member.nickname === user?.nickname);

  // 현재 사용자가 리더인지 확인
  const isLeader = currentUserData ? currentUserData.guardianRole === "LEADER" : false;

  // 현재 사용자를 제외한 멤버들만 필터링
  const members = petmate.filter((member) => member.nickname !== user?.nickname);

  // 리더가 탈퇴하기 버튼 누를 시
  const handleLeaderConfirm = () => {
    closeModal1();

    router.push("/settings/ask");
  };

  //리더가 아닌 자신이 탈퇴하기
  const handleMemberConfirm = () => {
    closeModal2();
    //탈퇴 로직
  };

  return (
    <main className={container}>
      <section className={memberlist}>
        <div className={profileWrapper}>
          <div className={profileImg} style={{ backgroundImage: `url(${user?.profilePath ?? NoProfileImage})` }} />
          <p className={nickname}>{user?.nickname} (나)</p>
        </div>
        <button className={button} onClick={() => (isLeader ? openModal1() : openModal2())}>
          탈퇴하기
        </button>
      </section>
      {isModalOpen1 && <Modal text="그룹 생성자의 경우 탈퇴는 관리자에게 문의해주세요." buttonText="1:1 문의" onClick={handleLeaderConfirm} onClose={closeModal1} />}
      {isModalOpen2 && <Modal text="정말 탈퇴하시겠습니까?" buttonText="확인" onClick={handleMemberConfirm} onClose={closeModal2} />}

      <MemberList members={members} isLeader={isLeader} />
    </main>
  );
};

export default Page;
