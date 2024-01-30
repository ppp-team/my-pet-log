import { useState } from "react";
import * as styles from "./style.css";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { IoIosCloseCircle } from "react-icons/io";
import { useModal } from "@/hooks/useModal";
import Modal from "@/components/@common/Modal";

const VideoInput = ({ register }: { register: UseFormRegister<FieldValues> }) => {
  const [previewVideo, setPreviewVideo] = useState("");

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    setPreviewVideo(URL.createObjectURL(files[0]));
  };

  const deleteVideo = () => {
    setPreviewVideo("");
  };
  return (
    <div className={styles.root}>
      <label htmlFor="video" className={styles.label}>
        동영상
      </label>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <input id="video" className={styles.input} type="file" accept="video/*" {...register("video")} onChange={handleVideoChange} disabled={Boolean(previewVideo)} />
        </div>
        {previewVideo && (
          <video className={styles.wrapper} src={previewVideo}>
            <IoIosCloseCircle className={styles.closeIcon} onClick={deleteVideo} />
          </video>
        )}
      </div>
      <p className={styles.p}>동영상 최대 1개</p>
    </div>
  );
};

export default VideoInput;
