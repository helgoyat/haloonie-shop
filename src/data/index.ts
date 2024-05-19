// https://www.uuidgenerator.net/version4

import { IPalette } from "@/types";

export * from "@/data/boxes";
export * from "@/data/cookies";

export const MaxBoxCount = 18;

export const Theme: Record<number, IPalette> = {
  0: { bg: "bg-violet-600", br: "border-violet-600" },
  1: { bg: "bg-emerald-500", br: "border-emerald-500" },
  2: { bg: "bg-orange-500", br: "border-orange-500" },
};
