"use client";
import { useModal } from "@/app/_hooks/useModal";
import Modal from "@/app/_components/Modal";
import { container, memberlist, profileWrapper, profileImg, nickname, button } from "./style.css";
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { getImagePath } from "@/app/_utils/getPetImagePath";
import { showToast } from "@/app/_components/Toast";
import { getSubscribedPet, postPetSubscriptions } from "@/app/_api/subscription";
import { SubscribedPetType } from "@/app/_types/subscriptions/types";
import EmptySubscribedPet from "@/app/settings/_components/EmptySubscribedPet";

const SubscriptionList = () => {
  const queryClient = useQueryClient();
  const { data: accountsData } = useQuery<SubscribedPetType[]>({
    queryKey: ["subscribedPet"],
    queryFn: () => getSubscribedPet(),
  });

  const { isModalOpen, openModalFunc, closeModalFunc } = useModal();
  const [selectedSubscriptionPetId, setSelectedSubscriptionPetId] = useState<number | null>(null);
  const [selectedSubscriptionPetName, setSelectedSubscriptionPetName] = useState<string>("");

  const cancelSubscriptionMutation = useMutation({
    mutationFn: (id: number) => postPetSubscriptions(id),

    onSuccess: () => {
      showToast("구독이 취소되었습니다", true);
      queryClient.invalidateQueries({ queryKey: ["subscribedPet"] });
    },
  });

  // 구독 취소 버튼 누를 시
  const handleConfirm = () => {
    closeModalFunc();

    if (selectedSubscriptionPetId !== null) {
      cancelSubscriptionMutation.mutate(selectedSubscriptionPetId);
    }
  };

  //구독중인 계정이 0개일 때
  if (accountsData?.length === 0) return <EmptySubscribedPet />;

  return (
    <>
      <main className={container}>
        {accountsData?.map((member) => (
          <section key={member.id} className={memberlist}>
            <div className={profileWrapper}>
              <Image className={profileImg} src={getImagePath(member.profilePath)} alt="profile icon" width={40} height={40} />
              <p className={nickname}>{member.name}</p>
            </div>
            <button
              className={button}
              onClick={() => {
                setSelectedSubscriptionPetId(member.id);
                setSelectedSubscriptionPetName(member.name);
                openModalFunc();
              }}
            >
              구독취소
            </button>
          </section>
        ))}
        {isModalOpen && <Modal text={`정말 ${selectedSubscriptionPetName}님의 구독을\n취소하시겠습니까?`} buttonText="확인" onClick={handleConfirm} onClose={closeModalFunc} />}
      </main>
    </>
  );
};

export default SubscriptionList;
