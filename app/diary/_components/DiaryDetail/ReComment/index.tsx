import { deleteComment, postCommentLike, putComment } from "@/app/_api/diary";
import Modal from "@/app/_components/Modal";
import { showToast } from "@/app/_components/Toast";
import { useModal } from "@/app/_hooks/useModal";
import { getImagePath } from "@/app/_utils/getPersonImagePath";
import KebabIcon from "@/public/icons/kebab.svg?url";
import LikeIcon from "@/public/icons/like.svg";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import * as styles from "./style.css";

interface ReCommentProps {
  reply: {
    commentId: number;
    content: string;
    createdAt: string;
    likeCount: number;
    isCurrentUserLiked: boolean;
    writer: {
      id: string;
      nickname: string;
      profilePath: string;
      isCurrentUser: boolean;
    };
  };
  ancestorId: number;
}

const ReComment = ({ reply, ancestorId }: ReCommentProps) => {
  const { isModalOpen, openModalFunc, closeModalFunc } = useModal();
  const [isKebabOpen, setIsKebabOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newCommentValue, setNewCommentValue] = useState("");
  const queryClient = useQueryClient();

  const deleteReCommentMutation = useMutation({
    mutationFn: () => deleteComment({ commentId: reply.commentId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reComments", { ancestorId }] });
      showToast("대댓글을 삭제했습니다.", true);
      closeModalFunc();
    },
    onError: () => {
      showToast("대댓글 삭제에 실패했습니다.", false);
    },
  });

  const putReCommentMutation = useMutation({
    mutationFn: () => putComment({ commentId: reply.commentId, content: newCommentValue }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reComments", { ancestorId }] });
      showToast("대댓글을 수정했습니다.", true);
      setIsEditing(false);
    },
    onError: () => {
      showToast("대댓글 수정에 실패했습니다.", false);
    },
  });

  const postReCommentLikeMutation = useMutation({
    mutationFn: () => postCommentLike({ commentId: reply.commentId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reComments", { ancestorId }] });
    },
    onError: () => {
      showToast("대댓글 좋아요 실패", false);
    },
  });

  const handleEditClick = () => {
    setIsEditing(true);
    setIsKebabOpen(false);
    setNewCommentValue(reply.content);
  };

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewCommentValue(e.target.value);
  };

  return (
    <div className={styles.commentContainer}>
      <Image className={styles.profileImage} src={getImagePath(reply.writer.profilePath)} alt="Reply author's profile" width={24} height={24} />
      <div className={styles.commentMain}>
        <div className={styles.commentHeader}>
          <p style={{ fontSize: "1.4rem", fontWeight: "700" }}>
            {reply.writer.nickname} <span style={{ color: "var(--GrayA4)", fontWeight: "400" }}>{reply.createdAt}</span>
          </p>
          {reply.writer.isCurrentUser && (
            <div onBlur={() => setIsKebabOpen(false)} tabIndex={1} style={{ position: "relative" }}>
              <Image src={KebabIcon} alt="kebab icon" width={24} height={24} onClick={() => setIsKebabOpen(!isKebabOpen)} />
              {isKebabOpen && (
                <ul className={styles.commentKebab}>
                  <li className={styles.kebabList} onClick={handleEditClick}>
                    수정하기
                  </li>
                  <li
                    className={styles.kebabList}
                    onClick={() => {
                      openModalFunc();
                      setIsKebabOpen(false);
                    }}
                  >
                    삭제하기
                  </li>
                </ul>
              )}
            </div>
          )}
        </div>
        {isEditing ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (newCommentValue === reply.content) return;
              putReCommentMutation.mutate();
            }}
          >
            <textarea className={styles.commentTextarea} value={newCommentValue} onChange={handleCommentChange} />
            <button className={styles.commentEditButton} type="submit">
              저장
            </button>
            <button className={styles.commentEditButton} type="button" onClick={() => setIsEditing(false)}>
              취소
            </button>
          </form>
        ) : (
          <pre className={styles.commentContent}>{reply.content}</pre>
        )}

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button className={`${styles.commentLikeButton} ${reply.isCurrentUserLiked ? styles.LikeIcon : ""}`} onClick={() => postReCommentLikeMutation.mutate()}>
            <LikeIcon color={reply.isCurrentUserLiked ? "var(--MainOrange)" : "var(--Gray81)"} />
            {reply.likeCount}
          </button>
        </div>
      </div>
      {isModalOpen && <Modal text="정말 대댓글을 삭제하시겠습니까?" buttonText="삭제" onClick={() => deleteReCommentMutation.mutate()} onClose={closeModalFunc} />}
    </div>
  );
};

export default ReComment;
