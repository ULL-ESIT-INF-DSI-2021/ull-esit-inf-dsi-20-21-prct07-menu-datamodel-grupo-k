import {Aliment} from "../aliment/aliment";
import {Plate} from "./plate";
/**
 * Clase para representar un plato principal
 */
export class MainCourse extends Plate {
  /**
   * Constructor de la clase MainCourse
   * @param name Nombre del plato
   * @param ingredients Ingredientes del plato
   */
  constructor(name: string,
      ingredients: Map<Aliment, number>) {
    super(name, ingredients);
  }
}
