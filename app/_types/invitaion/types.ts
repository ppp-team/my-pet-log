export interface InvitationType {
  invitationId: number;
  petId: number;
  inviteStatus: "PENDING" | "ACCEPTED" | "REJECTED";
  petName: string;
  petImageUrl: string | null;
  invitedAt: string;
}
