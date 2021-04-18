/* eslint-disable max-len */
import {Menu} from '../menu/menu';
import {Client} from '../client/client';
import {Order} from '../order/order';
import {Carte} from '../carte/carte';
import {PersonalizedMenu} from '../menu/personalizedmenu';
import {Plate} from '../plates/plate';
import {SetMenu} from '../menu/setmenu';

export type modifierOption = 'add' | 'remove'
export class Waiter {
  constructor(
      private client: Client,
      public readonly carte: Carte,
  ) {
  }

  addToClientOrder(menu: Menu):void {
    this.client.getOrder().addMenu(menu);
  }

  findAndAddSetMenu(setMenuName: string): Menu {
    const electedMenu: Menu | undefined = this.carte.menus.find((menu) =>
      menu.name === setMenuName);
    if (typeof electedMenu === 'undefined') {
      throw new Error('menu not Found');
    }
    this.addToClientOrder(electedMenu);
    return electedMenu as Menu;
  }

  findAndAddPlate(plateName: string):PersonalizedMenu {
    const electedPlate: Plate | undefined = this.carte.plates.find(
        (cartePlate) => cartePlate.getName() === plateName);
    if (typeof electedPlate === 'undefined') {
      throw new TypeError('Plate not found');
    }
    const personalizedmenu = new PersonalizedMenu(plateName, [electedPlate]);
    this.addToClientOrder(personalizedmenu);
    return personalizedmenu;
  }

  createAndAddMenuWithEditions(choice: modifierOption, plate: Plate, menu: SetMenu): PersonalizedMenu {
    let menuName: string = '';
    menuName += plate.getName();

    const personalizeMenu = new PersonalizedMenu(menuName, menu.getPlates());

    if (choice === 'add') {
      personalizeMenu.addPlate(plate);
    } else {
      personalizeMenu.removePlate(plate);
    }
    this.addToClientOrder(personalizeMenu);
    return personalizeMenu;
  }


  printOrder():string {
    return this.client.getOrder().print();
  }

  showCarte():string {
    return this.carte.print();
  }

  getClientOrder():Order {
    return this.client.getOrder();
  }

  getClient():Client {
    return this.client;
  }
  getCarte():Carte {
    return this.carte;
  }
}
