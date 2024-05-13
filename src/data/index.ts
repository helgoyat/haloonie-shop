// https://www.uuidgenerator.net/version4

export * from "@/data/our-boxes";
export * from "@/data/collection-boxes";
export * from "@/data/special-boxes";
export * from "@/data/cookies";

import { OurBoxes, CollectionBoxes, SpecialBoxes } from ".";

export const Boxes = [...OurBoxes, ...CollectionBoxes, ...SpecialBoxes];

export const MaxBoxCount = 18;
