import {Menu} from '../menu/menu';
import {Client} from '../client/client';
import {Order} from '../order/order';
import {Carte} from '../carte/carte';

export class Waiter {
  private order: Order;
  constructor(
      public readonly client: Client,
      public readonly carte: Carte
  ) {
    this.order = this.client.order;
  }

  addToOrder(menu: Menu):void {
    this.order.menus.push(menu);
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
