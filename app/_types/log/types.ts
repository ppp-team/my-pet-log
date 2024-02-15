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

export interface LogListType {
  logsData: {
    date: string;
    logs: LogsType[];
  };
}
