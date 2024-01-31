import { useState } from "react";

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModalFunc = () => {
    setIsModalOpen(true);
  };
  const closeModalFunc = () => {
    setIsModalOpen(false);
  };

  return { isModalOpen, openModalFunc, closeModalFunc };
};
