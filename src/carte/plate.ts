export class Plate {
  constructor(
      public name: string,
      public price: number,
  ) {}

  print():string {
    let output: string = '';
    output += 'name: ' + this.name; + '\n';
    output += 'price: ' + this.price + '\n';
    console.log(output);
    return output;
  }
}

let plate = new Plate('Plato1',122,)
plate.print();