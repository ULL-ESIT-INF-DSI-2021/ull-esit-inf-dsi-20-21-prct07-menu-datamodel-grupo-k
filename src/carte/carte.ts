import {Plate} from './plate';
import {Menu} from './menu';
export class Carte {
  constructor(
        public readonly plates: Plate[],
        public readonly menus: Menu[],
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

  findMenu(nameMenu: string):Menu {
    const chooseMenu: Menu | undefined = this.menus.find((menu) => menu.name === nameMenu);
    if (typeof chooseMenu === 'undefined') {
      console.log('error');
    }
    return chooseMenu as Menu;
  }

  findPlate(namePlate: string):Plate {
    const choosePlate: Plate | undefined = this.plates.find((menu) => menu.name === namePlate);
    if (typeof choosePlate === 'undefined') {
      console.log('error');
    }
    return choosePlate as Plate;
  }
}
