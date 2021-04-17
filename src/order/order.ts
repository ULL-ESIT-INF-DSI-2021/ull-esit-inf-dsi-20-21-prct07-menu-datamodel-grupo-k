import {Carte} from '../carte/carte';
import {Menu} from '../carte/menu';
export class Order {
  constructor(
        public readonly carte: Carte,
        public readonly menus?: Menu[],
  ) {}



  print():string {
    let output: string = '';
    if (typeof this.menus === 'undefined') {
      output += 'Order Empty:' + '\n';
    }
    else {
      output += 'Your Order is:' + '\n';
      output += '--Menus--' + '\n';
      this.menus.forEach((menu) => {
        output += menu.name + '\n';
      });
    }
    return output;
  }
}
