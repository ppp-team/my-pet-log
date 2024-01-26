import * as styles from "@/components/SelectPet/style.css";
import { currentPetAtom } from "@/states/atom";
import { useAtom } from "jotai";
import Image from "next/image";
import PlusButtonIcon from "@/assets/plusbutton.svg";

const PET_DATA = [
  { id: 1, name: "해피", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Golde33443.jpg/560px-Golde33443.jpg", gender: "남아", type: "말티즈" },
  ,
  { id: 2, name: "은행", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Cat_and_mouse.jpg/340px-Cat_and_mouse.jpg", gender: "남아", type: "렉돌" },
  {
    id: 3,
    name: "나나",
    image:
      "https://us.123rf.com/450wm/lodimup/lodimup1507/lodimup150700064/42518873-%EC%95%84%EA%B8%B0-%EB%A1%AD-%EC%9D%B4%EC%96%B4-%ED%86%A0%EB%81%BC-%ED%9D%B0%EC%83%89%EC%97%90-%EA%B3%A0%EB%A6%BD.jpg",
    gender: "여아",
    type: "롭이어",
  },
];
interface PetData {
  id: number;
  name: string;
  image: string;
  gender: string;
  type: string;
}
const Pet = ({ pet }: { pet: PetData }) => {
  const [currentPet, setCurrentPet] = useAtom(currentPetAtom);

  return (
    <div className={styles.container} onClick={() => setCurrentPet("해피")}>
      {pet?.image && (
        <div
          className={styles.profile}
          style={{
            backgroundImage: `url(${pet.image})`,
          }}
        />
      )}
      <div>
        <h4>{pet.name}</h4>
        <p>
          {pet.type} {pet.gender}
        </p>
      </div>
    </div>
  );
};

const SelectPet = ({ type }: { type: string }) => {
  return (
    <>
      <div className={styles.root}>
        <h3 style={{ textAlign: "center" }}>
          오늘은 누구의
          <br />
          {type}를 작성해볼까요?
        </h3>
        <span>공동 집사로 초대받으셨나요?</span>
        <div className={styles.petList}>
          {PET_DATA.map((pet) => pet && <Pet pet={pet} key={pet.id} />)}
          <div className={styles.plusButton}>
            <Image src={PlusButtonIcon} alt="plus button" style={{ color: "blue" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectPet;
