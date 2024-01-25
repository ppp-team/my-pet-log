import HealthLogTaskItem, { TaskType } from "../HealthLogTaskItem/HealthLogTaskItem";

interface HealthLogTaskListProps {
  taskList: TaskType[];
}

const HealthLogTaskList = ({ taskList }: HealthLogTaskListProps) => {
  return (
    <ul>
      {taskList.map((item, index) => (
        <HealthLogTaskItem taskItem={item} key={index} />
      ))}
    </ul>
  );
};

export default HealthLogTaskList;
