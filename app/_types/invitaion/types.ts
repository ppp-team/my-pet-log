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
  inviteStatus: "대기중" | "거절";
  profilePath: string | null;
  invitedAt: string;
}
