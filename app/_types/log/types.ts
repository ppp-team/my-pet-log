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

export interface LogType {
  // petId: number;
  type: string;
  subType: string | null;
  isCustomLocation: boolean;
  kakaoLocationId: number | null;
  datetime: string;
  isComplete: boolean;
  isImportant: boolean;
  memo: string | null;
  managerId: string;
}

export interface LogListType {
  logsData: {
    date: string;
    logs: LogsType[];
  };
}

export interface LogDetailType {
  logId: number;
  type: string;
  subType: string;
  memo: string;
}
