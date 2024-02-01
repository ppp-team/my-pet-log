import { useState } from "react";
import * as styles from "./style.css";
import { FieldValues, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { IoIosCloseCircle } from "react-icons/io";
import { useModal } from "@/hooks/useModal";
import Modal from "@/components/@common/Modal";
import { LuImagePlus, LuImageOff } from "react-icons/lu";
import { DragDropContext, Droppable, Draggable, DropResult } from "@hello-pangea/dnd";

interface ImagesType {
  name: string;
  file: File;
  url: string;
}
const MAX_IMAGES = 10;

export interface InputProps {
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
}

const ImageInput = ({ register, setValue }: InputProps) => {
  const [images, setImages] = useState<ImagesType[]>([]);
  const { isModalOpen, openModalFunc, closeModalFunc } = useModal();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    if (files?.length + images.length > MAX_IMAGES) {
      openModalFunc();
      return;
    }
    for (let i = 0; i < files?.length; i++) {
      if (images.filter((v) => v.name === files[i].name).length > 0) break; //같은 이미지는 무시함

      setImages((prev) => [...prev, { name: files[i].name, file: files[i], url: URL.createObjectURL(files[i]) }]);
    }
  };

  const deleteImage = (name: string) => {
    setImages((prev) => prev.filter((v) => v.name !== name));
    setValue("image", null);
  };

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;
    if (!destination) return; //드래그앤드랍 컨테이너 벗어났을 때
    if (source.index === destination.index) return; //움직임 변화가 없을 때

    const newData = images.slice();
    const el = newData.splice(source.index, 1)[0];
    newData.splice(destination.index, 0, el);

    setImages([...newData]);
  };

  return (
    <>
      <div className={styles.root}>
        <label className={styles.label}>이미지</label>
        <div className={styles.container}>
          <input
            id="image"
            style={{ display: "none" }}
            type="file"
            multiple
            accept="image/*"
            {...register("image")}
            onChange={handleImageChange}
            disabled={images.length >= MAX_IMAGES}
          />{" "}
          <label htmlFor="image" className={`${styles.input} ${images.length >= MAX_IMAGES && styles.disabledInput}`}>
            {images.length >= MAX_IMAGES ? <LuImageOff className={styles.addIcon} /> : <LuImagePlus className={styles.addIcon} />}
          </label>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="one" direction="horizontal">
              {(provided) => (
                <div className={styles.container} {...provided.droppableProps} ref={provided.innerRef}>
                  {images.map((image, index) => {
                    return (
                      <Draggable draggableId={String(image.name)} index={index} key={image.name}>
                        {(provided) => (
                          <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
                            <div className={styles.preview} style={{ backgroundImage: `url(${image.url})` }}>
                              <IoIosCloseCircle className={styles.closeIcon} onClick={() => deleteImage(image.name)} />
                            </div>
                          </div>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
        <p className={styles.p}>
          이미지 최대 {MAX_IMAGES}개 중 {images.length}개
        </p>
        {isModalOpen && (
          <Modal>
            <div className={styles.error}>
              최대 이미지 수 {MAX_IMAGES}개를 초과했습니다.<button onClick={closeModalFunc}>닫기</button>
            </div>
          </Modal>
        )}
      </div>
    </>
  );
};

export default ImageInput;
