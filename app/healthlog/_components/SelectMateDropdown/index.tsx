"use client";

import React, { useEffect, useState, useRef, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import * as styles from "./style.css";
import { getGuardians } from "@/app/_api/guardians";
import { getMe } from "@/app/_api/users";
import { UserType } from "@/app/_types/user/types";
import { GuardiansType, GuardianType } from "@/app/_types/guardians/types";

interface SelectMateDropdownProps {
  onSelect: (guardianId: number) => void;
}

const SelectMateDropdown = ({ onSelect }: SelectMateDropdownProps) => {
  const [selectedMate, setSelectedMate] = useState("");
  const [matesList, setMatesList] = useState<GuardianType[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const petId = 6;

  const { data: userData } = useQuery<UserType>({
    queryKey: ["me"],
    queryFn: () => getMe(),
  });
  const { data: guardiansData } = useQuery<GuardiansType>({
    queryKey: ["petmate", petId],
    queryFn: () => getGuardians(petId),
  });

  const userNickname = userData?.nickname;
  const guardiansList = useMemo(() => {
    return guardiansData?.data ?? [];
  }, [guardiansData]);

  useEffect(() => {
    if (userNickname) {
      setSelectedMate(userNickname);
      setMatesList(guardiansList);
    }
  }, [guardiansList, userNickname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setSelectedMate(searchValue);
    if (!searchValue) {
      setMatesList(guardiansList);
      return;
    }
    const filtered = guardiansList.filter((mate) => mate.nickname.toLowerCase().includes(searchValue.toLowerCase()));
    setMatesList(filtered);
  };

  const handleSelectMate = (nickname: string, guardianId: number) => {
    setSelectedMate(nickname);
    setShowDropdown(false);
    onSelect(guardianId);
  };

  return (
    <div ref={dropdownRef} className={styles.container}>
      <input className={styles.inputBox} value={selectedMate} onChange={handleInputChange} onClick={() => setShowDropdown(true)} />
      {showDropdown && (
        <ul className={styles.dropdownList}>
          {matesList.map((mate) => (
            <li key={mate.guardianId} className={styles.dropdownItem} onClick={() => handleSelectMate(mate.nickname, mate.guardianId)}>
              {mate.nickname}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectMateDropdown;
