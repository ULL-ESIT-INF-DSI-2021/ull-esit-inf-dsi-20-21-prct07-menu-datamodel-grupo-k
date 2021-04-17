export abstract class Menu {
    private price : number;
    constructor(private name:string, private plates : string, alimentGroupList: string) {
       this.price = 0;
    }

    calculatePrice(): number {
        return 1;
    }

    calculateNutritionalComposition(): number {
        return 1;
    }

    identifyAlimentGroupList(): string {
        return "";
    }
}