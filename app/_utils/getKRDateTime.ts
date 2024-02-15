const getKRDateTime = (): string => {
  const date = new Date();
  const kstOffset = 9 * 60;
  const localOffset = date.getTimezoneOffset();
  date.setMinutes(date.getMinutes() + kstOffset - localOffset);
  const formattedDateTime = date.toISOString().slice(0, 16);
  return formattedDateTime;
};

export default getKRDateTime;
