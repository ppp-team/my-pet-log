export interface PetGroupType {
  petId: string;
  ownerId: string;
  inviteCode: string;
  name: string;
  type: string;
  breed: string; // 품종
  gender: string;
  isNeutered: "Y" | "N";
  birth: string; //태어난
  firstMeetDate: string;
  weight: string;
  registNumber: string;
  repStatus: "Y" | "N";
  petImageUrl: string;
}
