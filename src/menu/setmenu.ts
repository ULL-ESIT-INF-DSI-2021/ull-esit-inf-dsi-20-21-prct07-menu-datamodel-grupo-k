import {Menu} from "./menu"

export class SetMenu extends Menu {
    constructor(name: string, price: number, plates: string, alimentGroupList: string, private entree: string, private mainCourse: string, private desert: string, secondCourse?: string) {
        super(name, plates, alimentGroupList);
    }
}