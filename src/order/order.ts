/* eslint-disable max-len */
import {Menu} from '../menu/menu';

/**
 * Representation of a __client__ order in a restaurant, containt the __menus__ of the client´s choice, and also the ___plates__
 */
export class Order {
  private totalPrice: number = 0
  /**
   * @param totalPrice, the total price of al the food consumed
   * @param menus Menus and Plates consumed
   * @param
   */
  constructor(public readonly menus: Menu[] = []) {}


  /**
   * Funtion
   * @param menu the `menu` to be added to the order
   */
  addMenu(menu: Menu):void {
    this.menus.push(menu);
    this.totalPrice += menu.getPrice();
  }

  /**
   * Print all the menus and plates consumed, including the total price
   * if the order is Empty, it show that the order is empty
   * @returns A string output with all the menus and plates consumed, including the total price
   */
  print():string {
    let output: string = '';
    if (this.menus.length === 0) {
      output += 'Empty Order:' + '\n';
    } else {
      output += 'Your Order is:' + '\n';
      output += '--Menus--' + '\n';
      this.menus.forEach((menu) => {
        output += menu.name + '\n';
      });
      output += '--TOTAL--' + '\n';
      output += this.totalPrice;
    }
    return output;
  }

  getTotalPrice():number {
    return this.totalPrice;
  }

  getMenus():Menu[] {
    return this.menus;
  }
}
