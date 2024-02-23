"use client";

import Modal from "@/app/_components/Modal";
import { useModal } from "@/app/_hooks/useModal";
import { useRouter } from "next/navigation";
import { postLogout } from "@/app/_api/auth";
import { useMutation } from "@tanstack/react-query";

const Logout = () => {
  const { isModalOpen, openModalFunc, closeModalFunc } = useModal();
  const router = useRouter();

  const logoutMutation = useMutation({
    mutationFn: () => postLogout(),
    onSuccess: () => {
      localStorage.removeItem("petId");
      router.push("/login");
    },
  });

  const handleConfirm = async () => {
    logoutMutation.mutate();
  };

  return (
    <>
      <span
        style={{
          color: "var(--GrayC2)",
          fontSize: "1.4rem",
          fontWeight: "600",
          cursor: "pointer",
        }}
        onClick={openModalFunc}
      >
        로그아웃
      </span>
      {isModalOpen && <Modal text="로그아웃 하시겠습니까?" buttonText="확인" onClick={handleConfirm} onClose={closeModalFunc} />}
    </>
  );
};

export default Logout;
