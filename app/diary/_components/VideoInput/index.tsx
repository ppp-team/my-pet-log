import { InputProps } from "@/app/diary/_components/ImageInput";
import * as inputStyles from "@/app/diary/_components/ImageInput/style.css";
import { useState } from "react";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { IoIosCloseCircle } from "react-icons/io";
import * as styles from "./style.css";

const VideoInput = ({ register, setValue }: InputProps) => {
  const [previewVideo, setPreviewVideo] = useState("");

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || !files[0]) return;

    setPreviewVideo(URL.createObjectURL(files[0]));
    setValue("video", files[0]);
  };

  const deleteVideo = () => {
    setPreviewVideo("");
    setValue("video", null);
  };
  return (
    <div className={inputStyles.root}>
      <label className={inputStyles.label}>동영상</label>
      <div className={inputStyles.container}>
        <label htmlFor="video" className={inputStyles.input}>
          <AiOutlineVideoCameraAdd className={inputStyles.addIcon} width={80} height={80} />
        </label>
        <input id="video" style={{ display: "none" }} type="file" accept="video/*" {...register("video")} onChange={handleVideoChange} />
        {previewVideo && (
          <div style={{ position: "relative", width: "10rem", height: "10rem" }}>
            <video className={styles.video} src={previewVideo} autoPlay />
            <IoIosCloseCircle className={inputStyles.closeIcon} onClick={deleteVideo} />
          </div>
        )}
      </div>
      <p className={inputStyles.p}>동영상 최대 1개 (5MB 제한) </p>
    </div>
  );
};

export default VideoInput;
