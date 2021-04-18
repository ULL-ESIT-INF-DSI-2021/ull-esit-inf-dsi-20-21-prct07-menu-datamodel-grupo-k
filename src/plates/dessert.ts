import {Aliment} from "../aliment/aliment";
import {Plate} from "./plate";
/**
 * Clase para representar un postre
 */
export class Dessert extends Plate {
  /**
   * Constructor de la clase Dessert
   * @param name Nombre del postre
   * @param ingredients Ingredientes del postre
   */
  constructor(name: string,
      ingredients: Map<Aliment, number>) {
    super(name, ingredients);
  }
}
