import {Plate} from '../carte/plate';
import {Menu} from '../carte/menu';
import {Carte} from '../carte/carte';
import {Order} from '../order/order';

/* TODO
  encapsular todo los tipos en un solo fichero
*/

export type modifierOption = 'add' | 'remove'
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


  chooseSetMenu(nameElectedMenu: string, carte: Carte):Menu {
    const menuElected: Menu | undefined = carte.menus.find((menu) =>
      menu.name === nameElectedMenu);
    if (typeof menuElected === 'undefined') {
      console.log('error');
      throw new TypeError('menu no encontrado')
    }
    this.totalPrice += menuElected.price;
    return menuElected as Menu;
  }


  /* TODO
      cambiar plate por PersonalizedMenu
  */
  choosePlate(nameElectedPlate: string, carte: Carte):Plate {
    const plateElected: Plate | undefined = carte.plates.find((menu) =>
      menu.name === nameElectedPlate);
    if (typeof plateElected === 'undefined') {
      console.log('error');
      throw new TypeError('plate not found')
    }
    this.totalPrice += plateElected.price;
    return plateElected as Plate;
  }

  getTotalPrice(): number {
    return this.totalPrice;
  }

  /*chooseSetMenuWithEdition(choice: modifierOption, plate: Map <Plate,number>, menu: string): void {
    if (choice === 'add') {
      const personalizeMenu = new PersonalizeMenu(menu, add, plate)
    } else if (choice === 'remove') {
      const personalizeMenu = new PersonalizeMenu(menu, remove, plate)
    }
  }*/
}




 


const menuOne = new Menu('menu1', 15, 'arrocito', 'grano' );
const menuTwo = new Menu('menu2', 10, 'platodemenuDOS', 'pescado');
const plateTwo = new Plate('pasta', 10);
const plateOne = new Plate('batata', 20);
const carte = new Carte([plateOne, plateTwo], [menuOne, menuTwo]);
const order = new Order(carte);
const client = new Client(order);
// client.chooseSetMenuWithEdition('asd', '', '');

