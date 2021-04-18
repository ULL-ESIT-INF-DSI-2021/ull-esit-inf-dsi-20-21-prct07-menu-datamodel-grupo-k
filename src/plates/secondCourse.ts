import {Aliment} from "../aliment/aliment";
import {Plate} from "./plate";
/**
 * Clase para representar un plato secundario
 */
export class SecondCourse extends Plate {
  /**
   * Constructor de la clase SecondCourse
   * @param name Nombre del plato
   * @param ingredients Ingredientes del plato
   */
  constructor(name: string,
      ingredients: Map<Aliment, number>) {
    super(name, ingredients);
  }
}
