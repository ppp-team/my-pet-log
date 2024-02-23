import { deletedImagesAtom } from "@/app/_states/atom";
import { InputProps } from "@/app/diary/_components/Input/ImageInput";
import * as inputStyles from "@/app/diary/_components/Input/ImageInput/style.css";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { IoIosCloseCircle } from "react-icons/io";
import * as styles from "./style.css";

const VideoInput = ({ register, setValue, oldMedia }: InputProps) => {
  const [previewVideo, setPreviewVideo] = useState("");
  const [, setDeletedVideo] = useAtom(deletedImagesAtom);
  const [oldData, setOldData] = useState(oldMedia);

  useEffect(() => {
    //input은 기본으로 null이 아니라 File[]이므로 초기화해줌
    setValue("video", null);
  }, []);

  useEffect(() => {
    //edit용 이전 데이터
    setOldData(oldMedia);
  }, [oldMedia]);

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || !files[0]) return;

    setPreviewVideo(URL.createObjectURL(files[0]));
    setValue("video", files[0]);

    if (oldData && oldData.length > 0) {
      //비디오는 한 개만 첨부 가능하므로 oldData삭제
      setDeletedVideo((prev) => [...prev, oldData[0].mediaId]);
      setOldData([]);
    }
  };

  const deleteVideo = () => {
    setPreviewVideo("");
    setValue("video", null);
  };

  const deleteOldVideo = () => {
    if (oldData) setDeletedVideo((prev) => [...prev, oldData[0].mediaId]);
    setOldData([]);
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
        {oldData && oldData.length > 0 && (
          <div style={{ position: "relative", width: "10rem", height: "10rem" }}>
            <video className={styles.video} src={`${process.env.NEXT_PUBLIC_IMAGE_PREFIX}${oldData[0].path}`} autoPlay />
            <IoIosCloseCircle className={inputStyles.closeIcon} onClick={deleteOldVideo} />
          </div>
        )}
      </div>
      <p className={inputStyles.p}>동영상 최대 1개 (5MB 제한) </p>
    </div>
  );
};

export default VideoInput;
