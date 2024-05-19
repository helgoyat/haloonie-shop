import { BoxType } from "./enum";

export interface IBox {
  id: string;
  name: string;
  type: BoxType;
  image: string;
  price: number;
  cookies: Record<string, number>;
}
