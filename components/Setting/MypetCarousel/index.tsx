import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "@/components/Setting/MypetCarousel/style.css";
import { Pagination, Autoplay } from "swiper/modules";
import "@/styles/global.css";
import mockData from "./mockdata.json";
import Card from "@/components/Setting/MypetCarousel/Card";

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
        {mockData.map((card, index) => (
          <SwiperSlide key={card.id}>
            <Card card={card} backgroundColor={backgroundColors[index % backgroundColors.length]} />
          </SwiperSlide>
        ))}
        <SwiperSlide className="petadd">반려동물 추가 +</SwiperSlide>
      </Swiper>
    </>
  );
};

export default MyPet;
