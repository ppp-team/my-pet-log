import * as styles from "./HeaderPetGroup.css";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar } from "@nextui-org/react";
import { PetGroupType } from "@/components/types/petGroup";
import Image from "next/image";
import EditIconUrl from "@/assets/edit.svg?url";

const PetGroupSampleList: PetGroupType[] = [
  {
    petId: "1",
    ownerId: "",
    inviteCode: "",
    name: "동물1",
    type: "",
    breed: "",
    gender: "",
    isNeutered: "Y",
    birth: "2021-04-17 00:00:00",
    firstMeetDate: "2021-04-17 00:00:00",
    weight: "5.5",
    registNumber: "",
    repStatus: "Y",
    petImageUrl: EditIconUrl,
  },
  {
    petId: "2",
    ownerId: "",
    inviteCode: "",
    name: "동물2",
    type: "",
    breed: "",
    gender: "",
    isNeutered: "Y",
    birth: "2021-04-17 00:00:00",
    firstMeetDate: "2021-04-17 00:00:00",
    weight: "5.5",
    registNumber: "",
    repStatus: "Y",
    petImageUrl: EditIconUrl,
  },
  {
    petId: "3",
    ownerId: "",
    inviteCode: "",
    name: "동물3",
    type: "",
    breed: "",
    gender: "",
    isNeutered: "Y",
    birth: "2021-04-17 00:00:00",
    firstMeetDate: "2021-04-17 00:00:00",
    weight: "5.5",
    registNumber: "",
    repStatus: "Y",
    petImageUrl: EditIconUrl,
  },
];

type dropdownMenuItemType = {
  id: string;
  name: string;
  imageUrl: string;
};

const SETTING_BUTTON: dropdownMenuItemType = {
  id: "setting",
  name: "동물 관리",
  imageUrl: EditIconUrl,
};

const HeaderPetGroup = () => {
  const parsedPetGroupList = PetGroupSampleList.map((item) => {
    return {
      id: item.petId,
      name: item.name,
      imageUrl: item.petImageUrl,
    };
  });

  const dropDownMenuList: dropdownMenuItemType[] = [...parsedPetGroupList, SETTING_BUTTON];

  return (
    <header className={styles.header}>
      <Dropdown placement="bottom-start">
        <DropdownTrigger>
          <div className={styles.currentPetGroupContainer}>
            <Image className={styles.petGroupIcon} src={EditIconUrl} alt="현재 선택된 동물 프로필 이미지" width={40} height={40} />
            <>{"해피"}</>
            <Image src={EditIconUrl} alt="드롭다운 토글 버튼 이미지" width={40} height={40} />
          </div>
        </DropdownTrigger>
        <DropdownMenu aria-label="dropDownMenuList" items={dropDownMenuList}>
          {(item: dropdownMenuItemType) => (
            <DropdownItem key={item.id} variant="flat">
              <span className={styles.dropdownItemContainer}>
                <Image src={item.imageUrl} alt={`${item.name} 버튼 이미지`} width={20} height={20} />
                <p>{item.name}</p>
              </span>
            </DropdownItem>
          )}
        </DropdownMenu>
      </Dropdown>
      <button>
        <Image src={EditIconUrl} alt="유저 프로필 이미지" width={40} height={40} />
      </button>
    </header>
  );
};

export default HeaderPetGroup;
