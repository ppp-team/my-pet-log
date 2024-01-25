export type TaskType = {
  title: string;
  dueTime: string;
  assignee: string;
};

interface HealthLogTaskItemProps {
  taskItem: TaskType;
}

const HealthLogTaskItem = ({ taskItem }: HealthLogTaskItemProps) => {
  return (
    <li>
      <span>{taskItem.title}</span>
      <span>{taskItem.dueTime}</span>
      <span>{taskItem.assignee}</span>
    </li>
  );
};

export default HealthLogTaskItem;
