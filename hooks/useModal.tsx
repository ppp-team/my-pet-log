import { useState } from "react";

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState("");

  const openModalFunc = (type: string) => {
    setIsModalOpen(type);
  };
  const closeModalFunc = () => {
    setIsModalOpen("");
  };

  return { isModalOpen, openModalFunc, closeModalFunc };
};
