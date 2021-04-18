/* eslint-disable max-len */
import 'mocha';
import {expect} from 'chai';
import {Fish} from "../../src/aliment/fish";
import {Fruit} from "../../src/aliment/fruit";
import {Meat} from "../../src/aliment/meat";
import {Dessert} from "../../src/plates/dessert";

describe(`Dessert Tests`, () => {
  const Salmon = new Fish("Salmon", 9, 18.4, 12, 0, 11, 0, 0, 0, 69.6, "Miramar", "Santa Cruz");
  const Chufa = new Fruit("Chufa", 7, 6.1, 5, 42.5, 24, 0, 14.7, 17.4, 10.3, "Wuhan", "China");
  const Ballena = new Meat("Ballena", 43, 23.2, 80, 0, 45, 0, 0, 0, 73.4, "Sabadell", "Barcelona");

  const map = new Map();
  map.set(Salmon, 20);
  map.set(Chufa, 12);
  map.set(Ballena, 45);

  const Postre = new Dessert("Di mare", map);

  it('Postre.getName() returns value Di mare', () => {
    expect(Postre.getName()).to.equal("Di mare");
  });
  it('Postre.getPrice() returns value 59', () => {
    expect(Postre.getPrice()).to.equal(59);
  });
  it('Postre.getPredominantAlimentGroup() returns value [Meat, 45]', () => {
    expect(Postre.getPredominantAlimentGroup()).to.deep.equal(['Meat', 45]);
  });
  it('Postre.getIngredients() returns value -Ingrediente: Salmon, Cantidad: 20 -Ingrediente: Chufa, Cantidad: 12 -Ingrediente: Ballena, Cantidad: 45', () => {
    expect(Postre.getIngredients()).to.equal("Ingrediente: Salmon, Cantidad: 20\nIngrediente: Chufa, Cantidad: 12\nIngrediente: Ballena, Cantidad: 45\n");
  });
  it('Postre.getCalories() returns value 80', () => {
    expect(Postre.getCalories()).to.equal(80);
  });
  it('Postre.getCarbohydrates() returns value 42.5', () => {
    expect(Postre.getCarbohydrates()).to.equal(42.5);
  });
  it('Postre.getFats() returns value 97', () => {
    expect(Postre.getFats()).to.equal(97);
  });
  it('Postre.getFiber() returns value 17.4', () => {
    expect(Postre.getFiber()).to.equal(17.4);
  });
  it('Postre.getProtein() returns value 47.7', () => {
    expect(Postre.getProtein()).to.equal(47.7);
  });
  it('Postre.getStarch() returns value 0', () => {
    expect(Postre.getStarch()).to.equal(0);
  });
  it('Postre.getSugars() returns value 14.7', () => {
    expect(Postre.getSugars()).to.equal(14.7);
  });
  it('Postre.getWater() returns value 153.3', () => {
    expect(Postre.getWater()).to.equal(153.3);
  });
});
