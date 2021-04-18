/* eslint-disable max-len */
import 'mocha';
import {expect} from 'chai';
import {Cereal} from "../../src/aliment/cereal";
import {Fish} from "../../src/aliment/fish";
import {Fruit} from "../../src/aliment/fruit";
import {Entree} from "../../src/plates/entree";

describe(`Entree Tests`, () => {
  const Arroz = new Cereal("Arroz Blanco", 0.25, 7, 0.12, 86, 4, 85.8, 0.2, 0.2, 5.9, "Miramar", "Santa Cruz");
  const Anguila = new Fish("Anguila", 6.50, 16.3, 32, 0, 25, 0, 0, 0, 68.2, "Wuhan", "China");
  const Aguacate = new Fruit("Aguacate", 2.80, 1.5, 2.5, 5.9, 13, 0, 5.9, 1.8, 78.8, "Sabadell", "Barcelona");

  const map = new Map();
  map.set(Arroz, 70);
  map.set(Anguila, 15);
  map.set(Aguacate, 15);

  const Entrante = new Entree("Maki Sushi", map);

  it('Entrante.getName() returns value Maki Sushi', () => {
    expect(Entrante.getName()).to.equal("Maki Sushi");
  });
  it('Entrante.getPrice() returns value 9.55', () => {
    expect(Entrante.getPrice()).to.equal(9.55);
  });
  it('Entrante.getPredominantAlimentGroup() returns value [Cereal, 70]', () => {
    expect(Entrante.getPredominantAlimentGroup()).to.deep.equal(['Cereal', 70]);
  });
  it('Entrante.getIngredients() returns value -Ingrediente: Arroz Blanco, Cantidad: 70 -Ingrediente: Anguila, Cantidad: 15 -Ingrediente: Aguacate, Cantidad: 15', () => {
    expect(Entrante.getIngredients()).to.equal("Ingrediente: Arroz Blanco, Cantidad: 70\nIngrediente: Anguila, Cantidad: 15\nIngrediente: Aguacate, Cantidad: 15\n");
  });
  it('Entrante.getCalories() returns value 42', () => {
    expect(Entrante.getCalories()).to.equal(42);
  });
  it('Entrante.getCarbohydrates() returns value 91.9', () => {
    expect(Entrante.getCarbohydrates()).to.equal(91.9);
  });
  it('Entrante.getFats() returns value 34.62', () => {
    expect(Entrante.getFats()).to.equal(34.62);
  });
  it('Entrante.getFiber() returns value 2', () => {
    expect(Entrante.getFiber()).to.equal(2);
  });
  it('Entrante.getProtein() returns value 24.8', () => {
    expect(Entrante.getProtein()).to.equal(24.8);
  });
  it('Entrante.getStarch() returns value 85.8', () => {
    expect(Entrante.getStarch()).to.equal(85.8);
  });
  it('Entrante.getSugars() returns value 6.1000000000000005', () => {
    expect(Entrante.getSugars()).to.equal(6.1000000000000005);
  });
  it('Entrante.getWater() returns value 152.9', () => {
    expect(Entrante.getWater()).to.equal(152.9);
  });
});
