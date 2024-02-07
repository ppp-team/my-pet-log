import AddIcon from "@/assets/add.svg?url";
import * as styles from "@/components/@common/SelectPet/style.css";
import { currentPetAtom } from "@/states/atom";
import { useRouter } from "next/navigation";
import NoPetProfileImage from "@/assets/images/pet-profile-default.svg?url";
import { useAtom } from "jotai";
import Image from "next/image";

const PET_DATA = [
  {
    id: 1,
    name: "해피",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Golde33443.jpg/560px-Golde33443.jpg",
    gender: "남아",
    type: "말티즈",
    age: "11년 2개월",
  },
  ,
  {
    id: 2,
    name: "은행",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Cat_and_mouse.jpg/340px-Cat_and_mouse.jpg",
    gender: "남아",
    type: "렉돌",
    age: "6년 5개월",
  },
  {
    id: 3,
    name: "나나",
    image: "",
    gender: "여아",
    type: "롭이어",
    age: "2개월",
  },
];
interface PetData {
  id: number;
  name: string;
  image: string;
  gender: string;
  type: string;
  age: string;
}
const Pet = ({ pet }: { pet: PetData }) => {
  const [currentPet, setCurrentPet] = useAtom(currentPetAtom);
  const router = useRouter();

  return (
    <div
      className={styles.container}
      onClick={() => {
        setCurrentPet("해피");
        router.push("/diary");
      }}
    >
      {pet?.image ? (
        <div className={styles.profile} style={{ backgroundImage: `url(${pet.image})` }} />
      ) : (
        <div className={styles.profile} style={{ backgroundImage: `url(${NoPetProfileImage})` }} />
      )}
      <div className={styles.text}>
        <h3 style={{ fontSize: "1.6rem", fontWeight: "700" }}>{pet.name}</h3>
        <p style={{ fontSize: "1.3rem", fontWeight: "500" }}>
          {pet.type} • {pet.gender} • {pet.age}
        </p>
      </div>
    </div>
  );
};

const SelectPet = ({ type }: { type: string }) => {
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
          {PET_DATA.map((pet) => pet && <Pet pet={pet} key={pet.id} />)}
          <div className={styles.container} style={{ justifyContent: "center" }}>
            <div className={styles.addButton}>
              <Image src={AddIcon} alt="add icon" width={16} height={16} style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectPet;
