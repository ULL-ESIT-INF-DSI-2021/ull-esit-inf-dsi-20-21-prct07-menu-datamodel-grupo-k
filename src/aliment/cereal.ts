import { Aliment } from "./aliment";

class Cereal extends Aliment{
    constructor( public readonly nameAliment: string,
        public readonly price: number){
        super(nameAliment, price);
    }
}