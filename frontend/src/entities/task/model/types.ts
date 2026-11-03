export enum TaskStateEnum {
  COMPLETED = "COMPLETED",
  IN_PROGRESS = "IN_PROGRESS",
  TODO = "TODO",
}

export interface ITask {
  id: number;
  label: string;
  state: TaskStateEnum;
  createdAt: Date;
  updatedAt: Date;
}
