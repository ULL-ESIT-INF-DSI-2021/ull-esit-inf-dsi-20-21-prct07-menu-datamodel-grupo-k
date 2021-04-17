import { alimentGroup } from "../aliment/aliment";
import { Dessert } from "../plates/dessert";
import { Entree } from "../plates/entree";
import { MainCourse } from "../plates/mainCourse";
import { Plate } from "../plates/plate";
import { SecondCourse } from "../plates/secondCourse";
import {Menu} from "./menu"

export class SetMenu extends Menu {   
    constructor(name: string, private entree: Entree, private mainCourse: MainCourse, private dessert: Dessert, private secondCourse?: SecondCourse) {
       super(name);
       this.calculatePrice();
       this.calculateNutritionalComposition();
       this.identifyAlimentGroupList();
    }

    getEntree() : Entree{
        return this.entree;
    }

    getMainCourse() : MainCourse{
        return this.mainCourse;
    }

    getdDessert() : Dessert{
        return this.dessert;
    }

    getSecondCourse() : SecondCourse{
        return this.secondCourse == undefined ? this.mainCourse : this.secondCourse;
    }

}