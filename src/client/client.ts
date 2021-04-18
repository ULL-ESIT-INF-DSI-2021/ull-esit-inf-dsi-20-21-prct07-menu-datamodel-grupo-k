import {Order} from '../order/order';

/**
 * Client that consume food in a restaurant, has an `order`.
 */
export class Client {
  private order: Order = new Order();
  constructor() {}

  /**
   * print the clients order
   * @returns In a string,  the clients order
   */
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
