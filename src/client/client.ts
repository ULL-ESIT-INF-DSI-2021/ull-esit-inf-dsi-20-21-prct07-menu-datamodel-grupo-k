/* eslint-disable max-len */
import {Plate} from '../plates/plate';
import {Menu} from '../menu/menu';
import {PersonalizedMenu} from '../menu/personalizedmenu';
import {Carte} from '../carte/carte';
import {Order} from '../order/order';

/* TODO
  encapsular todo los tipos en un solo fichero
*/

export type modifierOption = 'add' | 'remove'

export class Client {
  constructor(
        public readonly order: Order,
  ) {}

  print():string {
    let output: string = '';
    output += 'My order is:' + '\n';
    output += this.order.print()+'\n';
    return output;
  }


  chooseSetMenu(nameElectedMenu: string, carte: Carte):Menu {
    const menuElected: Menu | undefined = carte.menus.find((menu) =>
      menu.name === nameElectedMenu);
    if (typeof menuElected === 'undefined') {
      console.log('error');
      throw new TypeError('menu no encontrado');
    }
    return menuElected as Menu;
  }


  choosePlate(nameElectedPlate: string, carte: Carte):PersonalizedMenu {
    const plateElected: Plate | undefined = carte.plates.find((cartePlate) => cartePlate.getName() === nameElectedPlate);
    if (typeof plateElected === 'undefined') {
      throw new TypeError('Plate not found');
    }
    return new PersonalizedMenu(nameElectedPlate, [plateElected]);
  }

  chooseSetMenuWithEdition(choice: modifierOption, plate: Plate, menu: Menu): PersonalizedMenu {
    let menuName: string = '';
    menuName += plate.getName();

    const personalizeMenu = new PersonalizedMenu(menuName, [plate]);

    if (choice === 'add') {
      personalizeMenu.addPlate(plate);
      return personalizeMenu;
    } else {
      return personalizeMenu;
    }
  }
}
