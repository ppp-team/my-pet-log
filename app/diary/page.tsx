"use client";

import DiaryList from "@/components/Diary/DiaryList";
import SelectPet from "@/components/SelectPet";
import { currentPetAtom } from "@/states/atom";
import { useAtom } from "jotai";

const DiaryPgae = () => {
  const [currentPet, setCurrentPet] = useAtom(currentPetAtom);

  if (!currentPet) return <SelectPet type="육아일기" />;
  return <DiaryList />;
};

export default DiaryPgae;
