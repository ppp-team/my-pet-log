import * as styles from "./ReceivedInvitationList.css";
import { ReceivedInvitationList } from "@/components/types/receivedInvitation";
import sampleImageSrc from "@/assets/edit.svg?url";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const receivedInvitationListMock: ReceivedInvitationList[] = [
  { invitationId: "string1", petId: "string1", ownerId: "string", petName: "string1", petImageUrl: sampleImageSrc, invitedAt: "2024-01-01 00:00:00" },
  { invitationId: "string2", petId: "string2", ownerId: "string", petName: "string2", petImageUrl: sampleImageSrc, invitedAt: "2024-01-02 00:00:00" },
  { invitationId: "string3", petId: "string3", ownerId: "string", petName: "string3", petImageUrl: sampleImageSrc, invitedAt: "2024-01-03 00:00:00" },
];

const ReceivedInvitationList = () => {
  return (
    <section className={styles.container}>
      <p>초대 받은 내역</p>
      <Swiper slidesPerView={"auto"} spaceBetween={20} className={`${styles.list} mySwiper`}>
        {receivedInvitationListMock.map((invitation) => (
          <SwiperSlide key={invitation.invitationId} className={styles.item}>
            <Image src={invitation.petImageUrl} alt="펫 프로필 이미지" width={40} height={40} />
            <p>{invitation.petName}</p>
            <p>{invitation.invitedAt}</p>
            <div>
              <button>수락</button>
              <button>거절</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ReceivedInvitationList;
