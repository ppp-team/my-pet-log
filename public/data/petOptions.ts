import birdData from "./bird-type.json";
import catData from "./cat-type.json";
import dogData from "./dog-type.json";
import fishData from "./fish-type.json";
import insectData from "./insect-type.json";
import rabbitData from "./rabbit-type.json";
import ratData from "./rat-type.json";
import reptileData from "./reptile-type.json";

interface PetOptionsProps {
  [key: string]: string[];
}

export const petOptions: PetOptionsProps = {
  강아지: dogData,
  고양이: catData,
  물고기: fishData,
  설치류: ratData,
  새: birdData,
  토끼: rabbitData,
  파충류: reptileData,
  곤충: insectData,
  기타: ["기타"],
};
