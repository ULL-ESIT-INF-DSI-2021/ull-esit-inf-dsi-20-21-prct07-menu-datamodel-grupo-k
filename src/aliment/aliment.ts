export abstract class Aliment{
     public readonly nameAliment: string;
     public readonly price: number;
  

    /**
    * Constructor de la clase
    */
    constructor(nameAliment:string , price:number){
        this.nameAliment = nameAliment;
        this.price = price;
    }

    getNameAliment(){
        return this.nameAliment
    }

    getPriceOfAliment(){
        return this.price
    }


}