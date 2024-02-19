"use client";

import { NextPage } from "next";
import * as styles from "./page.css";
import HomePetProfile from "@/app/home/_components/HomePetProfile/HomePetProfile";
import HomeHealthLogPreview from "@/app/home/_components/HomeHealthLogPreview/HomeHealthLogPreview";
import { useQuery } from "@tanstack/react-query";
import { UserType } from "../_types/users/types";
import { getMe } from "../_api/users";
import { redirect } from "next/navigation";
import { getPets } from "../_api/pets";
import { PetType, PetsType } from "../_types/petGroup/types";

const HomePage: NextPage = () => {
  const { data: user } = useQuery<UserType>({
    queryKey: ["me"],
    queryFn: () => getMe(),
  });

  const { data: pets } = useQuery<PetsType>({
    queryKey: ["pets"],
    queryFn: () => getPets(),
    enabled: !!user,
  });

  const currentPet: PetType | null = pets?.data ? pets.data.find((pet) => pet.repStatus === "REPRESENTATIVE") ?? null : null;

  // 통신 완료 후 유저 프로필이 없을 경우
  if (user && !user.nickname) return redirect("/create/user-profile");
  // 통신 완료 후 동물이 하나이 없을 경우
  if (pets && pets.data.length === 0) return redirect("/no-pet-group");
  // 통신 완료 후 메인 동물이 없을 경우
  if (!currentPet) return redirect("/home/select");

  return (
    <main className={styles.container}>
      <HomePetProfile />
      <HomeHealthLogPreview />
    </main>
  );
};
export default HomePage;
