import { getImagePath } from "@/app/_utils/getPersonImagePath";
import { GetReCommentsResponse } from "@/app/_types/diary/type";
import KebabIcon from "@/public/icons/kebab.svg?url";
import LikeIcon from "@/public/icons/like.svg";
import Image from "next/image";
import Modal from "@/app/_components/Modal";
import { showToast } from "@/app/_components/Toast";
import { useModal } from "@/app/_hooks/useModal";
import { ChangeEvent, useState } from "react";
import * as styles from "./style.css";

type ReplyType = GetReCommentsResponse["content"][number];

interface ReCommentProps {
  reply: ReplyType;
}

const ReComment = ({ reply }: ReCommentProps) => {
  const [isKebabOpen, setIsKebabOpen] = useState(false);
  const { isModalOpen, openModalFunc, closeModalFunc } = useModal();
  const [isEditing, setIsEditing] = useState(false);
  const [newCommentValue, setNewCommentValue] = useState("");

  // //대댓글 삭제
  // const deleteCommentMutation = useMutation({
  //   mutationFn: (commentId: number) => deleteComment({ commentId }),
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ["comments", { petId, diaryId }] });
  //     showToast("댓글을 삭제했습니다.", true);
  //     closeModalFunc();

  //     const newDiaryData = queryClient.getQueryData<GetDiaryResponse>(["diary", { petId, diaryId }]);
  //     if (newDiaryData) {
  //       newDiaryData.commentCount = newDiaryData.commentCount - 1;
  //       queryClient.setQueryData(["diary", { petId, diaryId }], newDiaryData);
  //     }
  //   },
  //   onError: () => {
  //     showToast("댓글 삭제에 실패했습니다.", false);
  //   },
  // });

  // //대댓글 수정
  // const putCommentMutation = useMutation({
  //   mutationFn: () => putComment({ commentId: comment.commentId, content: newCommentValue }),
  //   onSuccess: () => {
  //     const newComments = { ...queryClient.getQueryData<InfiniteData<GetCommentsResponse>>(["comments", { petId, diaryId }]) };
  //     if (newComments.pages) {
  //       newComments.pages[pageNum].content[contentNum].content = newCommentValue;
  //       queryClient.setQueryData(["comments", { petId, diaryId }], newComments);
  //     }

  //     showToast("댓글을 수정했습니다.", true);
  //   },
  //   onError: () => {
  //     showToast("댓글 수정에 실패했습니다.", false);
  //   },
  // });

  // //대댓글 좋아요
  // const postCommentLikeMutation = useMutation({
  //   mutationFn: () => postCommentLike({ commentId: comment.commentId }),
  // });

  // const handleCommentLike = () => {
  //   postCommentLikeMutation.mutate();

  //   const newComments = { ...queryClient.getQueryData<InfiniteData<GetCommentsResponse>>(["comments", { petId, diaryId }]) };
  //   if (newComments.pages) {
  //     newComments.pages[pageNum].content[contentNum].isCurrentUserLiked = !comment?.isCurrentUserLiked;
  //     newComments.pages[pageNum].content[contentNum].likeCount = comment?.isCurrentUserLiked ? comment.likeCount + 1 : comment.likeCount - 1;
  //     queryClient.setQueryData(["comments", { petId, diaryId }], newComments);
  //   }
  // };

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewCommentValue(e.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setIsKebabOpen(false);
    setNewCommentValue(reply.content.replaceAll("<br>", "\n"));
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
              setIsEditing(false);
              if (newCommentValue === reply.content) return;
              putCommentMutation.mutate();
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

        {/* <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button className={styles.recommentButton}>답글</button>
          <button className={`${styles.commentLikeButton} ${reply.isCurrentUserLiked ? styles.LikeIcon : ""}`} onClick={handleCommentLike}>
            <LikeIcon color={reply.isCurrentUserLiked ? "var(--MainOrange)" : "var(--Gray81)"} />
            {reply.likeCount}
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ReComment;
