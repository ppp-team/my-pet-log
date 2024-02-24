"use client";

import Modal from "@/app/_components/Modal";
import { useModal } from "@/app/_hooks/useModal";
import { useRouter } from "next/navigation";
import { postLogout } from "@/app/_api/auth";
import { useMutation } from "@tanstack/react-query";
import { text } from "./style.css";
import Loading from "@/app/diary/_components/Loading";

const Logout = () => {
  const { isModalOpen, openModalFunc, closeModalFunc } = useModal();
  const router = useRouter();

  const {
    mutate: logoutMutation,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: () => postLogout(),
    onSuccess: () => {
      localStorage.removeItem("petId");
      router.push("/login");
    },
  });

  const handleConfirm = async () => {
    closeModalFunc();
    logoutMutation();
  };

  return (
    <>
      <span className={text} onClick={openModalFunc}>
        로그아웃
      </span>
      {isModalOpen && <Modal text="로그아웃 하시겠습니까?" buttonText="확인" onClick={handleConfirm} onClose={closeModalFunc} />}
      {(isPending || isSuccess) && <Loading />}
    </>
  );
};

export default Logout;
