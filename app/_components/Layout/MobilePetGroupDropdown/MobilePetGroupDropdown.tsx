"use client";

import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import * as styles from "./MobilePetGroupDropdown.css";
import Image from "next/image";
import dropdownIconSrc from "@/public/icons/drop-down-icon-orange.svg?url";
import petGroupSettingIconSrc from "@/public/icons/pet-group-settings.svg?url";
import NoPetProfileIconSrc from "@/public/images/pet-profile-default.svg?url";
import { useRouter } from "next/navigation";
import { PetsType } from "@/app/_types/petGroup/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { editPetRep, getPets } from "@/app/_api/pets";
import { useCookies } from "react-cookie";

type dropdownMenuItemType = {
  id: string;
  label: string;
  imageUrl: string;
};

const SETTING_BUTTON: dropdownMenuItemType = {
  id: "settings",
  label: "동물 관리",
  imageUrl: petGroupSettingIconSrc,
};

const MobilePetGroupDropdown = () => {
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
    id === SETTING_BUTTON.id ? router.push(id) : handleEditPet(id);
  };

  const router = useRouter();
  const [cookies] = useCookies();
  const petIdCookie = cookies.petId;
  if (!petIdCookie) router.push("/home-select");

  const { data: pets } = useQuery<PetsType>({
    queryKey: ["pets", petIdCookie],
    queryFn: () => getPets(),
  });

  if (!pets) return <div></div>;

  const parsedPetGroupList: dropdownMenuItemType[] = pets.data.map((item) => {
    return {
      id: item.petId,
      label: item.name,
      imageUrl: item.petImageUrl ?? NoPetProfileIconSrc,
    };
  });

  /**
   * @type {dropdownMenuItemType}
   */
  const currentPetGroup: dropdownMenuItemType | null = parsedPetGroupList.find((petGroup) => petGroup.id === petIdCookie) ?? null;

  /**
   * @type {Array<dropdownMenuItemType>} currentPetGroup 제외하고 나머지 리스트 + 동물 관리 버튼
   */
  const dropDownMenuList: dropdownMenuItemType[] = [...parsedPetGroupList?.filter((petGroup) => petGroup.id !== petIdCookie), SETTING_BUTTON];

  if (!currentPetGroup) return <div></div>;
  return (
    <Dropdown placement="bottom-start">
      <DropdownTrigger>
        <div className={styles.currentPetGroupContainer}>
          <Image className={styles.currentPetGroupProfileImage} src={currentPetGroup.imageUrl} alt="대표 동물 프로필 이미지" width={40} height={40} priority={true} />
          <span className={styles.currentPetGroupName}>{currentPetGroup.label}</span>
          <Image className={styles.dropdownIcon} src={dropdownIconSrc} alt="드롭다운 토글 버튼 이미지" width={20} height={20} />
        </div>
      </DropdownTrigger>
      <DropdownMenu className={styles.dropdownMenu} aria-label="dropDownMenuList" items={dropDownMenuList} onAction={(key) => onClickDropdownMenu(`${key}`)}>
        {(item: dropdownMenuItemType) => (
          <DropdownItem key={item.id} textValue={item.label} className={styles.dropdownItemOverride}>
            <div className={styles.dropdownItemContainer}>
              <Image className={styles.petGroupProfileImage} src={item.imageUrl} alt={`${item.label} 버튼 이미지`} width={31} height={31} />
              <p className={styles.petGroupName}>{item.label}</p>
            </div>
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
};
export default MobilePetGroupDropdown;
