import {CompositionNutritional} from "./nutritional_composition_interface";
import {GeneralInfo} from "./general_info_interface";

/**
 * enum para identificar el tipo de alimento.
 */
export enum alimentGroup {
    Fruit = 'Fruit',
    Meat = 'Meat',
    Fish = 'Fish',
    Seed = 'Seed',
    Legume = 'Legume',
    Cereal = "Cereal",
    Vegetable = "Vegetable"
  }

/**
   * clase Abstracta Aliment que representa a un alimento en general,
   * a partir de ella implementaremos las distintas categorias de alimentos.
   */
export abstract class Aliment implements GeneralInfo, CompositionNutritional {
  /**
   * atributos de la clase
   */
     public readonly name: string;
     public readonly price: number;

     /**
   * Constructor de la clase Abstracta Aliment
   * @param name Nombre del alimento
   * @param price precio del alimento
  */
     constructor(name:string, price:number,
        public readonly protein: number,
        public readonly fats: number,
        public readonly carbohydrates: number,
        public readonly calories: number,
        public readonly starch: number,
        public readonly sugars: number,
        public readonly fiber: number,
        public readonly water: number,
        public readonly locality: string,
        public readonly city: string) {
       this.name = name;
       this.price = price;
     }

    abstract getAlimentGroup(): alimentGroup;
    getCalories() {
      return this.calories;
    }

    /**
     *
     * @returns el valor numerico de proteinas que tiene el alimento.
     */
    getProtein() {
      return this.protein;
    }

    /**
     *
     * @returns cantidad de lipido o grasa que contiene el alimento.
     */
    getFats() {
      return this.fats;
    }

    /**
     *
     * @returns los carbohidratos del alimento.
     */
    getCarbohydrates() {
      return this.carbohydrates;
    }

    /**
     *
     * @returns la cantidad de almidon del alimento.
     */
    getStarch() {
      return this.starch;
    }

    /**
     *
     * @returns la cantidad de azucar que tiene el alimento.
     */
    getSugars() {
      return this.sugars;
    }

    /**
     *
     * @returns la cantidad de fibra de un alimento.
     */
    getFiber() {
      return this.fiber;
    }

    /**
     *
     * @returns la cantidad de agua que tiene un alimento.
     */
    getWater() {
      return this.water;
    }

    /**
     *
     * @returns el nombre la ciudad de la cual es el alimento
     */
    getCity() {
      return this.city;
    }

    /**
     *
     * @returns la localidad del alimento.
     */
    getLocality() {
      return this.locality;
    }

    /**
     *
     * @returns el nombre del alimento.
     */
    getName() {
      return this.name;
    }
    /**
    *
    * @returns el precio del alimento
    */
    getPriceOfAliment() {
      return this.price;
    }
}
