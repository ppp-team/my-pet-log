import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import mockData from "./mockdata.json";
import { title, petadd, container } from "./style.css";
import "./swiper.css";
import MyPetInfo from "@/components/Setting/MyPetInfo";
import Image from "next/image";
import AddIcon from "@/assets/add.svg?url";

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
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {mockData.data.map((petInfo) => (
          <SwiperSlide key={petInfo.petId}>
            <div className={container}>
              <MyPetInfo petInfo={petInfo} styles={myPetInfoStyles} />
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
