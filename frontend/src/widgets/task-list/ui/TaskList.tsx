import { TaskItem } from "../../../entities/task";
import { tasksData } from "../data/tasks";

export const TaskList = () => {
  return (
    <ul>
      {tasksData.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};
