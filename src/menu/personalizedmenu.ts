import {Plate} from "../plates/plate";
import {Menu} from "./menu";

/**
 * Clase para crear menus personalizados.
 */
export class PersonalizedMenu extends Menu {
  constructor(name: string, plates: Plate[]) {
    super(name);
    this.plates = plates;
    this.calculatePrice();
    this.calculateNutritionalComposition();
    this.identifyAlimentGroupList();
  }

  /**
   * Metodo que agrega un plato al menu.
   * @param plate Plato a agregar al menu.
   */
  addPlate(plate : Plate) {
    this.plates.push(plate);
    this.calculatePrice();
    this.calculateNutritionalComposition();
    this.identifyAlimentGroupList();
  }

  /**
   * Metodo que elimina un plato del menu.
   * @param plate Plato a eliminar del menu.
   */
  removePlate(plate : Plate) {
    const index = this.plates.indexOf(plate, 0);
    if (index > -1) {
      this.plates.splice(index, 1);
      this.calculatePrice();
      this.calculateNutritionalComposition();
      this.identifyAlimentGroupList();
    }
  }
}
