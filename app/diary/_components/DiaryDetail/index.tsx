"use client";

import { deleteComment, deleteDiary, getComments, getDiary, postComment, postCommentLike, postDiaryLike, putComment } from "@/app/_api/diary";
import { getMe } from "@/app/_api/users";
import BackHeader from "@/app/_components/BackHeader";
import Modal from "@/app/_components/Modal";
import { showToast } from "@/app/_components/Toast";
import { useInfiniteScroll } from "@/app/_hooks/useInfiniteScroll";
import { useModal } from "@/app/_hooks/useModal";
import { Comment, GetCommentsResponse, GetDiaryResponse } from "@/app/_types/diary/type";
import { UserType } from "@/app/_types/users/types";
import { getImagePath } from "@/app/_utils/getPersonImagePath";
import { COMMENT_PAGE_SIZE } from "@/app/diary/constant";
import KebabIcon from "@/public/icons/kebab.svg?url";
import LikeIcon from "@/public/icons/like.svg";
import SendIcon from "@/public/icons/send.svg?url";
import { InfiniteData, useInfiniteQuery, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import * as styles from "./style.css";
import "./swiper.css";

interface CommentProps {
  comment: Comment;
  diaryId: number;
  pageNum: number;
  contentNum: number;
  petId: number;
}

const Comment = ({ comment, diaryId, pageNum, contentNum, petId }: CommentProps) => {
  const [isKebabOpen, setIsKebabOpen] = useState(false);
  const { isModalOpen, openModalFunc, closeModalFunc } = useModal();
  const [isEditing, setIsEditing] = useState(false);
  const [newCommentValue, setNewCommentValue] = useState("");
  const queryClient = useQueryClient();

  //댓글 삭제
  const deleteCommentMutation = useMutation({
    mutationFn: (commentId: number) => deleteComment({ commentId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", { petId, diaryId }] });
      // const newComments = { ...queryClient.getQueryData<InfiniteData<GetCommentsResponse>>(["comments", { petId, diaryId }]) };
      // if (newComments.pages) {
      //   newComments.pages[pageNum].content.splice(contentNum, 1);
      //   queryClient.setQueryData(["comments", { petId, diaryId }], newComments);
      // }
      showToast("댓글을 삭제했습니다.", true);
      closeModalFunc();

      const newDiaryData = queryClient.getQueryData<GetDiaryResponse>(["diary", { petId, diaryId }]);
      if (newDiaryData) {
        newDiaryData.commentCount = newDiaryData.commentCount - 1;
        queryClient.setQueryData(["diary", { petId, diaryId }], newDiaryData);
      }
    },
    onError: (e) => {
      showToast("댓글 삭제에 실패했습니다.", false);
    },
  });

  //댓글 수정
  const putCommentMutation = useMutation({
    mutationFn: () => putComment({ commentId: comment.commentId, content: newCommentValue.replaceAll(/(\n|\r\n)/g, "<br>") }),
    onSuccess: () => {
      const newComments = { ...queryClient.getQueryData<InfiniteData<GetCommentsResponse>>(["comments", { petId, diaryId }]) };
      if (newComments.pages) {
        newComments.pages[pageNum].content[contentNum].content = newCommentValue;
        queryClient.setQueryData(["comments", { petId, diaryId }], newComments);
      }

      showToast("댓글을 수정했습니다.", true);
    },
    onError: (e) => {
      showToast("댓글 수정에 실패했습니다.", false);
    },
  });

  //댓글 좋아요
  const postCommentLikeMutation = useMutation({
    mutationFn: () => postCommentLike({ commentId: comment.commentId }),
  });

  const handleCommentLike = () => {
    postCommentLikeMutation.mutate();

    const newComments = { ...queryClient.getQueryData<InfiniteData<GetCommentsResponse>>(["comments", { petId, diaryId }]) };
    if (newComments.pages) {
      newComments.pages[pageNum].content[contentNum].isCurrentUserLiked = !comment?.isCurrentUserLiked;
      newComments.pages[pageNum].content[contentNum].likeCount = comment?.isCurrentUserLiked ? comment.likeCount + 1 : comment.likeCount - 1;
      queryClient.setQueryData(["comments", { petId, diaryId }], newComments);
    }
  };

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewCommentValue(e.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setIsKebabOpen(false);
    setNewCommentValue(comment.content.replaceAll("<br>", "\n"));
  };
  return (
    <>
      <div className={styles.commentContainer}>
        <Image className={styles.profileImage} src={getImagePath(comment.writer.profilePath)} alt="유저 프로필 사진" width={30} height={30} />
        <div className={styles.commentMain}>
          <div className={styles.commentHeader}>
            <p style={{ fontSize: "1.4rem", fontWeight: "700" }}>
              {comment.writer.nickname} <span style={{ color: "var(--GrayA4)", fontWeight: "400" }}>{comment.createdAt}</span>
            </p>
            {comment.writer.isCurrentUser && (
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
                if (newCommentValue === comment.content) return; //변경사항이 없으면 리턴
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
            <pre className={styles.commentContent}>{comment.content.replaceAll("<br>", "\n")}</pre>
          )}

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            {/* <button className={styles.recommentButton}>답글</button> */}
            <button className={`${styles.commentLikeButton} ${comment.isCurrentUserLiked ? styles.LikeIcon : ""}`} onClick={handleCommentLike}>
              <LikeIcon color={comment.isCurrentUserLiked ? "var(--MainOrange)" : "var(--Gray81)"} />
              {comment.likeCount}
            </button>
          </div>
        </div>
      </div>
      <div>
        {isModalOpen && <Modal text="정말 댓글을 삭제하시겠습니까?" buttonText="삭제" onClick={() => deleteCommentMutation.mutate(comment.commentId)} onClose={closeModalFunc} />}
      </div>
    </>
  );
};

const DiaryDetail = ({ petId, diaryId }: { petId: number; diaryId: number }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isKebabOpen, setIsKebabOpen] = useState(false);
  const [commentValue, setCommentValue] = useState("");
  const { isModalOpen, openModalFunc, closeModalFunc } = useModal();
  const queryClient = useQueryClient();
  const router = useRouter();

  //일기 상세 조회
  const { data: diary } = useQuery({ queryKey: ["diary", { petId, diaryId }], queryFn: () => getDiary({ diaryId }) });

  //일기 삭제
  const deleteDiaryMutation = useMutation({
    mutationFn: () => deleteDiary({ diaryId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["diaries", petId] });
      router.push("/diary");
    },
    onError: () => {
      showToast("일기 삭제에 실패했습니다.", false);
      closeModalFunc();
    },
  });

  //댓글 조회
  const {
    data: comments,
    fetchNextPage,
    hasNextPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ["comments", { petId, diaryId }],
    queryFn: ({ pageParam }) => getComments({ diaryId, page: pageParam, size: COMMENT_PAGE_SIZE }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => (lastPage?.last ? undefined : lastPageParam + 1),
  });

  const { targetRef } = useInfiniteScroll({ callbackFunc: fetchNextPage });

  //댓글 생성
  const postCommentMutation = useMutation({
    mutationFn: () => postComment({ diaryId, content: commentValue.replaceAll(/(\n|\r\n)/g, "<br>") }),
    onSuccess: (data: Comment) => {
      //invalidate하는 게 아니라 데이터 추가
      const newComments = queryClient.getQueryData<InfiniteData<GetCommentsResponse>>(["comments", { petId, diaryId }]);
      if (!newComments) return;
      newComments?.pages[0]?.content.unshift(data);
      queryClient.setQueryData(["comments", { petId, diaryId }], newComments);
      setCommentValue("");

      showToast("댓글을 생성했습니다.", true);

      if (diary) {
        const newDiaryData = { ...diary };
        newDiaryData.commentCount = diary?.commentCount + 1;
        queryClient.setQueryData(["diary", { petId, diaryId }], newDiaryData);
      }
    },
    onError: () => {
      showToast("댓글 생성에 실패했습니다.", false);
    },
  });

  //일기 좋아요
  const postDiaryLikeMutation = useMutation({
    mutationFn: () => postDiaryLike({ diaryId }),
  });

  const handleDiaryLike = () => {
    postDiaryLikeMutation.mutate();
    if (!diary) return;
    const newDiary = { ...diary };
    newDiary.isCurrentUserLiked = !diary?.isCurrentUserLiked;
    newDiary.likeCount = diary?.isCurrentUserLiked ? diary.likeCount - 1 : diary.likeCount + 1;
    queryClient.setQueryData(["diary", { petId, diaryId }], newDiary);
  };

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentValue(e.target.value);
  };

  const handlePostComment = () => {
    if (commentValue.trim() == "") return;
    postCommentMutation.mutate();
  };

  const { data: user } = useQuery<UserType>({
    queryKey: ["me"],
    queryFn: () => getMe(),
  });
  if (!diary) return;
  if (!user) return;
  return (
    <>
      <BackHeader title="육아일기" />

      <div className={styles.root}>
        <section className={styles.header}>
          <p className={styles.petInfo}>
            {diary.pet.breed} | {diary.pet.age ?? ""}
          </p>
          <h3 style={{ fontSize: "1.8rem", fontWeight: "600" }}>{diary.title}</h3>
          <p style={{ fontSize: "1.4rem", color: "var(--Gray9A)" }}>{diary.date}</p>
          {diary.writer.isCurrentUser && (
            <div onBlur={() => setIsKebabOpen(false)} tabIndex={1}>
              <Image src={KebabIcon} alt="kebab icon" width={24} height={24} className={styles.kebab} onClick={() => setIsKebabOpen(!isKebabOpen)} />
              {isKebabOpen && (
                <ul className={styles.kebabModal}>
                  <li
                    className={styles.kebabList}
                    onClick={() => {
                      router.push(`/diary/edit/${diary.diaryId}`);
                    }}
                  >
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
        </section>

        <section className={styles.main}>
          {(diary.images.length > 0 || diary.videos.length > 0) && (
            <>
              <div className={styles.swiperFraction}>
                {currentPage + 1}/{diary.images.length + diary.videos.length}
              </div>
              <div onClick={() => setIsKebabOpen(false)}>
                <Swiper
                  onSlideChange={(e) => setCurrentPage(e.activeIndex)}
                  pagination={{
                    dynamicBullets: true,
                  }}
                  modules={[Pagination]}
                >
                  {diary.images.map((image, idx) => (
                    <SwiperSlide key={idx}>
                      <div className={styles.image} style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGE_PREFIX}${image.path})` }}></div>
                    </SwiperSlide>
                  ))}
                  {diary.videos.length > 0 && (
                    <SwiperSlide>
                      <video controls width="250" className={styles.image} autoPlay={true} loop={true}>
                        동영상 재생에 실패했습니다.
                        <source src={`${process.env.NEXT_PUBLIC_IMAGE_PREFIX}${diary.videos[0].path}`} type="video/mp4" />
                      </video>
                    </SwiperSlide>
                  )}
                </Swiper>
              </div>
            </>
          )}

          <div className={styles.profile}>
            <div style={{ display: "flex", gap: "0.9rem", alignItems: "center" }}>
              <Image className={styles.profileImage} src={getImagePath(diary.writer.profilePath)} alt="유저 프로필 사진" width={30} height={30} />
              <p style={{ fontSize: "1.4rem", fontWeight: "700" }}>{diary.writer.nickname}</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <button onClick={handleDiaryLike} className={`${diary.isCurrentUserLiked ? styles.LikeIcon : ""}`}>
                <LikeIcon color={diary.isCurrentUserLiked ? "var(--MainOrange)" : "var(--Gray81)"} style={{ cursor: "pointer" }} />
              </button>
              <p style={{ fontSize: "1.4rem", color: "var(--Gray81)" }}>{diary.likeCount}</p>
            </div>
          </div>
          <p className={styles.content}>{diary.content}</p>
        </section>

        <section>
          <div className={styles.commentsCount}>댓글({diary.commentCount})</div>
          <div style={{ minHeight: "10rem" }}>
            {comments?.pages.map((v, pageNum) =>
              v?.content.map((comment, contentNum) => (
                <Comment diaryId={diaryId} petId={petId} comment={comment} pageNum={pageNum} contentNum={contentNum} key={comment.commentId} />
              )),
            )}
          </div>
          {/* 로딩중이 아니고 다음 페이지가 있을 때 무한스크롤됨 */}
          {!isLoading && hasNextPage && <div ref={targetRef} />}

          <div className={styles.commentInputContainer}>
            <Image className={styles.profileImage} src={getImagePath(user.profilePath)} alt="유저 프로필 사진" width={30} height={30} />
            <div style={{ width: "100%", position: "relative" }}>
              <textarea placeholder="댓글을 남겨주세요" className={styles.commentInput} onChange={handleCommentChange} value={commentValue} />
              <Image src={SendIcon} alt="send icon" width={20} height={20} className={styles.sendIcon} onClick={handlePostComment} />
            </div>
          </div>
        </section>
        {isModalOpen && <Modal text="정말 일기를 삭제하시겠습니까?" buttonText="삭제" onClick={deleteDiaryMutation.mutate} onClose={closeModalFunc} />}
      </div>
    </>
  );
};

export default DiaryDetail;
