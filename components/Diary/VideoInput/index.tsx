import { useState } from "react";
import { FieldValues, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { IoIosCloseCircle } from "react-icons/io";
import * as styles from "./style.css";

const VideoInput = ({ register, setValue }: { register: UseFormRegister<FieldValues>; setValue: UseFormSetValue<FieldValues> }) => {
  const [previewVideo, setPreviewVideo] = useState("");

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || !files[0]) return;
    setPreviewVideo(URL.createObjectURL(files[0]));
  };

  const deleteVideo = () => {
    setPreviewVideo("");
    setValue("video", null);
  };
  return (
    <div className={styles.root}>
      <label className={styles.label}>동영상</label>
      <div className={styles.container}>
        <label htmlFor="video" className={styles.input}>
          <AiOutlineVideoCameraAdd className={styles.addIcon} width={80} height={80} />
        </label>
        <input id="video" style={{ display: "none" }} type="file" accept="video/*" {...register("video")} onChange={handleVideoChange} />
        {previewVideo && (
          <div style={{ position: "relative", width: "7rem", height: "7rem" }}>
            <video className={styles.video} src={previewVideo} autoPlay />
            <IoIosCloseCircle className={styles.closeIcon} onClick={deleteVideo} />
          </div>
        )}
      </div>
      <p className={styles.p}>동영상 최대 1개 (5MB 제한) </p>
    </div>
  );
};

export default VideoInput;
