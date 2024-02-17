import { getTestPets } from "@/app/_api/diary";
import { getPets } from "@/app/_api/pets";
import SelectPet from "@/app/_components/SelectPet";

const SelectPage = async () => {
  const pets = await getPets();
  return <SelectPet type="육아일기" data={pets} />;
};

export default SelectPage;
