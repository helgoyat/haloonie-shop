import { BoxTypeEnum } from "./enum";

export interface IBox {
  id: string;
  name: string;
  type: BoxTypeEnum;
  image: string;
  price: number;
  cookies: Record<string, number>;
}
