/* eslint-disable max-len */
import {Plate} from "./plate";

export class Entree extends Plate {
  constructor(name: string,
      ingredients: Map<string, number>) {
    super(name, ingredients);
    this.calculateNutritionalComposition();
    this.calculatePrice();
    this.identifyPredominantAlimentGroup();
  }
}

const dic = new Map<string, number>();

dic.set("hola", 20);
dic.set("chao", 30);

dic.forEach((h) => {
  console.log(h);
});


const entrante: Entree = new Entree("hola", dic);

console.log(entrante);

