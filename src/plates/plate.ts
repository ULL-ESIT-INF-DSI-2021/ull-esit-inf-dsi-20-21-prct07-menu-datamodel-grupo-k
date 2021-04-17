/* eslint-disable max-len */
import {Aliment, alimentGroup} from "../aliments/aliment";
import {NutritionalComposition} from "../aliments/nutritionalComposition";

export abstract class Plate implements NutritionalComposition {
    public calories: number = 0;
    public protein: number = 0;
    public fats: number = 0;
    public carbohydrates: number = 0;
    public starch: number = 0;
    public sugars: number = 0;
    public fiber: number = 0;
    public water: number = 0;
    private price: number = 0;
    private predominantAlimentGroup?: [alimentGroup, number];

    constructor(private name: string,
    private ingredients: Map<Aliment, number>) {
      this.calculatePrice();
      this.identifyPredominantAlimentGroup();
      this.calculateNutritionalComposition();
    }

    getName(): string {
      return this.name;
    }
    getPrice(): number {
      return this.price;
    }
    getPredominantAlimentGroup(): [alimentGroup, number]|undefined {
      return this.predominantAlimentGroup;
    }
    getIngredients(): string {
      let output = "";
      this.ingredients.forEach((value, key) => {
        output += "Ingrediente: " + key.getName() + ", Cantidad: " + value + "\n";
      });
      return output;
    }
    getCalories(): number {
      return this.calories;
    }
    getProtein(): number {
      return this.protein;
    }
    getFats(): number {
      return this.fats;
    }
    getCarbohydrates(): number {
      return this.carbohydrates;
    }
    getStarch(): number {
      return this.starch;
    }
    getSugars(): number {
      return this.sugars;
    }
    getFiber(): number {
      return this.fiber;
    }
    getWater(): number {
      return this.water;
    }
    private calculatePrice() {
      this.ingredients.forEach((value, key) => {
        this.price += key.getPrice();
      });
    }
    private identifyPredominantAlimentGroup() {
      const max: Map<alimentGroup, number> = new Map();
      this.ingredients.forEach((value, key) => {
        if (max.has(key.getAlimentGroup())) {
          const sum = max.get(key.getAlimentGroup());
          max.set(key.getAlimentGroup(), sum == undefined? 0: sum + value);
        } else {
          max.set(key.getAlimentGroup(), value);
        }
      });
      max.forEach((value, key) => {
        if (value == Math.max(...max.values())) {
          this.predominantAlimentGroup = [key, value];
        }
      });
    }
    private calculateNutritionalComposition() {
      this.ingredients.forEach((value, key) => {
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
    print(): string {
      let output = "";
      output += "Nombre: " + this.getName() + "\n";
      output += "Precio: " + this.getPrice() + "\n";
      output += "Ingredientes: \n" + this.getIngredients() + "\n";
      output += "Composicion Nutricional: " + "\n";
      output += "Calorias: " + this.getCalories() + "\n";
      output += "Proteinas: " + this.getProtein() + "\n";
      output += "Grasas: " + this.getFats() + "\n";
      output += "Carbohidratos: " + this.getCarbohydrates() + "\n";
      output += "Almidon: " + this.getStarch() + "\n";
      output += "Azucar: " + this.getSugars() + "\n";
      output += "Fibra: " + this.getFiber() + "\n";
      output += "Agua: " + this.getWater() + "\n";
      output += "Grupo de alimento predominante: " + this.getPredominantAlimentGroup() + "\n";
      return output;
    }
}
