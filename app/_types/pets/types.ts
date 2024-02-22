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

export interface PetRegisterType {
  name: string;
  type: string;
  breed: string;
  gender: "FEMALE" | "MALE";
  isNeutered: boolean | null;
  birth: string | null;
  firstMeetDate: string | null;
  weight: number | null;
  registeredNumber: string | null;
  petImage: string | File | null;
}
