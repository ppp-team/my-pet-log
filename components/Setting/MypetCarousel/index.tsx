import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "@/components/Setting/MypetCarousel/style.css";
import { Pagination, Autoplay } from "swiper/modules";
import "@/styles/global.css";
import mockData from "./mockdata.json";
import * as styles from "./style.css";
import "./swiper.css";
import MyPetInfo from "@/components/Setting/MyPetInfo";

const MyPetCarousel = () => {
  const myPetInfoStyles = {
    profileBorderColor: "var(--White)",
    nameTextColor: "var(--White)",
    breedTextColor: "var(--White)",
  };

  return (
    <div>
      <div className={styles.title}>마이펫 관리하기</div>
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
            <div className={styles.container}>
              <MyPetInfo petInfo={petInfo} styles={myPetInfoStyles} />
            </div>
          </SwiperSlide>
        ))}
        <SwiperSlide className="petadd">반려동물 추가 +</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MyPetCarousel;
