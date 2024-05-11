// https://www.uuidgenerator.net/version4

export * from "@/data/our-boxes";
export * from "@/data/special-boxes";

import { OurBoxes, SpecialBoxes } from ".";

export const Boxes = [...OurBoxes, ...SpecialBoxes];

export const MaxBoxCount = 18;
