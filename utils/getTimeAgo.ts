// ~분 전, ~시간 전, ~일 전을 반환하는 함수

import moment from "moment";

export const getTimeAgo = (invitedAt: string): string => {
  if (!invitedAt) {
    return "";
  }

  const today = moment();
  const postingDate = moment(invitedAt, "YYYY-MM-DD HH:mm:ss");
  const dayDiff = postingDate.diff(today, "days");
  const hourDiff = postingDate.diff(today, "hours");
  const minutesDiff = postingDate.diff(today, "minutes");

  if (dayDiff === 0 && hourDiff === 0) {
    // 작성한지 1시간도 안 지났을 때
    const minutes = Math.abs(minutesDiff);
    return `${minutes}분 전`; // '분'으로 표시
  }

  if (dayDiff === 0) {
    // 작성한지 1시간은 넘었지만 하루는 안 지났을 때
    const hour = Math.abs(hourDiff);
    return `${hour}시간 전`; // '시간'으로 표시
  }

  const day = Math.abs(dayDiff);
  return `${day}일 전`; // '일'로 표시
};
