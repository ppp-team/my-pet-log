import * as styles from "./ReceivedInvitationList.css";
import petProfileDefaultSrc from "@/public/images/pet-profile-default.svg?url";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { InvitationType } from "@/app/_types/invitaion/types";
import { getInvitations, postAcceptance, postRefusal } from "@/app/_api/invitation";
import { showToast } from "@/app/_components/Toast";
import { useRouter } from "next/navigation";

const ReceivedInvitationList = () => {
  const router = useRouter();

  const queryClient = useQueryClient();

  const { data: invites } = useQuery<InvitationType[]>({
    queryKey: ["invites"],
    queryFn: () => getInvitations(),
  });

  const { mutate: acceptMutation, isPending: IsAcceptPending } = useMutation({
    mutationKey: ["acceptMutationKey"],
    mutationFn: (invitationId: number) => postAcceptance(invitationId),
    onError: () => {
      showToast("초대 수락에 실패했습니다. 잠시 후 다시 시도해주세요.", false);
    },
    onSuccess: (data) => {
      if (data) {
        queryClient.invalidateQueries({ queryKey: ["invites"] });
        const petName = invites?.find((item) => item.invitationId === data)?.petName;
        showToast(petName ? `${petName}의 집사가 되었어요!` : "집사가 되었어요!", true);
        router.push("/home-select");
        /**
         * TODO 첫번째 펫그룹 참여 시 홈으로 보낼 것인지 or 따로 버튼을 만들지 논의 후 처리
         */
      } else {
        showToast("초대 수락에 실패했습니다. 잠시 후 다시 시도해주세요.", false);
      }
    },
  });

  const { mutate: refuseMutation, isPending: isRefusePending } = useMutation({
    mutationKey: ["refuseMutationKey"],
    mutationFn: (invitationId: number) => postRefusal(invitationId),
    onError: () => {
      showToast("초대 거절에 실패했습니다. 잠시 후 다시 시도해주세요.", false);
    },
    onSuccess: (data) => {
      if (data) {
        queryClient.invalidateQueries({ queryKey: ["invites"] });
        showToast("초대를 거절했습니다.", true);
      } else {
        showToast("초대 거절에 실패했습니다. 잠시 후 다시 시도해주세요.", false);
      }
    },
  });

  return (
    <section className={styles.container}>
      <p className={styles.subtitle}>초대 받은 내역</p>

      {!invites?.length || invites?.length < 1 ? (
        <div className={styles.noInvitationContainer}>
          <h1 className={styles.noInvitationTitle}>초대 받은 내역이 없습니다.</h1>
        </div>
      ) : (
        <Swiper className="mySwiper" slidesPerView={"auto"} spaceBetween={20}>
          {invites?.map((invitation) => (
            <SwiperSlide key={invitation.invitationId} className={styles.itemOverride}>
              <div className={styles.item}>
                <Image className={styles.petImage} src={invitation.petImageUrl ?? petProfileDefaultSrc} alt="펫 프로필 이미지" width={48} height={48} />
                <p className={styles.petName}>{invitation.petName}</p>
                <p className={styles.invitedDate}>{invitation.invitedAt} 전</p>
                <div className={styles.responseContainer}>
                  <button className={styles.acceptButton} onClick={() => acceptMutation(invitation.invitationId)} disabled={IsAcceptPending}>
                    수락
                  </button>
                  <button className={styles.declineButton} onClick={() => refuseMutation(invitation.invitationId)} disabled={isRefusePending}>
                    거절
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
};

export default ReceivedInvitationList;
