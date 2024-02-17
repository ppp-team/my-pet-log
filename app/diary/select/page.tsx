import { getPets } from "@/app/_api/pets";
import SelectPet from "@/app/_components/SelectPet";

const SelectPage = async () => {
  const pets = await getPets();
  return <SelectPet type="육아일기" path="/diary" data={pets} />;
};

export default SelectPage;
