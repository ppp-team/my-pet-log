"use client";
import { getPets } from "@/app/_api/pets";
import * as styles from "@/app/_components/SelectPet/style.css";
import { PetType, PetsType } from "@/app/_types/petGroup/types";
import calculateAge from "@/app/_utils/calculateAge";
import AddIcon from "@/public/icons/add.svg?url";
import NoPetProfileImage from "@/public/images/pet-profile-default.svg?url";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Pet = ({ pet }: { pet: PetType }) => {
  const router = useRouter();

  return (
    <div
      className={styles.container}
      onClick={() => {
        router.push("/settings");
      }}
    >
      <div className={styles.profile} style={{ backgroundImage: `url(${pet.petImageUrl ?? NoPetProfileImage}` }} />

      <div className={styles.text}>
        <h3 style={{ fontSize: "1.6rem", fontWeight: "700" }}>{pet.name}</h3>
        <p style={{ fontSize: "1.3rem", fontWeight: "500" }}>
          {pet.breed} • {pet.gender === "MALE" ? "남아" : "여아"} • {calculateAge(pet.birth)}
        </p>
      </div>
    </div>
  );
};
const SelectPet = ({ type, data }: { type: string; data: PetsType | null }) => {
  const { data: pets } = useQuery<PetsType | null>({ queryKey: ["pets"], queryFn: () => getPets(), initialData: data });

  return (
    <>
      <div className={styles.root}>
        <div style={{ display: "flex", flexDirection: "column", gap: "2.2rem" }}>
          <h3 className={styles.h3}>
            오늘은 누구의
            <br />
            {type}를 작성해볼까요?
          </h3>
          <p className={styles.p}>펫메이트로 초대받으셨나요?</p>
        </div>

        <div className={styles.petList}>
          {pets?.data.map((pet) => pet && <Pet pet={pet} key={pet.petId} />)}
          <Link href={"/settings/pet-register"} className={styles.container} style={{ justifyContent: "center" }}>
            <div className={styles.addButton}>
              <Image src={AddIcon} alt="add icon" width={16} height={16} className={styles.addIcon} />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SelectPet;
