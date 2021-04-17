import {Aliment} from "../aliments/aliment";
import {Plate} from "./plate";

export class Dessert extends Plate {
  constructor(name: string,
      ingredients: Map<Aliment, number>) {
    super(name, ingredients);
  }
}
