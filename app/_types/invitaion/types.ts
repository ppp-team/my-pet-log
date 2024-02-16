export interface InvitationType {
  invitationId: number;
  petId: number;
  inviteStatus: "PENDING" | "ACCEPTED" | "REJECTED";
  petName: string;
  petImageUrl: string | null;
  invitedAt: string;
}

export interface MyInvitationType {
  invitationId: number;
  inviteeName: string | null;
  inviteStatus: "대기중" | "거절"; //거절도 따로 없던데..api문의 드려야겠다
  petName: string;
  profilePath: string | null;
  invitedAt: string; //이건 필요없는데 (api 문의드림)
}
