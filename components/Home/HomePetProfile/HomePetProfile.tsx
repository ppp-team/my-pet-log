import Image from "next/image";
import sampleImageSrc from "@/assets/edit.svg?url";

interface HomePetProfileProps {
  imageSrc?: string;
}

const HomePetProfile = ({ imageSrc }: HomePetProfileProps) => {
  return (
    <div>
      <Image src={sampleImageSrc} alt="동물 프로필 이미지" width={30} height={30} />
      <p>{"동물 이름"}</p>
      <span>{"말티즈"}</span> · <span>{"여"}</span> · <span>{"3년 6개월"}</span>
    </div>
  );
};

export default HomePetProfile;
