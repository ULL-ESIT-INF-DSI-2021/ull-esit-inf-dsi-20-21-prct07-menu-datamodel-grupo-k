/* eslint-disable max-len */
import 'mocha';
import {expect} from 'chai';
import {Fish} from "../../src/aliment/fish";
import {Fruit} from "../../src/aliment/fruit";
import {Meat} from "../../src/aliment/meat";
import {SecondCourse} from "../../src/plates/secondCourse";

describe(`SecondCourse Tests`, () => {
  const Rodaballo = new Fish("Rodaballo", 15, 16.1, 4, 0, 5, 0, 0, 0, 80.3, "Miramar", "Santa Cruz");
  const UvasNegras = new Fruit("Uvas Negras", 12, 0.6, 0.5, 15.5, 6, 0, 15.5, 0.4, 83.5, "Wuhan", "China");
  const Panceta = new Meat("Panceta", 8, 12.5, 50, 0, 45, 0, 0, 0, 40.9, "Sabadell", "Barcelona");

  const map = new Map();
  map.set(Rodaballo, 20);
  map.set(UvasNegras, 12);
  map.set(Panceta, 45);

  const Secundario = new SecondCourse("Rodaballo Frito", map);

  it('Secundario.getName() returns value Rodaballo Frito', () => {
    expect(Secundario.getName()).to.equal("Rodaballo Frito");
  });
  it('Secundario.getPrice() returns value 35', () => {
    expect(Secundario.getPrice()).to.equal(35);
  });
  it('Secundario.getPredominantAlimentGroup() returns value [Meat, 45]', () => {
    expect(Secundario.getPredominantAlimentGroup()).to.deep.equal(['Meat', 45]);
  });
  it('Secundario.getIngredients() returns value -Ingrediente: Rodaballo, Cantidad: 20 -Ingrediente: Uvas Negras, Cantidad: 12 -Ingrediente: Panceta, Cantidad: 45', () => {
    expect(Secundario.getIngredients()).to.equal("Ingrediente: Rodaballo, Cantidad: 20\nIngrediente: Uvas Negras, Cantidad: 12\nIngrediente: Panceta, Cantidad: 45\n");
  });
  it('Secundario.getCalories() returns value 56', () => {
    expect(Secundario.getCalories()).to.equal(56);
  });
  it('Secundario.getCarbohydrates() returns value 15.5', () => {
    expect(Secundario.getCarbohydrates()).to.equal(15.5);
  });
  it('Secundario.getFats() returns value 54.5', () => {
    expect(Secundario.getFats()).to.equal(54.5);
  });
  it('Secundario.getFiber() returns value 0.4', () => {
    expect(Secundario.getFiber()).to.equal(0.4);
  });
  it('Secundario.getProtein() returns value 29.200000000000003', () => {
    expect(Secundario.getProtein()).to.equal(29.200000000000003);
  });
  it('Secundario.getStarch() returns value 0', () => {
    expect(Secundario.getStarch()).to.equal(0);
  });
  it('Secundario.getSugars() returns value 15.5', () => {
    expect(Secundario.getSugars()).to.equal(15.5);
  });
  it('Secundario.getWater() returns value 204.70000000000002', () => {
    expect(Secundario.getWater()).to.equal(204.70000000000002);
  });
});
