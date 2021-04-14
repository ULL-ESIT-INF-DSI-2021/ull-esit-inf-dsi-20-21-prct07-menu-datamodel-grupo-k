export abstract class Plate {
    private price: number = 0;
    private predominantAlimentGroup: string = "";
    private nutritionalComposition: number = 0;

    constructor(private name: string,
    private ingredients: Map<string, number>) {
      this.calculatePrice();
      this.identifyPredominantAlimentGroup();
      this.calculateNutritionalComposition();
    }

    getPrice(): number {
      return this.price;
    }
    calculatePrice() {
      this.price = 85;
    }
    identifyPredominantAlimentGroup() {
      const max: [string, number] = ["", 0];
      this.ingredients.forEach((value, key) => {
        if (value > max[1]) {
          max[0] = key;
          max[1] = value;
        }
      });
      this.predominantAlimentGroup = max[0];
    }
    calculateNutritionalComposition() {
      this.nutritionalComposition = 0;
    }
}
