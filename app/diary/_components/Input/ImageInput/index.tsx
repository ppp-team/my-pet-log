import Modal from "@/app/_components/Modal";
import { useModal } from "@/app/_hooks/useModal";
import { DragDropContext, Draggable, DropResult, Droppable } from "@hello-pangea/dnd";
import { useEffect, useState } from "react";
import { FieldValues, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { IoIosCloseCircle } from "react-icons/io";
import { LuImageOff, LuImagePlus } from "react-icons/lu";
import * as styles from "./style.css";
import { useAtom } from "jotai";
import { deletedImagesAtom, diaryImagesAtom } from "@/app/_states/atom";
import { FormInput } from "@/app/diary/_components/Form/EditForm";
import { DiaryMediaType } from "@/app/_types/diary/type";

export interface ImagesType {
  name: string;
  file: File;
  url: string;
}
const MAX_IMAGES = 10;

export interface InputProps {
  register: UseFormRegister<FormInput>;
  setValue: UseFormSetValue<FormInput>;
  oldMedia?: DiaryMediaType[];
}

const ImageInput = ({ register, setValue, oldMedia }: InputProps) => {
  const [images, setImages] = useAtom(diaryImagesAtom);
  const [, setDeletedImages] = useAtom(deletedImagesAtom);
  const [oldData, setOldData] = useState(oldMedia);

  useEffect(() => {
    //edit용 이전 데이터
    setOldData(oldMedia);
  }, [oldMedia]);

  const { isModalOpen, openModalFunc, closeModalFunc } = useModal();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    if (files?.length + images.length + (oldData ? oldData?.length : 0) > MAX_IMAGES) {
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
    setValue("images", null);
  };

  const deleteOldImage = (mediaId: number) => {
    setOldData((prev) => prev?.filter((v) => v.mediaId !== mediaId));
    setDeletedImages((prev) => [...prev, mediaId]);
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
            id="images"
            style={{ display: "none" }}
            type="file"
            multiple
            accept="image/*"
            {...register("images")}
            onChange={handleImageChange}
            // disabled={images.length >= MAX_IMAGES}
          />
          <label htmlFor="images" className={`${styles.input} ${images.length + (oldData ? oldData.length : 0) >= MAX_IMAGES && styles.disabledInput}`}>
            {images.length + (oldData ? oldData.length : 0) >= MAX_IMAGES ? <LuImageOff className={styles.addIcon} /> : <LuImagePlus className={styles.addIcon} />}
          </label>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="one" direction="horizontal">
              {(provided) => (
                <div className={styles.container} {...provided.droppableProps} ref={provided.innerRef}>
                  {oldData &&
                    oldData.map((v) => {
                      return (
                        <div key={v.mediaId}>
                          <div className={styles.preview} style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGE_PREFIX}${v.path})` }}>
                            <IoIosCloseCircle className={styles.closeIcon} onClick={() => deleteOldImage(v.mediaId)} />
                          </div>
                        </div>
                      );
                    })}
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
          이미지 최대 {MAX_IMAGES}개 중 {images.length + (oldData ? oldData.length : 0)}개
        </p>
        {isModalOpen && <Modal text="최대 이미지 수 10개를 초과했습니다." onClick={closeModalFunc} buttonText="확인" onClose={closeModalFunc} />}
      </div>
    </>
  );
};

export default ImageInput;
