export interface Diary {
  title: string;
  content: string;
  date: string;
}

export interface GetDiaryListResponse {
  date: string;
  diaries: Diaries[];
}

export interface Diaries {
  diaryId: number;
  title: string;
  content: string;
  thumbnailPath: null;
  writer: {
    id: string;
    nickname: string;
    isCurrentUser: boolean;
  };
  commentCount: number;
}

export interface GetDiaryListRequest {
  petId: number;
  page: number | unknown;
  size: number;
}
