import {Plate} from '../plates/plate';
import {SetMenu} from '../menu/setmenu';
export class Carte {
  constructor(
        public readonly plates: Plate[],
        public readonly menus: SetMenu[],
  ) {}

  print():string {
    let output: string = '';
    output += '--Carta--' + '\n';
    output += '--Menus--' + '\n';
    this.menus.forEach((menu) => {
      output += menu.print() + '\n';
    });
    output += '--Plates--' + '\n';
    this.plates.forEach((plate) => {
      output += plate.print() + '\n';
    });
    return output;
  }
}
