import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { title, petadd, container, petButton, petMateButton, petInfoWrapper } from "./style.css";
import "./swiper.css";
import MyPetInfo from "@/app/settings/_components/MyPetInfo";
import Image from "next/image";
import AddIcon from "@/public/icons/add.svg?url";
import Link from "next/link";
import { PetsType } from "@/app/_types/pets/types";
import { useQuery } from "@tanstack/react-query";
import { getPets } from "@/app/_api/pets";

const MyPetCarousel = () => {
  const myPetInfoStyles = {
    profileBorderColor: "var(--White)",
    nameTextColor: "var(--White)",
    breedTextColor: "var(--White)",
  };

  const { data: pets } = useQuery<PetsType>({
    queryKey: ["pets"],
    queryFn: () => getPets(),
  });

  const petList = pets?.data ?? [];

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
        {petList.map((petInfo) => (
          <SwiperSlide key={petInfo.petId}>
            <div className={container}>
              <div className={petInfoWrapper}>{petInfo && <MyPetInfo petInfo={petInfo} styles={myPetInfoStyles} />}</div>
              <Link href="" className={petButton}>
                마이펫 정보 수정
              </Link>
              <Link href="/settings/member" className={petMateButton}>
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
