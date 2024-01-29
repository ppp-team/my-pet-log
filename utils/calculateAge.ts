const calculateAge = (birthDate: string): number => {
  const birthYear = new Date(birthDate).getFullYear();
  const currentYear = new Date().getFullYear();

  return currentYear - birthYear;
};

export default calculateAge;
