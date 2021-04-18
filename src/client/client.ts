/* eslint-disable max-len */
import {Order} from '../order/order';

export type modifierOption = 'add' | 'remove'
export class Client {
  private order: Order = new Order();
  constructor() {}

  print():string {
    let output: string = '';
    output += 'My order is:' + '\n';
    output += this.order.print()+'\n';
    return output;
  }

  getOrder(): Order {
    return this.order;
  }
}
