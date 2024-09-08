import { ITreat, TreatTypeEnum } from "@/types";

export const getTreatTypeLabel = (treat: ITreat) => {
  let result = "";
  switch (treat.type) {
    case TreatTypeEnum.Cookie:
      result = treat.treatsPerIndividualBag > 1 ? "cookies" : "cookie";
      break;
    case TreatTypeEnum.Cake:
      result = treat.treatsPerIndividualBag > 1 ? "cakes" : "cake";
      break;
    default:
      result = treat.treatsPerIndividualBag > 1 ? "treats" : "treat";
      break;
  }
  return result;
};
