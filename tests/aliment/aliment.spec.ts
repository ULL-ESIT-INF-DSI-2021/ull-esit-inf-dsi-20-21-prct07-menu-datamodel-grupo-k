import 'mocha';
import {expect} from 'chai';
import {Fruit} from "../../src/aliment/fruit";
import {Vegetable} from "../../src/aliment/vegetable";
import {Aliment} from "../../src/aliment/aliment";
import {Cereal} from "../../src/aliment/cereal";
import {Seed} from "../../src/aliment/seed";
import {Fish} from "../../src/aliment/fish";
import {Legume} from "../../src/aliment/legume";
import {Meat} from "../../src/aliment/meat";


describe(`Aliment Test`, () => {
  const manzana = new Fruit("manzana", 1, 14, 1.34, 0.2, 15, 1.2, 3, 5, 2, 'España',"Barcelona")
  const avena = new Cereal("avena", 1, 11, 1.2, 0.5, 2, 1.8, 4, 5, 2, 'España',"Barcelona")
  const donuts = new Cereal("donuts", 1, 11, 1.2, 0.5, 2, 1.8, 4, 5, 2, 'España',"Barcelona")
  const bizcocho = new Cereal("bizcocho", 1, 11, 1.2, 0.5, 2, 1.8, 4, 5, 2, 'España',"Barcelona")
  const lechuga = new Vegetable("lechuga", 1, 11, 1.2, 0.5, 2, 1.8, 4, 5, 2, 'España',"Barcelona")
  const pasta = new Cereal("pasta", 1, 11, 1.2, 0.5, 2, 1.8, 4, 5, 2, 'España',"Barcelona")
  const cereza = new Fruit("ceraza", 1, 11, 1.2, 0.5, 2, 1.8, 4, 5, 2, 'España',"Barcelona")
  const carne_cordero = new Meat("carne de cordero", 1, 11, 1.2, 0.5, 2, 1.8, 4, 5, 2, 'España',"Barcelona")
  const nata = new Cereal("avena", 2, 11, 1.2, 0.5, 2, 1.8, 4, 5, 2, 'España',"Barcelona")
  const pan_rallado = new Cereal("pan rallado", 1, 11, 1.2, 0.8, 2, 1.8, 4, 5, 2, 'España',"Barcelona")
  const pasta_integral = new Cereal("pasta integral", 1, 11, 2.2, 0.5, 2, 2, 4, 5, 2, 'España',"Barcelona")
  const arroz_integral = new Cereal("arroz integral", 1, 11, 1.9, 0.5, 2, 9, 4, 5, 2, 'España',"Barcelona")
  const cane_conejo = new Meat("carne de conejo", 1, 11, 1.2, 0.2, 2, 1.8, 4, 5, 2, 'España',"Barcelona")



  it('obteniendo el nombre del alimento', () => {
    expect(nata).to.ownProperty("name");
  });

  it('obteniendo información del alimento lechuga', () => {
    expect(lechuga.printAliment()).to.be.equal("alimento:lechuga, precio:1 cantidad de proteianas:14, cantidad de lipidos: 1.34, cantidad de carbohidratos: 0.2");
  });
});