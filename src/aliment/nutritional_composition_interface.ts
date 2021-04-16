export interface CompositionNutritional {
    protein: number;
    fats: number;
    carbohydrates: number;
    calories?: number;
    starch?: number;
    sugars?: number;
    fiber?: number;
    water?:number;
    getCalories():number | undefined;
    getProtein(): number;
    getFats():number;
    getCarbohydrates(): number;
    getStarch():number | undefined;
    getSugars():number | undefined;
    getFiber(): number | undefined;
    getWater(): number | undefined;
}