import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import * as styles from "./MobilePetGroupDropdown.css";
import Image from "next/image";
import dropdownIconSrc from "@/public/icons/drop-down-icon-orange.svg?url";
import petGroupSettingIconSrc from "@/public/icons/pet-group-settings.svg?url";
import NoPetProfileIconSrc from "@/public/images/pet-profile-default.svg?url";
import { useRouter } from "next/navigation";
import { PetGroupType } from "@/app/_types/petGroup";

const SAMPLE_PET_GROUP_LIST: PetGroupType[] = [
  {
    petId: "1",
    ownerId: "1",
    inviteCode: "",
    name: "멍냥이",
    type: "",
    breed: "믹스",
    gender: "남",
    isNeutered: "Y",
    birth: "2020.01.01",
    weight: "3.5",
    registNumber: "",
    repStatus: "N",
    petImageUrl: null,
  },
  {
    petId: "2",
    ownerId: "2",
    inviteCode: "",
    name: "냥냥이",
    type: "",
    breed: "퍼그",
    gender: "여",
    isNeutered: "Y",
    birth: "2023.01.01",
    weight: "3.5",
    registNumber: "",
    repStatus: "N",
    petImageUrl: null,
  },
  {
    petId: "3",
    ownerId: "3",
    inviteCode: "",
    name: "멍멍이",
    type: "",
    breed: "말티즈",
    gender: "여",
    isNeutered: "Y",
    birth: "2022.01.01",
    weight: "5.5",
    registNumber: "",
    repStatus: "Y",
    petImageUrl: NoPetProfileIconSrc,
  },
];

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

  const parsedPetGroupList: dropdownMenuItemType[] = SAMPLE_PET_GROUP_LIST.map((item) => {
    return {
      petId: item.petId,
      petName: item.name,
      petProfileImageUrl: item?.petImageUrl ?? NoPetProfileIconSrc,
      isSelected: item.repStatus === "Y" ? true : false,
    };
  });

  /**
   * @type {dropdownMenuItemType} currentPetGroupId로 리스트에서 repStatus === "Y"인 currentPetGroup 추출하고 없으면 리스트 첫번째
   */
  const currentPetGroup: dropdownMenuItemType = parsedPetGroupList.find((petGroup) => petGroup.isSelected === true) ?? parsedPetGroupList[0];

  /**
   * @type {Array<dropdownMenuItemType>} currentPetGroup 제외하고 나머지 리스트 + 동물 관리 버튼
   */
  const dropDownMenuList: dropdownMenuItemType[] = [...parsedPetGroupList.filter((petGroup) => petGroup.petId !== currentPetGroup.petId), SETTING_BUTTON];

  const onClickDropdownMenu = (id: string) => {
    id === SETTING_BUTTON.petId ? router.push(id) : alert(id);
  };

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