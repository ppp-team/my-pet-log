const calculateAge = (birthDate: string): string => {
  const birth = new Date(birthDate);
  const today = new Date();

  // 나이 계산
  const age = today.getFullYear() - birth.getFullYear();

  // 생후 1년 미만인지 확인
  let isLessThanOneYear = false;
  if (today.getFullYear() - birth.getFullYear() === 1) {
    // 연도가 1년 차이날 때, 월과 일을 비교
    if (today.getMonth() < birth.getMonth() || (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate())) {
      isLessThanOneYear = true;
    }
  } else if (today.getFullYear() === birth.getFullYear()) {
    // 같은 해인 경우 무조건 생후 1년 미만
    isLessThanOneYear = true;
  }

  // 생후 1년 미만일 경우 개월 수로 표시
  if (isLessThanOneYear) {
    let months = today.getMonth() - birth.getMonth();
    if (today.getFullYear() !== birth.getFullYear()) {
      months += 12; // 연도가 다르면 12개월을 더함
    }
    // 현재 날짜가 생일보다 이르면 한 달을 뺌
    if (today.getDate() < birth.getDate()) {
      months--;
    }
    return months > 0 ? `생후 ${months}개월` : "생후 1개월 미만";
  }

  // 그렇지 않으면 나이로 표시
  return `${age}살`;
};

export default calculateAge;
