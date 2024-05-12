import { ICookieBox } from "@/types";

export interface IBox {
  id: string;
  name: string;
  price: number;
  cookies: ICookieBox[];
}
