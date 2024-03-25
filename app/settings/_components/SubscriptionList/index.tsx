"use client";
import { useModal } from "@/app/_hooks/useModal";
import Modal from "@/app/_components/Modal";
import { container, memberlist, profileWrapper, profileImg, nickname, button } from "./style.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { getImagePath } from "@/app/_utils/getPetImagePath";
import { showToast } from "@/app/_components/Toast";
import { getSubscribedPet } from "@/app/_api/subscription";
import { SubscribedPetType } from "@/app/_types/subscriptions/types";
import EmptySubscribedPet from "@/app/settings/_components/EmptySubscribedPet";

// const mockSubscriptionList = [
//   { petId: 46, name: "나는짹짹", profilePath: "PET/2024-02-18/b66403bdc75143cdb63d5d74b7faf6c120240218165405674.jpg" },
//   { petId: 47, name: "나는앵무", profilePath: "PET/2024-02-18/1be783fb8c9f4ea59648294d53fe486e20240218173225597.jpg" },
// ];

const SubscriptionList = () => {
  const queryClient = useQueryClient();
  const { data: accountsData } = useQuery<SubscribedPetType[]>({
    queryKey: ["subscribedPet"],
    queryFn: () => getSubscribedPet(),
  });

  const router = useRouter();
  const { isModalOpen, openModalFunc, closeModalFunc } = useModal();
  const [selectedSubscriptionPetId, setSelectedSubscriptionPetId] = useState<string>("");
  const [selectedSubscriptionPetName, setSelectedSubscriptionPetName] = useState<string>("");

  // const cancelSubscriptionMutation = useMutation({
  //   mutationFn: (subscriptionPetId: number) => cancelSubscriptionPet(subscriptionPetId),

  //   onSuccess: () => {
  //     showToast("구독이 취소되었습니다", true);
  //     queryClient.invalidateQueries({ queryKey: ["subscription"] });
  //   },
  // });

  // 구독 취소 버튼 누를 시
  const handleConfirm = () => {
    closeModalFunc();

    if (selectedSubscriptionPetId !== null) {
      console.log("구독취소된다능");
      // cancelSubscriptionMutation.mutate(selectedSubscriptionPetId);
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
