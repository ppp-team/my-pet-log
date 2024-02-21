import { petOptions } from "@/public/data/petOptions";
import DropdownIcon from "@/public/icons/drop-down-icon.svg";
import * as styles from "./style.css";
import { useState, useEffect, useRef } from "react";
import { IFormInput } from "@/app/_components/PetRegister";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";

interface TypeBreedProps {
  register: UseFormRegister<IFormInput>;
  setValue: UseFormSetValue<IFormInput>;
}

const TypeBreedSelection = ({ setValue, register }: TypeBreedProps) => {
  const [breedOpen, setBreedOpen] = useState(false); //모달상태
  const [typeOpen, setTypeOpen] = useState(false); //모달상태
  const dropdownRef = useRef<HTMLUListElement>(null); //모달 외부 클릭시 닫히도록
  const [selectedType, setSelectedType] = useState(""); //타입 선택 반영
  const [selectedBreed, setSelectedBreed] = useState(""); //품종 선택 반영

  //드롭다운 외부 클릭시 닫히게 하기
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setBreedOpen(false);
        setTypeOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  //드롭다운
  useEffect(() => {
    setSelectedBreed("");
    setValue("breed", "");
  }, [selectedType, setValue]);

  const handleTypeClick = (type: string) => {
    setValue("type", type);
    setSelectedType(type);
    setSelectedBreed("");
    setTypeOpen((prev) => !prev);
  };

  const handleBreedClick = (breed: string) => {
    setValue("breed", breed);
    setSelectedBreed(breed);
    setBreedOpen((prev) => !prev);
  };

  return (
    <div>
      {/* 타입 */}
      <label className={styles.label}>타입*</label>
      <div>
        <button className={`${styles.selectBox} ${typeOpen ? styles.selectBoxOpen : ""}`} onClick={() => setTypeOpen(true)}>
          {selectedType || "타입을 선택하세요"}
          <DropdownIcon className={`${styles.dropdownIcon} ${typeOpen ? styles.dropdownIconOpen : ""}`} />
        </button>
        {typeOpen && (
          <ul className={styles.optionsList} ref={dropdownRef}>
            {Object.keys(petOptions).map((type: string, index: number) => (
              <li key={index} value={type}>
                <button type="button" className={styles.optionButton} onClick={() => handleTypeClick(type)} {...register("type")}>
                  {type}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* 품종 */}
      <label className={styles.label}>품종*</label>
      {selectedType !== "기타" && (
        <button className={`${styles.selectBox} ${breedOpen ? styles.selectBoxOpen : ""}`} onClick={() => setBreedOpen(!breedOpen)}>
          {selectedBreed || "품종을 선택하세요"}
          <DropdownIcon className={`${styles.dropdownIcon} ${breedOpen ? styles.dropdownIconOpen : ""}`} />
        </button>
      )}
      {breedOpen && selectedType !== "기타" && (
        <ul className={styles.optionsList} ref={dropdownRef}>
          {petOptions[selectedType]?.map((breed: string, index: number) => (
            <li key={index} value={breed}>
              <button type="button" className={styles.optionButton} onClick={() => handleBreedClick(breed)} {...register("breed")}>
                {breed}
              </button>
            </li>
          ))}
        </ul>
      )}

      {selectedType === "기타" && (
        <div>
          <input
            className={styles.writeInput}
            placeholder="품종을 직접 입력하세요"
            {...register("breed", {
              required: "내용을 입력해주세요",
            })}
            autoFocus
          />
        </div>
      )}
    </div>
  );
};

export default TypeBreedSelection;
