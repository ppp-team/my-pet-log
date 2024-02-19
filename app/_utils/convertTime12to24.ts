const convertTime12to24 = (time12h: string) => {
  const [time, modifier] = time12h.split(" ");
  let [hours, minutes] = time.split(":");

  if (hours === "12") {
    hours = "00";
    minutes = minutes;
  }

  if (modifier === "PM") {
    hours = String(parseInt(hours, 10) + 12);
    minutes = minutes;
  }

  return `${hours}:${minutes}`;
};

export default convertTime12to24;
