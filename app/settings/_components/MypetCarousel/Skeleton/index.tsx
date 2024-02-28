import { container, skeleton, skeletonShine } from "./style.css";

const Skeleton = () => (
  <div className={container}>
    <div className={skeleton}>
      <div className={skeletonShine}></div>
    </div>
  </div>
);

export default Skeleton;
