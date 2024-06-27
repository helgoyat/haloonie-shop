export interface IBox {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  treats: Record<string, number>;
}
