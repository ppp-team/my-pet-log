import HealthLogTaskItem, { TaskType } from "./HomeHealthLogTaskItem";

interface HomeHealthLogTaskListProps {
  taskList: TaskType[];
}

const HomeHealthLogTaskList = ({ taskList }: HomeHealthLogTaskListProps) => {
  return (
    <ul>
      {taskList.map((item, index) => (
        <HealthLogTaskItem taskItem={item} key={index} />
      ))}
    </ul>
  );
};

export default HomeHealthLogTaskList;
