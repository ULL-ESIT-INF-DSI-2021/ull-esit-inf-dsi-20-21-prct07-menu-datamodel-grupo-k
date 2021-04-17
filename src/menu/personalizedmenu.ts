import {Menu} from "./menu"

export class PersonalizedMenu extends Menu {
    constructor(name: string, plates: string, alimentGroupList: string, private plates_cuantity: string) { 
        super(name, plates, alimentGroupList)
    }
}