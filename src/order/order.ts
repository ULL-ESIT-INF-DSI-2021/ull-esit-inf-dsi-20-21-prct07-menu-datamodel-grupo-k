import {Carte} from '../carte/carte';
import {Menu} from '../carte/menu';
export class Order {
  constructor(
        public readonly carte: Carte,
        public readonly menus: Menu[] = [],
  ) {}


  addMenu(menu: Menu):void {
    this.menus.push(menu);
  }

  print():string {
    let output: string = '';
    if (this.menus.length === 0) {
      output += 'Order Empty:' + '\n';
    } else {
      output += 'Your Order is:' + '\n';
      output += '--Menus--' + '\n';
      this.menus.forEach((menu) => {
        output += menu.name + '\n';
      });
    }
    return output;
  }
}
