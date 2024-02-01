"use client";

import sampleImageSrc from "@/assets/feather.svg?url";
import React, { useEffect, useState, useRef } from "react";
import * as styles from "./style.css";

interface DropdownItem {
  guardianId: string;
  repStatus: "Y" | "N";
  nickname: string;
  profileImageUrl: string;
}

const MateSampleList: DropdownItem[] = [
  {
    guardianId: "1",
    repStatus: "Y",
    nickname: "초롱이누나",
    profileImageUrl: sampleImageSrc,
  },
  {
    guardianId: "2",
    repStatus: "N",
    nickname: "초롱이엄마",
    profileImageUrl: sampleImageSrc,
  },
  {
    guardianId: "3",
    repStatus: "N",
    nickname: "초롱이아빠",
    profileImageUrl: sampleImageSrc,
  },
];

const SelectMateDropdown = () => {
  const [selectedMate, setSelectedMate] = useState<string>("");
  const [filteredList, setFilteredList] = useState<DropdownItem[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setSelectedMate(MateSampleList[0].nickname);
    setFilteredList(MateSampleList as DropdownItem[]);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setSelectedMate(searchValue);
    if (!searchValue) {
      setFilteredList(MateSampleList as DropdownItem[]);
      return;
    }
    const filtered = MateSampleList.filter((mate) => mate.nickname.toLowerCase().includes(searchValue.toLowerCase()));
    setFilteredList(filtered as DropdownItem[]);
  };

  const handleSelectMate = (nickname: string) => {
    setSelectedMate(nickname);
    setShowDropdown(false);
  };

  return (
    <div ref={dropdownRef}>
      <input className={styles.inputContainer} value={selectedMate} onChange={handleInputChange} onClick={() => setShowDropdown(true)} />
      {showDropdown && (
        <ul className={styles.dropdownList}>
          {filteredList.map((mate) => (
            <li key={mate.guardianId} className={styles.dropdownItem} onClick={() => handleSelectMate(mate.nickname)}>
              {mate.nickname}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectMateDropdown;
