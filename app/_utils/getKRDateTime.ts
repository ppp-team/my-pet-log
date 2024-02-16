const getKRDateTime = (): string => {
  const date = new Date();
  const utc = date.getTime() + date.getTimezoneOffset() * 60000;
  const kst = utc + 3600000 * 9;
  const kstDate = new Date(kst);

  const year = kstDate.getFullYear();
  const month = kstDate.getMonth() + 1;
  const day = kstDate.getDate();
  const hours = kstDate.getHours();
  const minutes = kstDate.getMinutes();

  const formattedDateTime = `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}T${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;

  return formattedDateTime;
};

export default getKRDateTime;
