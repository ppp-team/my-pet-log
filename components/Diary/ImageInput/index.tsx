import { useState } from "react";
import * as styles from "./style.css";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { IoIosCloseCircle } from "react-icons/io";
import { useModal } from "@/hooks/useModal";
import Modal from "@/components/@common/Modal";

interface PreviewImage {
  name: string;
  url: string;
}
const ImageInput = ({ register }: { register: UseFormRegister<FieldValues> }) => {
  const [images, setImages] = useState<File[]>([]);
  const [previewImage, setPreviewImage] = useState<PreviewImage[]>([]);
  const { isModalOpen, openModalFunc, closeModalFunc } = useModal();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    if (files?.length + images.length > 10) {
      openModalFunc("error");
      return;
    }
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
    <div className={styles.root}>
      <label className={styles.label}>이미지</label>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <input className={styles.input} type="file" multiple accept="image/*" {...register("image")} onChange={handleImageChange} disabled={images.length >= 10} />
        </div>
        {previewImage &&
          previewImage.map((image) => {
            return (
              <div draggable={true} key={image.name} className={styles.wrapper} style={{ backgroundImage: `url(${image.url})` }}>
                <IoIosCloseCircle className={styles.closeIcon} onClick={() => deleteImage(image.name)} />
              </div>
            );
          })}
      </div>
      <p className={styles.p}>이미지 최대 10개 중 {images.length}개</p>
      {isModalOpen && (
        <Modal>
          <div className={styles.error}>
            최대 이미지 수 10개를 초과했습니다.<button onClick={closeModalFunc}>닫기</button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ImageInput;
