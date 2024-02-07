import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import mockData from "./mockdata.json";
import { title, petadd, container, petButton, petMateButton, petInfoWrapper } from "./style.css";
import "./swiper.css";
import MyPetInfo from "@/components/Setting/MyPetInfo";
import Image from "next/image";
import AddIcon from "@/assets/add.svg?url";
import Link from "next/link";

const MyPetCarousel = () => {
  const myPetInfoStyles = {
    profileBorderColor: "var(--White)",
    nameTextColor: "var(--White)",
    breedTextColor: "var(--White)",
  };

  return (
    <div>
      <div className={title}>마이펫 관리하기</div>
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {mockData.data.map((petInfo) => (
          <SwiperSlide key={petInfo.petId}>
            <div className={container}>
              <div className={petInfoWrapper}>
                <MyPetInfo petInfo={petInfo} styles={myPetInfoStyles} />
              </div>
              <Link href="" className={petButton}>
                마이펫 정보 수정
              </Link>
              <Link href="settings/member" className={petMateButton}>
                펫메이트 초대 및 그룹 관리
              </Link>
            </div>
          </SwiperSlide>
        ))}
        <SwiperSlide className={petadd}>
          <Image src={AddIcon} alt="add icon" width={36} height={36} />
          <span>반려동물 추가</span>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MyPetCarousel;
