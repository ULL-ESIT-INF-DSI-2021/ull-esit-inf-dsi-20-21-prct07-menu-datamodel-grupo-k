import {Menu} from '../menu/menu';
export class Order {
  private totalPrice: number = 0
  constructor(public readonly menus: Menu[] = []) {}


  addMenu(menu: Menu):void {
    this.menus.push(menu);
    this.totalPrice += menu.getPrice();
  }

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
