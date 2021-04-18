/* eslint-disable max-len */
import {Aliment} from "../aliment/aliment";
import {Cereal} from "../aliment/cereal";
import {Seed} from "../aliment/seed";
import {Plate} from "./plate";
/**
 * Clase para representar un plato entrante
 */
export class Entree extends Plate {
  /**
   * Constructor de la clase Entree
   * @param name Nombre del plato
   * @param ingredients Ingredientes del plato
   */
  constructor(name: string,
      ingredients: Map<Aliment, number>) {
    super(name, ingredients);
  }
}
