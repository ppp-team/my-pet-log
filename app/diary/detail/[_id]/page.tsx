"use client";

import KebabIcon from "@/public/icons/kebab.svg?url";
import LikeIcon from "@/public/icons/like.svg";
import Modal from "@/app/_components/Modal";
import { useModal } from "@/app/_hooks/useModal";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import * as styles from "./style.css";
import "./swiper.css";
import SendIcon from "@/public/icons/send.svg?url";
import BackHeader from "@/app/_components/BackHeader";
import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import { deleteComment, deleteDiary, getComments, getDiary, postComment } from "@/app/_api/diary";
import { Comment } from "@/app/_types/diary/type";
import { showToast } from "@/app/_components/Toast";

const petId = 2;

const Comment = ({ comment, diaryId }: { comment: Comment; diaryId: string | string[] }) => {
  const [isKebabOpen, setIsKebabOpen] = useState(false);
  const { isModalOpen, openModalFunc, closeModalFunc } = useModal();
  const queryClient = useQueryClient();

  //댓글 삭제
  const deleteCommentMutation = useMutation({
    mutationFn: (commentId: number) => deleteComment({ petId, commentId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", { petId, diaryId }] });
      showToast("댓글을 삭제했습니다.", true);
    },
    onError: (e) => {
      console.log(e.message);
      showToast("댓글 삭제에 실패했습니다.", false);
    },
  });

  return (
    <>
      <div className={styles.commentContainer}>
        <div style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGE_PREFIX}${comment.writer.profilePath})` }} className={styles.profileImage} />
        <div className={styles.commentMain}>
          <div className={styles.commentHeader}>
            <p style={{ fontSize: "1.4rem", fontWeight: "700" }}>
              {comment.writer.nickname} <span style={{ color: " #A4A4A4", fontWeight: "400" }}>{comment.createdAt}</span>
            </p>
            {comment.writer.isCurrentUser && (
              <div onBlur={() => setIsKebabOpen(false)} tabIndex={1} style={{ position: "relative" }}>
                <Image src={KebabIcon} alt="kebab icon" width={24} height={24} onClick={() => setIsKebabOpen(!isKebabOpen)} />
                {isKebabOpen && (
                  <ul className={styles.commentKebab}>
                    <li className={styles.kebabList}>수정하기</li>
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
          <p className={styles.commentContent}>{comment.content}</p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button className={styles.recommentButton}>답글</button>
            <button className={styles.commentLikeButton}>
              <LikeIcon color={comment.isCurrentUserLiked ? "var(--MainOrange)" : "var(--Gray81)"} />
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

const PAGE_SIZE = 5;

const DiaryDetailPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isKebabOpen, setIsKebabOpen] = useState(false);
  const [commentValue, setCommentValue] = useState("");
  const { isModalOpen, openModalFunc, closeModalFunc } = useModal();
  const queryClient = useQueryClient();
  const { _id: diaryId } = useParams();
  const router = useRouter();

  //일기 상세 조회
  const { data: diary } = useQuery({ queryKey: ["diary", { petId, diaryId }], queryFn: () => getDiary({ petId, diaryId }) });

  //일기 삭제
  const deleteDiaryMutation = useMutation({
    mutationFn: () => deleteDiary({ petId, diaryId }),
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
  const { data: comments, fetchNextPage } = useInfiniteQuery({
    queryKey: ["comments", { petId, diaryId }],
    queryFn: ({ pageParam }) => getComments({ petId, diaryId, page: pageParam, size: PAGE_SIZE }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => (lastPage?.last ? undefined : lastPageParam + 1),
  });

  //댓글 생성
  const postCommentMutation = useMutation({
    mutationFn: (content: string) => postComment({ petId, diaryId, content }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", { petId, diaryId }] });
      setCommentValue("");
      showToast("댓글을 생성했습니다.", true);
    },
    onError: () => {
      showToast("댓글 생성에 실패했습니다.", false);
    },
  });

  const handleCommentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCommentValue(e.target.value);
  };

  const handlePostComment = () => {
    if (commentValue.trim() == "") return;
    postCommentMutation.mutate(commentValue);
  };
  if (!diary) return;

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
                  <li className={styles.kebabList}>수정하기</li>
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
          {diary.images.length > 0 && (
            <>
              <div className={styles.swiperFraction}>
                {currentPage + 1}/{diary.images.length}
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
                      <div className={styles.image} style={{ backgroundImage: `url(${image.path})` }}></div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className={styles.profile}>
                <div style={{ display: "flex", gap: "0.9rem", alignItems: "center" }}>
                  <div style={{ backgroundImage: `url(https://mypetlog.s3.ap-northeast-2.amazonaws.com/${diary.writer.profilePath}` }} className={styles.profileImage} />
                  <p style={{ fontSize: "1.4rem", fontWeight: "700" }}>{diary.writer.nickname}</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <LikeIcon color={diary.isCurrentUserLiked ? "var(--MainOrange)" : "var(--Gray81)"} style={{ cursor: "pointer" }} />
                  <p style={{ fontSize: "1.4rem", color: "var(--Gray81)" }}>{diary.likeCount}</p>
                </div>
              </div>
            </>
          )}

          <p className={styles.content}>{diary.content}</p>
        </section>

        <section>
          <div className={styles.commentsCount}>댓글({diary.commentCount})</div>
          {comments?.pages.map((v) => v?.content.map((comment) => <Comment diaryId={diaryId} comment={comment} key={comment.commentId} />))}
          <button onClick={() => fetchNextPage()}>댓글 더 불러오기</button>
          <div className={styles.commentInputContainer}>
            <div style={{ backgroundImage: `url()` }} className={styles.profileImage} />
            <div style={{ width: "100%", position: "relative" }}>
              <input placeholder="댓글을 남겨주세요" className={styles.commentInput} onChange={handleCommentChange} value={commentValue} />
              <Image src={SendIcon} alt="send icon" width={20} height={20} className={styles.sendIcon} onClick={handlePostComment} />
            </div>
          </div>
        </section>
        {isModalOpen && <Modal text="정말 일기를 삭제하시겠습니까?" buttonText="삭제" onClick={deleteDiaryMutation.mutate} onClose={closeModalFunc} />}
      </div>
    </>
  );
};

export default DiaryDetailPage;
