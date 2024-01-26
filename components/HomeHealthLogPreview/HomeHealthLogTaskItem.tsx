export type TaskType = {
  title: string;
  dueTime: string;
  assignee: string;
};

interface HomeHealthLogTaskItemProps {
  taskItem: TaskType;
}

const HomeHealthLogTaskItem = ({ taskItem }: HomeHealthLogTaskItemProps) => {
  return (
    <li>
      <span>{taskItem.title}</span>
      <span>{taskItem.dueTime}</span>
      <span>{taskItem.assignee}</span>
    </li>
  );
};

export default HomeHealthLogTaskItem;
