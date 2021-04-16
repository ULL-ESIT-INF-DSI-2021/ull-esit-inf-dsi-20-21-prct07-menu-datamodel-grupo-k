import { Aliment } from "./aliment";

class Cereal extends Aliment{
  
    constructor( public readonly nameAliment: string,
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
        public readonly city?: string){
        super(nameAliment, price, protein, fats, carbohydrates, calories, starch, sugars, fiber, water, locality, city);
    }

    printAliment(): string{
        let aliment_aux = new Cereal(this.getNameAliment(), this.getPriceOfAliment(), this.getProtein(), this.getFats(), this.getCarbohydrates(), this.getCalories(), this.getStarch(), this.getSugars(), this.getFiber(), this.getWater(), this.getLocality(), this.getCity());
        if (typeof aliment_aux == "undefined"){
            return ("error, no definido")
        }
        console.log(`${aliment_aux.getNameAliment()}` + "precio:" + `${aliment_aux.getPriceOfAliment()}`)
        return (`alimento:${aliment_aux.getNameAliment()},` + " " + "precio:" + `${aliment_aux.getPriceOfAliment()}` + " " + `cantidad de proteianas:${aliment_aux.getProtein()}, cantidad de lipidos: ${aliment_aux.getFats()}, cantidad de carbohidratos: ${aliment_aux.getCarbohydrates()}`)

    }
}