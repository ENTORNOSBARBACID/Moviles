export interface IAnimal {
  perreria: IPerreria[];
}
export interface IPerreria {
  id: string;
  animal: string;
  raza: string;
  edad: number;
  tamaño: string;
  sexo: string;
  imagen: string;
}
