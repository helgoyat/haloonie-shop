export interface IBox {
  id: string;
  name: string;
  image: string;
  price: number;
  treats: Record<string, number>;
}
