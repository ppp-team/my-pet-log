"use client";

import KebabIcon from "@/public/icons/kebab.svg?url";
import LikeIcon from "@/public/icons/like.svg";
import Modal from "@/app/_components/Modal";
import { useModal } from "@/app/_hooks/useModal";
import Image from "next/image";
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import * as styles from "./style.css";
import "./swiper.css";
import SendIcon from "@/public/icons/send.svg?url";
import BackHeader from "@/app/_components/BackHeader";
import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { deleteDiary, getComments, getDiary } from "@/app/_api/diary";
import { Comment } from "@/app/_types/diary/type";
const COMMENT_DATA = [
  {
    commentId: 4,
    content: "eotrmfdmfekqslek",
    createdAt: "3시간",
    likeCount: 0,
    isCurrentUserLiked: false,
    writer: {
      id: "thdefn5519",
      nickname: "하이",
      isCurrentUser: false,
    },
    taggedUsers: [
      {
        id: "abcde5578",
        nickname: "하이루",
        isCurrentUser: false,
      },
    ],
  },
  {
    commentId: 7,
    content: "eotrmfdmfekqslek",
    createdAt: "2시간",
    likeCount: 0,
    isCurrentUserLiked: false,
    writer: {
      id: "thdefn5519",
      nickname: "하이",
      isCurrentUser: true,
    },
    taggedUsers: [
      {
        id: "abcde5578",
        nickname: "하이루",
        isCurrentUser: false,
      },
    ],
  },
];
const diary = {
  diaryId: 43,
  title: "오늘은 공원에서 산책을 했어요",
  content:
    "날씨가 좋아서 근처 공원에서 김밥 먹으면서 날씨가 좋아서 근처 공원에서 김밥 먹으면서 날씨가 좋아서 근처 공원에서 김밥 먹으면서 날씨가 좋아서 근처 공원에서 김밥 먹으면서 날씨가 좋아서 근처 공원에서 김밥 먹으면서 날씨가 좋아서 근처 공원에서 김밥 먹으면서 날씨가 좋아서 근처 공원에서 김밥 먹으면서 날씨가 좋아서 근처 공원에서 김밥 먹으면서",
  date: "2024.02.01",
  images: [
    "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/4arX/image/rZ1xSXKCJ4cd-IExOYahRWdrqoo.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Golde33443.jpg/560px-Golde33443.jpg",
    "https://i.namu.wiki/i/KU-AvOeaSMn1tXrd1KXYfLh7nEjlh2YeFOiRvZXkI8IZxaXx9fcf85CP3KeBVyhqO8fj28_udHMczlm7-T4QjMeOoLaCyUZ-XInhsLSFBYO-ggjAaQ5Y8DoQUEEePlJSMHBBE6cbRe_2_N9B-CO3fw.webp",
  ],
  isCurrentUserLiked: false,
  likeCount: 24,
  petType: "말티즈",
  petAge: "4개월",
  writer: {
    id: "thdefn5519",
    nickname: "해피지은",
    profilePath: null,
    isCurrentUser: true,
  },
  commentCount: 0,
};

const Comment = ({ comment }: { comment: Comment }) => {
  const [isKebabOpen, setIsKebabOpen] = useState(false);
  const { isModalOpen, openModalFunc, closeModalFunc } = useModal();

  const deleteComment = () => {
    //댓글 삭제 api
  };

  return (
    <>
      <div className={styles.commentContainer}>
        <div style={{ backgroundImage: `url()` }} className={styles.profileImage} />
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
      <div>{isModalOpen && <Modal text="정말 댓글을 삭제하시겠습니까?" buttonText="삭제" onClick={deleteComment} onClose={closeModalFunc} />}</div>
    </>
  );
};
const petId = 2;

const DiaryDetailPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isKebabOpen, setIsKebabOpen] = useState(false);
  const { isModalOpen, openModalFunc, closeModalFunc } = useModal();
  const queryClient = useQueryClient();
  const { _id: diaryId } = useParams();

  const { data: diary } = useQuery({ queryKey: ["diary", { petId, diaryId }], queryFn: () => getDiary({ petId, diaryId }) });
  console.log(diary);
  // const { data: comments, fetchNextPage } = useInfiniteQuery({
  //   queryKey: ["comments", { petId, diaryId }],
  //   queryFn: () => getComments({ petId, diaryId }),
  //   initialPageParam: 0,
  //   getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => (lastPage?.last ? undefined : lastPageParam + 1),
  // });
  // const deleteDiaryMutation = useMutation({
  //   mutationFn: () => deleteDiary({ petId, diaryId }),
  //   onSuccess: () => {
  //     // queryClient.invalidateQueries({ queryKey: ["diary", { petId, diaryId }] });
  //     console.log("delete");
  //   },
  // });
  // console.log(comments);
  if (!diary) return;

  // const deleteDiary = () => {
  //   //일기 삭제 api
  // };

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
          {COMMENT_DATA.map((comment) => (
            <Comment comment={comment} key={comment.commentId} />
          ))}
          <div className={styles.commentInputContainer}>
            <div style={{ backgroundImage: `url()` }} className={styles.profileImage} />
            <div style={{ width: "100%", position: "relative" }}>
              <input placeholder="댓글을 남겨주세요" className={styles.commentInput} />
              <Image src={SendIcon} alt="send icon" width={20} height={20} className={styles.sendIcon} />
            </div>
          </div>
        </section>
        {isModalOpen && <Modal text="정말 일기를 삭제하시겠습니까?" buttonText="삭제" onClick={deleteDiaryMutation.mutate} onClose={closeModalFunc} />}
      </div>
    </>
  );
};

export default DiaryDetailPage;
