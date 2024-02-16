export interface PetType {
  petId: number;
  ownerId: string;
  inviteCode: string;
  name: string;
  type: string;
  breed: string;
  gender: "FEMALE" | "MALE";
  isNeutered: "Y" | "N";
  birth: string;
  firstMeetDate: string;
  weight: string;
  registeredNumber: string | null;
  repStatus: "REPRESENTATIVE" | "NORMAL";
  petImageUrl: string | null;
}

export interface PetsType {
  count: number;
  data: PetType[];
}
