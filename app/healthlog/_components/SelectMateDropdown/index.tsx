"use client";

import { getGuardiansForLogs } from "@/app/_api/guardians";
import { GuardianForLogsType } from "@/app/_types/guardians/types";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useRef, useState } from "react";
import * as styles from "./style.css";

interface SelectMateDropdownProps {
  onSelect: (id: string) => void;
}

const SelectMateDropdown = ({ onSelect }: SelectMateDropdownProps) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [selectedNickname, setSelectedNickname] = useState("");
  const petId = 6; // 예시 petId, 실제 상황에 맞게 조정 필요

  const { data: guardiansData } = useQuery({
    queryKey: ["guardiansForLogs", petId],
    queryFn: () => getGuardiansForLogs(petId),
  });

  useEffect(() => {
    if (guardiansData) {
      const currentUser = guardiansData.find((guardian) => guardian.isCurrentUser);
      if (currentUser && !selectedNickname) {
        setSelectedNickname(currentUser.nickname);
        onSelect(currentUser.id);
      }
    }
  }, [guardiansData, onSelect, selectedNickname]);

  const handleSelectMate = (nickname: string, id: string) => {
    setSelectedNickname(nickname);
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
