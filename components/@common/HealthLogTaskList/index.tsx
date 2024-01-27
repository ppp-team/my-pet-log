import HealthLogTaskItem from "@/components/@common/HealthLogTaskList/HealthLogTaskItem";

// mock-up
const sampleList = [
  {
    date: "2024년 1월 27일 토요일",
    list: [
      {
        type: "사료",
        subtype: "건식",
        datetime: "2024-01-27T10:30",
        isComplete: true,
        isImportant: false,
        managerId: "소희", // 나중엔 Number
        memo: "건식 사료 100g",
      },
      {
        type: "산책",
        subtype: "여의도 한강 공원",
        datetime: "2024-01-27T18:30",
        isComplete: true,
        isImportant: false,
        managerId: "소희",
        memo: "친구랑 같이 다녀옴",
      },
      {
        type: "직접 입력",
        subtype: "친구랑 멍냥카페",
        datetime: "2024-01-27T19:30",
        isComplete: true,
        isImportant: false,
        managerId: "슬",
        memo: "",
      },
    ],
  },
  {
    date: "2024년 1월 29일 월요일",
    list: [
      {
        type: "건강",
        subtype: "병원 진료",
        datetime: "2024-01-29T19:30",
        isComplete: false,
        isImportant: false,
        managerId: "슬",
        memo: "",
      },
    ],
  },
];

const HealthLogTaskList = () => {
  return (
    <ul>
      {sampleList.map((dateInfo, index) => (
        <div key={index}>
          <p>{dateInfo.date}</p>
          <ul>
            {dateInfo.list.map((taskItem, taskIndex) => (
              <HealthLogTaskItem taskItem={taskItem} key={taskIndex} />
            ))}
          </ul>
        </div>
      ))}
    </ul>
  );
};

export default HealthLogTaskList;
