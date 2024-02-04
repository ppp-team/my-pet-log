const formatDaysAgo = (initialDate: string) => {
  // 입력된 문자열을 Date 객체로 변환
  const date = new Date(initialDate);

  // 정상적인 날짜가 아니면 리턴
  if (isNaN(date.getTime())) return;

  // 현재 날짜
  const currentDate = new Date();

  // 두 날짜 간의 차이 (밀리초 단위)
  const differenceInMilliseconds = +currentDate - +date;

  // 밀리초를 일 수로 변환
  const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);

  // 소수점 이하 버리기
  const roundedDifferenceInDays = Math.floor(differenceInDays);

  // "n일 전" 형식으로 반환
  return `${roundedDifferenceInDays}일 전`;
};

export default formatDaysAgo;
