export interface GetLogsListType {
  logsData: {
    date: string;
    logs: LogsType[];
  };
}

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
  detail: {
    type: string;
    subType: string;
    memo: string | null;
  };
}

export interface LogDetailType {
  logId: number;
  date: string;
  time: string;
  managerId: string;
  type: string;
  subType: string;
  memo: string | null;
  isImportant: boolean;
  location?: {
    isCustomLocation: boolean;
    kakaoLocationId: number | null;
  };
}

export interface PostLogType {
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
