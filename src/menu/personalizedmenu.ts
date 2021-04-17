import { Plate } from "../plates/plate"
import {Menu} from "./menu"

export class PersonalizedMenu extends Menu {
    constructor(name: string, plates: Plate[]) { 
        super(name);
    }

    addPlate(plate : Plate) {
        this.plates.push(plate);
    }

    removePlate(plate : Plate) {
        const index = this.plates.indexOf(plate,0);
        if (index > -1) {
         this.plates.splice(index,1);
        }
    }

}


