const today = new Date();

export const getPrettyToday = () => {
  const month = today.getMonth() + 1 < 10 ? `0${today.getMonth() + 1}` : today.getMonth();
  const day = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
  return `${today.getFullYear()}-${month}-${day}`;
};

export const getPrettyTime = () => {
  const time = today.toTimeString().split(" ")[0];
  const timeArr = time.split(":");
  const dayOrNight = +timeArr[0] > 13 ? "PM" : "AM";
  if (+timeArr[0] > 13) {
    timeArr[0] = String(+timeArr[0] - 12);
  }
  return `${timeArr[0]}:${timeArr[1]} ${dayOrNight}`;
};
