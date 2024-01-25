import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "@/app/settings/_components/Mypet/style.css";
import { Pagination } from "swiper/modules";
import "@/app/globals.css";

const MyPet = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>반려동물 추가 +</SwiperSlide>
      </Swiper>
    </>
  );
};

export default MyPet;
