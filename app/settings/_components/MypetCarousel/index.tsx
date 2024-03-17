"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./swiper.css";
import { Pagination } from "swiper/modules";
import * as styles from "./styles.css";
import MyPetInfo from "@/app/settings/_components/MyPetInfo";
import Image from "next/image";
import AddIcon from "@/public/icons/add.svg?url";
import Link from "next/link";
import { PetsType } from "@/app/_types/pets/types";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { editPetRep, getPets } from "@/app/_api/pets";
import Skeleton from "./Skeleton";

const MyPetCarousel = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const {
    data: pets,
    isPending,
    isSuccess,
  } = useQuery<PetsType>({
    queryKey: ["pets"],
    queryFn: () => getPets(),
  });

  const { mutate: editPetRepMutate } = useMutation({
    mutationFn: (petId: string) => editPetRep(petId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pets"] });
      router.push("/settings/member");
    },
  });

  // mutationFn에 올바른 api콜 함수 들어가도록 수정해야함
  const { mutate: editPetSubscriptionMutate } = useMutation({
    mutationFn: (petId: string) => editPetRep(petId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pets"] });
      router.push("/settings/subscriber");
    },
  });

  const myPetInfoStyles = {
    profileBorderColor: "var(--White)",
    nameTextColor: "var(--White)",
    breedTextColor: "var(--White)",
  };

  return (
    <>
      {isSuccess ? (
        <div style={{ marginBottom: (pets?.data?.length ?? 0) > 0 ? "0" : "3.8rem" }}>
          <Swiper
            className="mypet"
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            {pets?.data.map((petInfo) => (
              <SwiperSlide className="mypet" key={petInfo.petId}>
                <div className={styles.container}>
                  <div className={styles.petInfoWrapper}>{petInfo && <MyPetInfo petInfo={petInfo} styles={myPetInfoStyles} />}</div>
                  <button
                    className={styles.petMateButton}
                    onClick={() => {
                      editPetRepMutate(String(petInfo.petId));
                    }}
                  >
                    펫메이트 관리
                  </button>

                  {/* 구독자 관리의 onClick이벤트 수정 필요  */}
                  <button
                    onClick={() => {
                      editPetSubscriptionMutate(String(petInfo.petId));
                    }}
                    className={styles.petSubscriberButton}
                  >
                    구독자 관리
                  </button>
                </div>
              </SwiperSlide>
            ))}
            <SwiperSlide className="mypet">
              <Link href="/settings/pet-register" className={styles.petadd}>
                <Image src={AddIcon} alt="add icon" width={36} height={36} />
                <span>마이펫 추가</span>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      ) : (
        (isPending || isSuccess) && <Skeleton />
      )}
    </>
  );
};

export default MyPetCarousel;
