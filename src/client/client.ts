import {Plate} from '../carte/plate';
import {Menu} from '../carte/menu';
import {Carte} from '../carte/carte';
import {Order} from '../order/order';

export class Client {
  constructor(
        public readonly order: Order,
        public readonly totalPrice: number,

  ) {}

  print():string {
    let output: string = '';
    output += 'My order is:' + '\n';
    output += this.order.print()+'\n';
    output += 'Total price: ' + this.totalPrice + '\n';
    return output;
  }


  chooseSetMenu(nameElectedMenu: string, carte: Carte):Menu {
    const menuElected: Menu | undefined = carte.menus.find((menu) =>
      menu.name === nameElectedMenu);
    if (typeof menuElected === 'undefined') {
      console.log('error');
    }
    return menuElected as Menu;
  }

  choosePlate(nameElectedPlate: string, carte: Carte):Plate {
    const plateElected: Plate | undefined = carte.plates.find((menu) =>
      menu.name === nameElectedPlate);
    if (typeof plateElected === 'undefined') {
      console.log('error');
    }
    return plateElected as Plate;
  }
}
