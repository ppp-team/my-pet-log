import * as styles from "./ReceivedInvitationList.css";
import { ReceivedInvitationList } from "@/app/_types/receivedInvitation";
import sampleImageSrc from "@/public/icons/edit.svg?url";
import petProfileDefaultSrc from "@/public/images/pet-profile-default.svg?url";
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
      <p className={styles.subtitle}>초대 받은 내역</p>
      <Swiper className="mySwiper" slidesPerView={"auto"} spaceBetween={20}>
        {receivedInvitationListMock.map((invitation) => (
          <SwiperSlide key={invitation.invitationId} className={styles.itemOverride}>
            <div className={styles.item}>
              <Image className={styles.petImage} src={invitation.petImageUrl ?? petProfileDefaultSrc} alt="펫 프로필 이미지" width={48} height={48} />
              <p className={styles.petName}>{invitation.petName}</p>
              <p className={styles.invitedDate}>{invitation.invitedAt}</p>
              <div className={styles.responseContainer}>
                <button className={styles.acceptButton}>수락</button>
                <button className={styles.declineButton}>거절</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ReceivedInvitationList;
