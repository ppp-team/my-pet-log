export const sampleLogList = [
  {
    date: "2024년 2월 3일 토요일",
    tasks: [
      {
        logId: 1,
        isComplete: true,
        isImportant: false,
        taskName: "사료",
        time: "10:00",
        manager: {
          id: "sohee",
          nickname: "초롱스누나",
          isCurrentUser: true,
        },
      },
      {
        logId: 2,
        isComplete: true,
        isImportant: true,
        time: "11:00",
        taskName: "망원 동물병원 진료",
        manager: {
          id: "sohee",
          nickname: "초롱스누나",
          isCurrentUser: true,
        },
      },
    ],
  },
  {
    date: "2024년 2월 4일 일요일",
    tasks: [
      {
        logId: 3,
        isComplete: false,
        isImportant: false,
        time: "10:00",
        taskName: "사료",
        manager: {
          id: "mother",
          nickname: "초롱이엄마",
          isCurrentUser: false,
        },
      },
      {
        logId: 5,
        isComplete: false,
        isImportant: false,
        taskName: "강아지 카페 가기",
        time: "11:00",
        manager: {
          id: "father",
          nickname: "초롱이아빠",
          isCurrentUser: false,
        },
      },
      {
        logId: 6,
        isComplete: false,
        isImportant: false,
        taskName: "건강",
        time: "19:00",
        manager: {
          id: "sohee",
          nickname: "초롱스누나",
          isCurrentUser: true,
        },
      },
      {
        logId: 7,
        isComplete: false,
        isImportant: true,
        taskName: "미용",
        time: "20:00",
        manager: {
          id: "father",
          nickname: "초롱이아빠",
          isCurrentUser: false,
        },
      },
    ],
  },
];
