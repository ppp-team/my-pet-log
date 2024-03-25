//구독자 목록
export interface SubscriberListType {
  id: string;
  nickname: string;
  profilePath: string;
}

//구독중인 펫계정
export interface SubscribedPetType {
  id: string;
  name: string;
  profilePath: string;
}
