import {Aliment} from "./aliment";
import {alimentGroup} from './aliment'

class Cereal extends Aliment {
  private readonly AlimentGroup: alimentGroup = alimentGroup.Cereal

  constructor( public readonly name: string,
        public readonly price: number,
        public readonly protein: number,
        public readonly fats: number,
        public readonly carbohydrates: number,
        public readonly calories?:number,
        public readonly starch?: number,
        public readonly sugars?: number,
        public readonly fiber?: number,
        public readonly water?: number,
        public readonly locality?: string,
        public readonly city?: string) {
    super(name, price, protein, fats, carbohydrates, calories, starch, sugars, fiber, water, locality, city);
  }

  printAliment(): string {
    const aliment_aux = new Cereal(this.getName(), this.getPriceOfAliment(), this.getProtein(), this.getFats(), this.getCarbohydrates(), this.getCalories(), this.getStarch(), this.getSugars(), this.getFiber(), this.getWater(), this.getLocality(), this.getCity());
    if (typeof aliment_aux == "undefined") {
      return ("error, no definido");
    }
    console.log(`${aliment_aux.getName()}` + "precio:" + `${aliment_aux.getPriceOfAliment()}`);
    return (`alimento:${aliment_aux.getName()},` + " " + "precio:" + `${aliment_aux.getPriceOfAliment()}` + " " + `cantidad de proteianas:${aliment_aux.getProtein()}, cantidad de lipidos: ${aliment_aux.getFats()}, cantidad de carbohidratos: ${aliment_aux.getCarbohydrates()}`);
  }

  getAlimentGroup(): alimentGroup {
    return this.AlimentGroup;
  }

}
