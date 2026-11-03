import { TaskStateEnum, type ITask } from "../model/types";

export interface TaskItemProps {
  task: ITask;
}

const TASK_STATE = {
  [TaskStateEnum.COMPLETED]: "Completed",
  [TaskStateEnum.IN_PROGRESS]: "In Progress",
  [TaskStateEnum.TODO]: "To Do",
};

export const TaskItem = ({ task }: TaskItemProps) => {
  return (
    <div>
      <input type="checkbox" />
      <p>{task.label}</p>
      <span>{TASK_STATE[task.state]}</span>
    </div>
  );
};
