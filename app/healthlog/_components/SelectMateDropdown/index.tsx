"use client";

import { getGuardiansForLogs } from "@/app/_api/guardians";
import { GuardianForLogsType } from "@/app/_types/guardians/types";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import * as styles from "./style.css";

interface SelectMateDropdownProps {
  petId: number;
  onSelect: (id: string) => void;
  selectedId?: string;
}

const SelectMateDropdown = ({ petId, onSelect, selectedId: propSelectedId }: SelectMateDropdownProps) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [selectedNickname, setSelectedNickname] = useState("");
  const [, setSelectedId] = useState(propSelectedId || "");

  const { data: guardiansData } = useQuery({
    queryKey: ["guardiansForLogs", petId],
    queryFn: () => getGuardiansForLogs(petId),
  });

  useEffect(() => {
    if (guardiansData && !propSelectedId) {
      const currentUserGuardian = guardiansData.find((guardian) => guardian.isCurrentUser);
      if (currentUserGuardian) {
        setSelectedNickname(currentUserGuardian.nickname);
        setSelectedId(currentUserGuardian.id);
        onSelect(currentUserGuardian.id);
      }
    } else if (propSelectedId) {
      const selectedGuardian = guardiansData?.find((guardian) => guardian.id === propSelectedId);
      if (selectedGuardian) {
        setSelectedNickname(selectedGuardian.nickname);
      }
    }
  }, [guardiansData, propSelectedId, onSelect]);

  const handleSelectMate = (nickname: string, id: string) => {
    setSelectedNickname(nickname);
    setSelectedId(id);
    setShowDropdown(false);
    onSelect(id);
  };

  return (
    <div ref={dropdownRef} className={styles.container}>
      <input className={styles.inputBox} value={selectedNickname} readOnly onClick={() => setShowDropdown(!showDropdown)} />
      {showDropdown && guardiansData && (
        <ul className={styles.dropdownList}>
          {guardiansData.map((guardian: GuardianForLogsType) => (
            <li key={guardian.id} className={styles.dropdownItem} onClick={() => handleSelectMate(guardian.nickname, guardian.id)}>
              {guardian.nickname}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectMateDropdown;
