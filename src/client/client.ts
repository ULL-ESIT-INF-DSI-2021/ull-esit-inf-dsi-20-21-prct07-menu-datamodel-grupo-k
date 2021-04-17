import {Plate} from '../carte/plate';
import {Menu} from '../carte/menu';
import {Carte} from '../carte/carte';
import {Order} from '../order/order';

export class Client {
  private totalPrice: number = 0;
  constructor(
        public readonly order: Order,
  ) {}

  print():string {
    let output: string = '';
    output += 'My order is:' + '\n';
    output += this.order.print()+'\n';
    output += 'Total price: ' + this.totalPrice + '\n';
    return output;
  }


  chooseSetMenu(nameElectedMenu: string, carte: Carte):Menu | undefined {
    const menuElected: Menu | undefined = carte.menus.find((menu) =>
      menu.name === nameElectedMenu);
    if (typeof menuElected === 'undefined') {
      console.log('error');
      return undefined;
    }
    this.totalPrice += menuElected.price;
    return menuElected as Menu;
  }

  choosePlate(nameElectedPlate: string, carte: Carte):Plate | undefined {
    const plateElected: Plate | undefined = carte.plates.find((menu) =>
      menu.name === nameElectedPlate);
    if (typeof plateElected === 'undefined') {
      console.log('error');
      return undefined;
    }
    this.totalPrice += plateElected.price;
    return plateElected as Plate;
  }

  getTotalPrice(): number {
    return this.totalPrice;
  }
}
