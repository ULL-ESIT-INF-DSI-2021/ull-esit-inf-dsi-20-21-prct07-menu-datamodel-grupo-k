export class Menu {
  constructor(
        public readonly name: string,
        public readonly price: number,
        public readonly plate: string,
        public readonly alimentGroupList: string,
  ) {}

  print():string {
    let output: string = '';
    output += 'name: ' + this.name; + '\n';
    output += 'price: ' + this.price + '\n';
    output += 'plates: ' + this.plate + '\n';
    return output;
  }
}


const menu = new Menu('menu1', 255, 'macarron', 'pasta');
menu.print();
