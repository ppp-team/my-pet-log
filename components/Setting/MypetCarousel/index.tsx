import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "@/components/Setting/MypetCarousel/style.css";
import { Pagination, Autoplay } from "swiper/modules";
import "@/styles/global.css";
import mockData from "./mockdata.json";
import Card from "@/components/Setting/MypetCarousel/Card";
import * as styles from "./style.css";
import "./swiper.css";

const MyPet = () => {
  const backgroundColors = ["#d9d9d9", "#aabbcc", "#ddeeff", "#ccddaa", "#bbaaee"];

  return (
    <div className={styles.container}>
      <div style={{ color: "#727272", fontSize: "1.6rem", fontWeight: "600" }}>마이펫 관리하기</div>
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
        {mockData.data.map((card, index) => (
          <SwiperSlide key={card.petId}>
            <Card card={card} backgroundColor={backgroundColors[index % backgroundColors.length]} />
          </SwiperSlide>
        ))}
        <SwiperSlide className="petadd">반려동물 추가 +</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MyPet;
