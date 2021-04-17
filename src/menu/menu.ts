import { Aliment, alimentGroup } from "../aliment/aliment";
import { CompositionNutritional } from "../aliment/nutritional_composition_interface";
import { Plate } from "../plates/plate";

export abstract class Menu implements CompositionNutritional{
    public protein: number = 0;
    public fats: number = 0;
    public carbohydrates: number = 0;
    public calories: number = 0;
    public starch: number = 0;
    public sugars: number = 0;
    public fiber: number = 0;
    public water:number = 0;
    private price : number = 0;
    private alimentGroupList : [alimentGroup, number][] = [];
    protected plates : Plate[] = []
    constructor(public readonly name:string) {
    }

    protected calculatePrice() {
        this.plates.forEach((key) => {
            this.price += key.getPrice();
          });
    }

   protected calculateNutritionalComposition() {
        this.plates.forEach((key) => {
            this.calories += key.getCalories();
            this.protein += key.getProtein();
            this.fats += key.getFats();
            this.carbohydrates += key.getCarbohydrates();
            this.starch += key.getStarch();
            this.sugars += key.getSugars();
            this.fiber += key.getFiber();
            this.water += key.getWater();
        });
    }

    protected identifyAlimentGroupList() {
        this.plates.forEach((key) => {
            this.alimentGroupList.push(key.getPredominantAlimentGroup());
        });
    }

    getCalories():number  {
        return this.calories;
    }

    getProtein(): number {
        return this.protein;
    }

    getFats():number {
        return this.fats;
    }

    getCarbohydrates(): number {
        return this.carbohydrates;
    }

    getStarch():number {
        return this.starch
    }

    getSugars():number{
        return this.sugars
    }

    getFiber(): number{
        return this.fiber
    }

    getWater(): number{
        return this.water
    }

    getPrice() : number {
        return this.price;
    }

    getPlates(): Plate[] {
        return this.plates;
    }

    getAlimentGroupList() : [alimentGroup, number][]{
        return this.alimentGroupList;
    }

    print() : string {
      let output = "";
      output += "Nombre: " + this.name + "\n";
      output += "Precio: " + this.getPrice() + "\n";
      output += "Platos: \n" + this.plates.forEach(element => {
        output +=  "Nombre : " + element.getName() + " Precio : " + element.getPrice() + "\n";
      }); + "\n";
      output += "Composicion Nutricional: " + "\n";
      output += "Calorias: " + this.getCalories() + "\n";
      output += "Proteinas: " + this.getProtein() + "\n";
      output += "Grasas: " + this.getFats() + "\n";
      output += "Carbohidratos: " + this.getCarbohydrates() + "\n";
      output += "Almidon: " + this.getStarch() + "\n";
      output += "Azucar: " + this.getSugars() + "\n";
      output += "Fibra: " + this.getFiber() + "\n";
      output += "Agua: " + this.getWater() + "\n";
      output += "Grupo de alimento predominante: " + this.getAlimentGroupList() + "\n";
      return output;
    }
}