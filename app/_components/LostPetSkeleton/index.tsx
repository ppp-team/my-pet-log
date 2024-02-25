import { container, skeleton, skeletonShine } from "./style.css";

const LostPetSkeleton = () => (
  <div className={container}>
    <div className={skeleton}>
      <div className={skeletonShine}>
        <p>길 잃은 동물 정보 로딩중...🐶</p>
      </div>
    </div>
  </div>
);

export default LostPetSkeleton;
