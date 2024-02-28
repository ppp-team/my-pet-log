import { container } from "./style.css";
import SpinnerAnimation from "@/public/animation/Spinner-1s-54px.svg";

const Spinner = () => {
  return (
    <div className={container}>
      <SpinnerAnimation />
    </div>
  );
};

export default Spinner;
