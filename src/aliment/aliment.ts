import { CompositionNutritional } from "./nutritional_composition_interface";
import { GeneralInfo } from "./general_info_interface";

export abstract class Aliment implements GeneralInfo, CompositionNutritional {
    // Atributos
     public readonly nameAliment: string;
     public readonly price: number;
  
    /**
    * Constructor de la clase
    */
    constructor(nameAliment:string, price:number,  
        public readonly protein: number, 
        public readonly fats: number,
        public readonly carbohydrates: number,
        public readonly calories?: number,
        public readonly starch?: number,
        public readonly sugars?: number,
        public readonly fiber?: number,
        public readonly water?: number,
        public readonly locality?: string,
        public readonly city?: string){

        this.nameAliment = nameAliment;
        this.price = price;
    }

    getCalories(){return this.calories}

    getProtein(){return this.protein}
    
    getFats(){return this.fats}

    getCarbohydrates(){return this.carbohydrates}

    getStarch(){return this.starch}

    getSugars(){return this.sugars}

    getFiber(){return this.fiber}

    getWater(){return this.water}


    getCity(){
        return this.city
    }

    getLocality(){
        return this.locality
    }

    getNameAliment(){
        return this.nameAliment
    }

    getPriceOfAliment(){
        return this.price
    }


}