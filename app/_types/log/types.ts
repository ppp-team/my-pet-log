export interface LogsType {
  logId: number;
  taskName: string;
  isComplete: boolean;
  isImportant: boolean;
  time: string;
  manager: {
    id: string;
    nickname: string;
    isCurrentUser: boolean;
  };
}
