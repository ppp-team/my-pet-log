const today = new Date();

export const getPrettyToday = () => {
  return today.toISOString().split("T")[0];
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
