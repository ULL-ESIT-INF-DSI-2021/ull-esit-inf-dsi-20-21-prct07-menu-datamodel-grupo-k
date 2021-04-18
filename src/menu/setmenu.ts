/* eslint-disable max-len */
import {alimentGroup} from "../aliment/aliment";
import {Dessert} from "../plates/dessert";
import {Entree} from "../plates/entree";
import {MainCourse} from "../plates/mainCourse";
import {Plate} from "../plates/plate";
import {SecondCourse} from "../plates/secondCourse";
import {Menu} from "./menu";

/**
 * Clase para crear Menus preestablecidos segun el plato de entrada, plato principal, segundo plato si es que tiene y postre.
 */
export class SetMenu extends Menu {
  constructor(name: string, private entree: Entree, private mainCourse: MainCourse, private dessert: Dessert, private secondCourse?: SecondCourse) {
    super(name);
    if (secondCourse) {
      this.setPlates(entree, mainCourse, dessert, secondCourse);
    } else {
      this.setPlates(entree, mainCourse, dessert);
    }
    this.calculatePrice();
    this.calculateNutritionalComposition();
    this.identifyAlimentGroupList();
  }

  /**
   * Metodo que obtiene el plato de entrada.
   * @returns Plato de entrada.
   */
  getEntree() : Entree {
    return this.entree;
  }

  /**
   * Metodo que obtiene el plato principal.
   * @returns Plato principal.
   */
  getMainCourse() : MainCourse {
    return this.mainCourse;
  }

  /**
   * Metodo que obtiene el plato postre.
   * @returns Plato postre.
   */
  getdDessert() : Dessert {
    return this.dessert;
  }

  /**
   * Metodo que obtiene el plato secundario, en caso de no tener, devuelve el plato principal.
   * @returns Plato secundario si posee alguno, si no, el plato principal.
   */
  getSecondCourse() : SecondCourse {
    return this.secondCourse == undefined ? this.mainCourse : this.secondCourse;
  }

  /**
   * Metodo que almacena los platos en un vector para usar en la clase menu.
   * @param entree Plato de entrada.
   * @param mainCourse Plato principal.
   * @param dessert Plato de postre.
   * @param secondCourse Plato secundario (No boligatorio).
   */
  setPlates(entree:Entree, mainCourse:MainCourse, dessert:Dessert, secondCourse?:SecondCourse):void {
    this.plates.push(entree);
    this.plates.push(mainCourse);
    this.plates.push(dessert);
    if (secondCourse) {
      this.plates.push(secondCourse);
    }
  }
}
