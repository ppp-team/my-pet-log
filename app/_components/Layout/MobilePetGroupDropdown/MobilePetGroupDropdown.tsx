import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import * as styles from "./MobilePetGroupDropdown.css";
import Image from "next/image";
import dropdownIconSrc from "@/public/icons/drop-down-icon-orange.svg?url";
import petGroupSettingIconSrc from "@/public/icons/pet-group-settings.svg?url";
import NoPetProfileIconSrc from "@/public/images/pet-profile-default.svg?url";
import { useRouter } from "next/navigation";
import { PetsType } from "@/app/_types/petGroup/pets";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { editPetRep, getPets } from "@/app/_api/pets";

type dropdownMenuItemType = {
  petId: string;
  petName: string;
  petProfileImageUrl: string;
  isSelected?: boolean;
};

const SETTING_BUTTON: dropdownMenuItemType = {
  petId: "settings",
  petName: "동물 관리",
  petProfileImageUrl: petGroupSettingIconSrc,
};

const MobilePetGroupDropdown = () => {
  const router = useRouter();

  const { data: pets } = useQuery<PetsType>({
    queryKey: ["pets"],
    queryFn: () => getPets(),
  });

  const petList = pets?.data ?? [];

  const parsedPetGroupList: dropdownMenuItemType[] = petList.map((item) => {
    return {
      petId: item.petId,
      petName: item.name,
      petProfileImageUrl: item?.petImageUrl ?? NoPetProfileIconSrc,
      isSelected: item.repStatus === "REPRESENTATIVE" ? true : false,
    };
  });

  /**
   * @type {dropdownMenuItemType} currentPetGroupId로 리스트에서 repStatus === "REPRESENTATIVE"인 currentPetGroup 추출하고 없으면 리스트 첫번째
   */
  const currentPetGroup: dropdownMenuItemType = parsedPetGroupList.find((petGroup) => petGroup.isSelected === true) ?? parsedPetGroupList[0];

  /**
   * @type {Array<dropdownMenuItemType>} currentPetGroup 제외하고 나머지 리스트 + 동물 관리 버튼
   */
  const dropDownMenuList: dropdownMenuItemType[] = [...parsedPetGroupList.filter((petGroup) => petGroup.petId !== currentPetGroup.petId), SETTING_BUTTON];

  const queryClient = useQueryClient();

  const { mutate: editPetRepMutation } = useMutation({
    mutationKey: ["editPetRepKey"],
    mutationFn: editPetRep,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["pets"],
      });
    },
  });

  const handleEditPet = (id: string) => {
    editPetRepMutation(id);
  };

  const onClickDropdownMenu = (id: string) => {
    id === SETTING_BUTTON.petId ? router.push(id) : handleEditPet(id);
  };

  if (!currentPetGroup) return <></>;
  return (
    <Dropdown placement="bottom-start">
      <DropdownTrigger>
        <div className={styles.currentPetGroupContainer}>
          <Image className={styles.currentPetGroupProfileImage} src={currentPetGroup.petProfileImageUrl} alt="대표 동물 프로필 이미지" width={40} height={40} priority={true} />
          <span className={styles.currentPetGroupName}>{currentPetGroup.petName}</span>
          <Image className={styles.dropdownIcon} src={dropdownIconSrc} alt="드롭다운 토글 버튼 이미지" width={20} height={20} />
        </div>
      </DropdownTrigger>
      <DropdownMenu className={styles.dropdownMenu} aria-label="dropDownMenuList" items={dropDownMenuList} onAction={(key) => onClickDropdownMenu(`${key}`)}>
        {(item: dropdownMenuItemType) => (
          <DropdownItem key={item.petId} textValue={item.petName} className={styles.dropdownItemOverride}>
            <div className={styles.dropdownItemContainer}>
              <Image className={styles.petGroupProfileImage} src={item.petProfileImageUrl} alt={`${item.petName} 버튼 이미지`} width={31} height={31} />
              <p className={styles.petGroupName}>{item.petName}</p>
            </div>
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
};
export default MobilePetGroupDropdown;
