export class Plate {
  constructor(
      public name: string,
      public price: number,
  ) {}

  print():string {
    let output: string = '';
    output += 'name: ' + this.name; + '\n';
    output += 'price: ' + this.price + '\n';
    return output;
  }
}

let plate = new Plate('Plato1',122,)
plate.print();