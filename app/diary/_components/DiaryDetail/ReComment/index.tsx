import React from "react";
import * as styles from "./style.css";
import Image from "next/image";
import LikeIcon from "@/public/icons/like.svg";

const ReComment = ({ reply }) => {
  return (
    <div className={styles.replyContainer}>
      <div className={styles.commentHeader}>
        <Image className={styles.profileImage} src={reply.writer.profilePath} alt="Reply author's profile" width={24} height={24} />
        <span>{reply.writer.nickname}</span>
      </div>
      <p className={styles.replyContent}>{reply.content}</p>
      <div>
        <button>
          <LikeIcon /> {reply.likeCount}
        </button>
      </div>
    </div>
  );
};

export default ReComment;
