"use client";

import Modal from "@/app/_components/Modal";
import { container, memberlist, profileWrapper, profileImg, nickname, button } from "@/app/settings/(petmate)/petmate.css";
import { useModal } from "@/app/_hooks/useModal";
import MemberList from "@/app/settings/_components/MemberList";
import { useRouter } from "next/navigation";
import { GuardiansType } from "@/app/_types/guardians/types";
import { useQuery, useMutation } from "@tanstack/react-query";
import { getGuardians, deleteGuardians } from "@/app/_api/guardians";
import { UserType } from "@/app/_types/user/types";
import { getMe } from "@/app/_api/users";
import { getImagePath } from "@/app/_utils/getPersonImagePath";
import Image from "next/image";

const Member = ({ petId }: { petId: number }) => {
  const { data: user } = useQuery<UserType>({
    queryKey: ["me"],
    queryFn: () => getMe(),
  });
  const { data } = useQuery<GuardiansType>({
    queryKey: ["petmate", petId],
    queryFn: () => getGuardians(),
  });

  const router = useRouter();
  const { isModalOpen: isModalOpen1, openModalFunc: openModal1, closeModalFunc: closeModal1 } = useModal();
  const { isModalOpen: isModalOpen2, openModalFunc: openModal2, closeModalFunc: closeModal2 } = useModal();

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

  const deleteGuardianMutation = useMutation({
    mutationFn: (guardianId: number) => deleteGuardians(guardianId),

    onSuccess: () => {
      router.push("/home");
    },
  });

  //리더가 아닌 자신이 탈퇴하기
  const handleMemberConfirm = () => {
    closeModal2();

    if (currentUserData?.guardianId) {
      deleteGuardianMutation.mutate(currentUserData.guardianId);
    }
  };

  if (!user) return <></>;
  return (
    <main className={container}>
      <section className={memberlist}>
        <div className={profileWrapper}>
          <Image className={profileImg} src={getImagePath(user.profilePath)} alt="profile icon" width={40} height={40} />
          <p className={nickname}>{user?.nickname} (나)</p>
        </div>
        <button className={button} onClick={() => (isLeader ? openModal1() : openModal2())}>
          탈퇴하기
        </button>
      </section>
      {isModalOpen1 && <Modal text="그룹 생성자의 경우 탈퇴는 관리자에게 문의해주세요." buttonText="1:1 문의" onClick={handleLeaderConfirm} onClose={closeModal1} />}
      {isModalOpen2 && <Modal text="정말 탈퇴하시겠습니까?" buttonText="확인" onClick={handleMemberConfirm} onClose={closeModal2} />}

      <MemberList petId={petId} members={members} isLeader={isLeader} />
    </main>
  );
};

export default Member;
