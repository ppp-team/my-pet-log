import { useState } from "react";
import * as styles from "./style.css";
import { FieldValues, UseFormRegister } from "react-hook-form";

const ImageInput = ({ register }: { register: UseFormRegister<FieldValues> }) => {
  const [images, setImages] = useState<File[]>([]);
  const [previewImage, setPreviewImage] = useState<string[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files)
      for (let i = 0; i < files?.length; i++) {
        setImages((prev) => [...prev, files[i]]);
        setPreviewImage((prev) => [...prev, URL.createObjectURL(files[i])]);
      }
  };

  return (
    <>
      <label>이미지</label>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <input className={styles.input} type="file" multiple accept="image/*" {...register("image")} onChange={handleImageChange} />
        </div>
        {previewImage &&
          previewImage.map((image) => {
            return <div key={image} className={styles.wrapper} style={{ backgroundImage: `url(${image})` }}></div>;
          })}
      </div>
    </>
  );
};

export default ImageInput;
