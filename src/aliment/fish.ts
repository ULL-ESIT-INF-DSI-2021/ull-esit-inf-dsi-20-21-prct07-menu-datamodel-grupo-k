import { Aliment } from "./aliment";

class Fish extends Aliment{
    constructor( public readonly nameAliment: string,
        public readonly price: number){
        super(nameAliment, price);
    }
}