import { Aliment } from "./aliment";

export class Fruit extends Aliment {

    constructor( public readonly nameAliment: string,
        public readonly price: number){
        super(nameAliment, price);
    }


}