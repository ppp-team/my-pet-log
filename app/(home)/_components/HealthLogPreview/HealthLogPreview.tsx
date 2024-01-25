import HealthLogTaskList from "../HealthLogTaskList/HealthLogTaskList";

const sampleList = [
  {
    date: "2024년 1월 22일 월요일",
    list: [
      {
        title: "사료",
        dueTime: "10:00",
        assignee: "첫째누나",
      },
      {
        title: "간식",
        dueTime: "11:00",
        assignee: "엄마",
      },
      {
        title: "산책",
        dueTime: "12:00",
        assignee: "아빠",
      },
    ],
  },
  {
    date: "2024년 1월 23일 화요일",
    list: [
      {
        title: "병원",
        dueTime: "10:00",
        assignee: "첫째누나",
      },
    ],
  },
];

const HealthLogPreview = () => {
  return (
    <>
      <p>⭐️ 나나의 스케줄을 잊지 마세요!</p>
      <ul>
        {sampleList.map((dateInfo, index) => (
          <>
            <p>{dateInfo.date}</p>
            <HealthLogTaskList taskList={dateInfo.list} key={index} />
          </>
        ))}
      </ul>
    </>
  );
};
export default HealthLogPreview;
