/* eslint-disable max-len */
import {Menu} from '../menu/menu';
import {Client} from '../client/client';
import {Order} from '../order/order';
import {Carte} from '../carte/carte';
import {PersonalizedMenu} from '../menu/personalizedmenu';
import {Plate} from '../plates/plate';

export type modifierOption = 'add' | 'remove'
export class Waiter {
  private order: Order;
  constructor(
      public readonly client: Client,
      public readonly carte: Carte,
  ) {
    this.order = this.client.order;
  }

  addToOrder(menu: Menu):void {
    this.order.menus.push(menu);
  }

  findAndAddSetMenu(setMenuName: string): Menu {
    const electedMenu: Menu | undefined = this.carte.menus.find((menu) =>
      menu.name === setMenuName);
    if (typeof electedMenu === 'undefined') {
      console.log('error');
      throw new TypeError('menu no encontrado');
    }
    this.addToOrder(electedMenu);
    return electedMenu as Menu;
  }

  findAndAddPlate(plateName: string):PersonalizedMenu {
    const electedPlate: Plate | undefined = this.carte.plates.find(
        (cartePlate) => cartePlate.getName() === plateName);
    if (typeof electedPlate === 'undefined') {
      throw new TypeError('Plate not found');
    }
    const personalizedmenu = new PersonalizedMenu(plateName, [electedPlate]);
    this.addToOrder(personalizedmenu);
    return personalizedmenu;
  }

  createAndAddMenuWithEditions(choice: modifierOption, plate: Plate, menu: Menu): PersonalizedMenu {
    let menuName: string = '';
    menuName += plate.getName();

    const personalizeMenu = new PersonalizedMenu(menuName, [plate]);

    if (choice === 'add') {
      personalizeMenu.addPlate(plate);
      return personalizeMenu;
    } else {
      personalizeMenu.removePlate(plate);
      return personalizeMenu;
    }
  }


  printOrder():string {
    return this.order.print();
  }

  showCarte():string {
    return this.carte.print();
  }

  getOrder():Order {
    return this.order;
  }

  getClient():Client {
    return this.client;
  }
  getCarte():Carte {
    return this.carte;
  }
}
