"use client";

import DiaryList from "@/components/Diary/DiaryList";
import SelectPet from "@/components/@common/SelectPet";
import { currentPetAtom } from "@/states/atom";
import { useAtom } from "jotai";

const DiaryPgae = () => {
  const [currentPet, setCurrentPet] = useAtom(currentPetAtom); //추후에 localStorage로 바꿔야할듯

  if (!currentPet) return <SelectPet type="육아일기" />;
  return <DiaryList />;
};

export default DiaryPgae;
