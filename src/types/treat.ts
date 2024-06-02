import { TreatTypeEnum } from "@/types/enum";

export interface ITreat {
  id: string;
  name: string;
  description: string;
  brand: string;
  type: TreatTypeEnum;
  bag: number;
  treatsPerBag: number;
  image: string;
}
