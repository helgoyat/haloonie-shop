import { TreatTypeEnum } from "@/types/enum";

export interface ITreat {
  id: string;
  name: string;
  description: string;
  brand: string;
  type: TreatTypeEnum;
  treatsPerIndividualBag: number;
  image: string;
  ingredients: string;
}
