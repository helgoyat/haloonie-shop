import { BoxTypeEnum } from "./enum";

export interface IBox {
  id: string;
  name: string;
  type: BoxTypeEnum;
  image: string;
  price: number;
  treats: Record<string, number>;
}

export interface IUserBox {
  id: string;
  treats: Record<string, number>;
}
