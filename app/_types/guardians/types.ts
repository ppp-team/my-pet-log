export interface GuardianType {
  guardianId: number;
  guardianRole: "MEMBER" | "LEADER";
  nickname: string;
  profileImageUrl: string | null;
}

export interface GuardiansType {
  count: number;
  data: GuardianType[];
}

export interface GuardianForLogsType {
  id: string;
  nickname: string;
  isCurrentUser: boolean;
}
