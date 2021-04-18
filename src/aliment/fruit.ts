/* eslint-disable camelcase */
/* eslint-disable max-len */
import {Aliment} from "./aliment";
import {alimentGroup} from './aliment';

/**
 * clase que representa a la categoria de un alimento. En este caso a las frutas.
 */
export class Fruit extends Aliment {
  /**
   * atributo del tipo gupo de alimentos
   * para identificar que es un alimento de tipo Fruits.
   */
    private readonly AlimentGroup: alimentGroup = alimentGroup.Fruit

  /**
   * 
   * @param name que es atributo de la clase abstracta Aliment
   * @param price que es atributo de la clase abstracta Aliment
   * @param protein que es atributo de la interfaz nutricional_composicion
   * @param fats que es atributo de la interfaz nutricional_composicion
   * @param carbohydrates que es atributo de la interfaz nutricional_composicion
   * @param calories que es atributo de la interfaz nutricional_composicion
   * @param starch que es atributo de la interfaz nutricional_composicion
   * @param sugars que es atributo de la interfaz nutricional_composicion
   * @param fiber que es atributo de la interfaz nutricional_composicion
   * @param water que es atributo de la interfaz nutricional_composicion
   * @param locality que es atributo de la interfaz general info
   * @param city que es atributo de la interfaz genereal info
   */
    constructor( public readonly name: string,
        public readonly price: number,
        public readonly protein: number,
        public readonly fats: number,
        public readonly carbohydrates: number,
        public readonly calories:number,
        public readonly starch: number,
        public readonly sugars: number,
        public readonly fiber: number,
        public readonly water: number,
        public readonly locality: string,
        public readonly city: string) {
      super(name, price, protein, fats, carbohydrates, calories, starch, sugars, fiber, water, locality, city);
    }

  /**
   * @returns el alimento formateado. Nombre, precio, composicion nutricional, y origen.
   */
    printAliment(): string {
      const aliment_aux = new Fruit(this.getName(), this.getPriceOfAliment(), this.getProtein(), this.getFats(), this.getCarbohydrates(), this.getCalories(), this.getStarch(), this.getSugars(), this.getFiber(), this.getWater(), this.getLocality(), this.getCity());
      if (typeof aliment_aux == "undefined") {
        return ("error, no definido");
      }
      console.log(`${aliment_aux.getName()}` + "precio:" + `${aliment_aux.getPriceOfAliment()}`);
      return (`alimento:${aliment_aux.getName()},` + " " + "precio:" + `${aliment_aux.getPriceOfAliment()}` + " " + `cantidad de proteianas:${aliment_aux.getProtein()}, cantidad de lipidos: ${aliment_aux.getFats()}, cantidad de carbohidratos: ${aliment_aux.getCarbohydrates()}`);
    }

  /**
   * 
   * @returns el tipo de alimento que es.
   */
    getAlimentGroup(): alimentGroup {
      return this.AlimentGroup;
    }
}
