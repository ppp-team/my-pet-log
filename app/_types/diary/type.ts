export interface Diary {
  diaryId: number;
  title: string;
  content: string;
  thumbnailPath: null | string;
  writer: Writer;
  commentCount: number;
}

export interface Diaries {
  diaryId: string;
  title: string;
  content: string;
  thumbnailPath: null;
  writer: Writer;
  commentCount: number;
}

export interface Writer {
  id: string;
  nickname: string;
  isCurrentUser: boolean;
}

export interface Comment {
  commentId: number;
  content: string;
  createdAt: string;
  likeCount: number;
  isCurrentUserLiked: boolean;
  writer: Writer;
  taggedUsers: Tag[];
}

interface Tag {
  id: string;
  nickname: string;
  isCurrentUser: boolean;
}

export interface GetDiaryListResponse {
  content: [
    {
      date: string;
      diaries: Diary[];
    },
  ];

  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  numberOfElements: number;
  first: boolean;
  last: boolean;
  empty: boolean;
}

export interface GetDiaryListRequest {
  petId: number;
  page: number | unknown;
  size: number;
}

export interface GetCommentsRequest extends GetDiaryListRequest {
  diaryId: string | string[];
}

export interface GetDiaryRequest {
  petId: number;
  diaryId: string | string[];
}

export interface GetDiaryResponse {
  diaryId: number;
  title: string;
  content: string;
  date: string;
  images: [
    {
      mediaId: number;
      path: string;
    },
  ];
  videos: string[];
  isCurrentUserLiked: boolean;
  writer: {
    id: string;
    nickname: string;
    profilePath: string;
    isCurrentUser: boolean;
  };
  commentCount: number;
  likeCount: number;
  pet: {
    id: number;
    breed: string;
    age: string;
  };
}

export interface GetCommentsResponse {
  content: Comment[];

  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  numberOfElements: number;
  first: boolean;
  last: boolean;
  empty: boolean;
}

export interface PostDiaryRequest {
  petId: number;
  data: {
    title: string;
    content: string;
    date: string;
    image?: File[];
    video?: File;
  };
}
