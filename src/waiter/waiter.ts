/* eslint-disable max-len */
import {Menu} from '../menu/menu';
import {Client} from '../client/client';
import {Order} from '../order/order';
import {Carte} from '../carte/carte';
import {PersonalizedMenu} from '../menu/personalizedmenu';
import {Plate} from '../plates/plate';
import {SetMenu} from '../menu/setmenu';

/**
 * an option to know if the client wants to __add__ or __remove__ a plate from a `SetMenu`
 */
export type modifierOption = 'add' | 'remove'
/**
 * Save the `Clients` order, and allows to find `Menus` and `Plates` in the `Carte`
 */
export class Waiter {
  /**
   * @param client A `client` to be serve
   * @param carte The Restaurant `Carte`
   */
  constructor(
      private client: Client,
      public readonly carte: Carte,
  ) {}

  /**
   * Add a menu to the client
   * @param menu Menu to add to the Clients Order
   */
  addToClientOrder(menu: Menu):void {
    this.client.getOrder().addMenu(menu);
  }

  /**
   * Find a Set menu in the carte and write it in the client order
   * @param setMenuName The Set menu name to be added in the client order
   * @returns if its found, retunrn the client SetMenu and it is adde in the order. Otherwise, raise and error
   */
  findAndAddSetMenu(setMenuName: string): Menu {
    const electedMenu: Menu | undefined = this.carte.menus.find((menu) =>
      menu.name === setMenuName);
    if (typeof electedMenu === 'undefined') {
      throw new Error('menu not Found');
    }
    this.addToClientOrder(electedMenu);
    return electedMenu as Menu;
  }

  /**
   * Find a Plate menu in the carte and write it in the client order
   * @param plateName The plate name to be added in the Carte
   * @returns if its found, retunrn the client plate and it is adde in the order. Otherwise, raise and error
   */
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

  /**
   * Given a `SetMenu`, a `Plate` can be added or remove from it
   * @param choice The option of removing or adding a `plate`
   * @param plate A `Plate` to be added or remove
   * @param menu A `menu` to be edited
   * @returns A `PersonalizedMenu`, with the edited menu
   */
  createAndAddMenuWithEditions(choice: modifierOption, plate: Plate, menu: SetMenu): PersonalizedMenu {
    const menuName: string = menu.name;

    const personalizeMenu = new PersonalizedMenu(menuName, menu.getPlates());

    if (choice === 'add') {
      personalizeMenu.addPlate(plate);
    } else {
      personalizeMenu.removePlate(plate);
    }
    this.addToClientOrder(personalizeMenu);
    return personalizeMenu;
  }


  /**
   * Print the clients order
   * @returns a string with the clients order
   */
  printOrder():string {
    return this.client.getOrder().print();
  }

  /**
   * Print the `Carte`
   * @returns A string with the carte information
   */
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
