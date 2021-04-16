import {Carte} from '../carte/carte';
import {Menu} from '../carte/menu';
export class Order {
  constructor(
        public readonly carte: Carte,
        public readonly menus: Menu[],
  ) {}

}
