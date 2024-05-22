import { BoxTypeEnum } from "./enum";

export interface IBox {
  id: string;
  name: string;
  type: BoxTypeEnum | null;
  image: string;
  price: number;
  cookies: Record<string, number>;
}
