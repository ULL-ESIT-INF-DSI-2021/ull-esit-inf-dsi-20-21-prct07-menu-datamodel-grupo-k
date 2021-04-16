import {Plate} from './plate';
import {Menu} from './menu';
export class Carte {
  constructor(
        public readonly plates: Plate[],
        public readonly menus: Menu[],
  ) {}
}
