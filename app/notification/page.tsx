"use server";

import NoNotification from "./_components/NoNotification/NoNotification";
import HasNotification from "./_components/HasNotification/HasNotification";

const SAMPLE_LIST = [
  {
    id: "1",
    checked: false,
    date: "1일 전",
    type: "초대",
    content: "(소희)님이 (해피) 펫메이트 초대를 수락/거절하셨습니다.",
    thumbnail: "",
  },
  {
    id: "2",
    checked: false,
    date: "1일 전",
    type: "일기",
    content: "(해피)의 일기에 (소희)님이 댓글을 달았습니다.",
    thumbnail: "",
  },
  {
    id: "3",
    checked: false,
    date: "1일 전",
    type: "구독",
    content: "(소희)님이 (은행이)의 일기를 구독하기 시작했습니다.",
    thumbnail: "",
  },
  {
    id: "4",
    checked: true,
    date: "1일 전",
    type: "초대",
    content: "(소희) 님이 (해피) 펫그룹 초대를 수락하였습니다.",
    thumbnail: "",
  },
  {
    id: "5",
    checked: true,
    date: "1일 전",
    type: "초대",
    content: "(소희)님이 (해피) 펫메이트 초대를 수락/거절하셨습니다.",
    thumbnail: "",
  },
  {
    id: "6",
    checked: true,
    date: "1일 전",
    type: "일기",
    content: "(해피)의 일기에 (소희)님이 댓글을 달았습니다.",
    thumbnail: "",
  },
  {
    id: "7",
    checked: true,
    date: "1일 전",
    type: "초대",
    content: "(소희)님이 (은행이)의 일기를 좋아합니다.",
    thumbnail: "",
  },
  {
    id: "8",
    checked: true,
    date: "1일 전",
    type: "초대",
    content: "(소희) 님이 (해피) 펫그룹 초대를 수락하였습니다.",
    thumbnail: "",
  },
  {
    id: "9",
    checked: true,
    date: "1일 전",
    type: "초대",
    content: "(소희)님이 (해피) 펫메이트 초대를 수락/거절하셨습니다.",
    thumbnail: "",
  },
  {
    id: "10",
    checked: true,
    date: "1일 전",
    type: "일기",
    content: "(해피)의 일기에 (소희)님이 댓글을 달았습니다.",
    thumbnail: "",
  },
  {
    id: "11",
    checked: true,
    date: "1일 전",
    type: "일기",
    content: "(소희)님이 (은행이)의 일기를 좋아합니다.",
    thumbnail: "",
  },
  {
    id: "12",
    checked: true,
    date: "1일 전",
    type: "초대",
    content: "(소희) 님이 (해피) 펫그룹 초대를 수락하였습니다.",
    thumbnail: "",
  },
];

const NotificationPage = () => {
  return SAMPLE_LIST ? <HasNotification list={SAMPLE_LIST} /> : <NoNotification />;
};

export default NotificationPage;
