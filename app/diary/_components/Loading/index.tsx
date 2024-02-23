import Lottie from "react-lottie";
import loadingSpinner from "@/public/animation/loading-spinner-lg.json";
import * as styles from "./style.css";

//페이지 전체를 덮는 로딩 컴포넌트
const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <Lottie width={200} height={200} options={{ loop: true, animationData: loadingSpinner, autoplay: true }} />
    </div>
  );
};

export default Loading;
