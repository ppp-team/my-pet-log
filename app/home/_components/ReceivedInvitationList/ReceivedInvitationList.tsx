import * as styles from "./ReceivedInvitationList.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { InvitationType } from "@/app/_types/invitaion/types";
import { getInvitations, postAcceptance, postRefusal } from "@/app/_api/invitation";
import { showToast } from "@/app/_components/Toast";
import { getImagePath } from "@/app/_utils/getPetImagePath";
import Loading from "@/app/_components/Loading";

const ReceivedInvitationList = () => {
  const queryClient = useQueryClient();

  const { data: invites, isPending } = useQuery<InvitationType[]>({
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
        showToast("초대가 거절되었습니다.", true);
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
        <Swiper className={`mySwiper ${styles.swiperOverride}`} slidesPerView={"auto"}>
          {invites?.map((invitation) => (
            <SwiperSlide className={styles.itemOverride} key={invitation.invitationId}>
              <div className={styles.item}>
                <Image className={styles.petImage} src={getImagePath(invitation.petImageUrl)} alt="펫 프로필 이미지" width={48} height={48} />
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
      {isPending && <Loading />}
    </section>
  );
};

export default ReceivedInvitationList;
