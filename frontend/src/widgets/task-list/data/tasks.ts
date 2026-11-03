import { TaskStateEnum, type ITask } from "../../../entities/task";

export const tasksData: ITask[] = [
  { id: 1, label: "1", state: TaskStateEnum.COMPLETED, createdAt: new Date(), updatedAt: new Date() },
  { id: 2, label: "2", state: TaskStateEnum.IN_PROGRESS, createdAt: new Date(), updatedAt: new Date() },
  { id: 3, label: "3", state: TaskStateEnum.IN_PROGRESS, createdAt: new Date(), updatedAt: new Date() },
  { id: 4, label: "4", state: TaskStateEnum.TODO, createdAt: new Date(), updatedAt: new Date() },
  { id: 5, label: "5", state: TaskStateEnum.TODO, createdAt: new Date(), updatedAt: new Date() },
];
