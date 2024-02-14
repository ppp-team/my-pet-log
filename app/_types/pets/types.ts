export interface PetInfo {
  petId: number;
  ownerId: string;
  inviteCode: string;
  name: string;
  type: string;
  breed: string;
  gender: string;
  isNeutered: string;
  birth: string;
  firstMeetDate: string;
  weight: string;
  registeredNumber: string | null;
  repStatus: string;
  petImageUrl: string | null;
}
