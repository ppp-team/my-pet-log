import { useState } from "react";
import * as styles from "./style.css";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { IoIosCloseCircle } from "react-icons/io";

interface PreviewImage {
  name: string;
  url: string;
}
const ImageInput = ({ register }: { register: UseFormRegister<FieldValues> }) => {
  const [images, setImages] = useState<File[]>([]);
  const [previewImage, setPreviewImage] = useState<PreviewImage[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    console.log(images);
    if (files)
      for (let i = 0; i < files?.length; i++) {
        if (images.filter((v) => v.name === files[i].name).length > 0) {
          break;
        } //같은 이미지는 무시함
        setImages((prev) => [...prev, files[i]]);
        setPreviewImage((prev) => [...prev, { name: files[i].name, url: URL.createObjectURL(files[i]) }]);
      }
  };

  const deleteImage = (name: string) => {
    setImages((prev) => prev.filter((v) => v.name !== name));
    setPreviewImage((prev) => prev.filter((v) => v.name !== name));
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
            return (
              <div key={image.name} className={styles.wrapper} style={{ backgroundImage: `url(${image.url})` }}>
                <IoIosCloseCircle className={styles.closeIcon} onClick={() => deleteImage(image.name)} />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ImageInput;
