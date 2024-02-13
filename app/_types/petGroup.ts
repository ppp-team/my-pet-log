export type PetGroupType = {
  petId: string;
  ownerId: string;
  inviteCode: string;
  name: string;
  type: string;
  breed: string; // 품종
  gender: string;
  isNeutered: "Y" | "N";
  birth: string; //태어난
  weight: string;
  registNumber: string;
  repStatus: "Y" | "N";
  petImageUrl: string | null;
};
