import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "@/components/MypetCarousel/style.css";
import { Pagination, Autoplay } from "swiper/modules";
import "@/app/globals.css";
import mockData from "./mockdata.json";
import Card from "@/components/MypetCarousel/Card";

const MyPet = () => {
  const backgroundColors = ["#d9d9d9", "#aabbcc", "#ddeeff", "#ccddaa", "#bbaaee"];

  return (
    <>
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
        {mockData.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <Card slide={slide} backgroundColor={backgroundColors[index % backgroundColors.length]} />
          </SwiperSlide>
        ))}
        <SwiperSlide className="petadd">반려동물 추가 +</SwiperSlide>
      </Swiper>
    </>
  );
};

export default MyPet;
