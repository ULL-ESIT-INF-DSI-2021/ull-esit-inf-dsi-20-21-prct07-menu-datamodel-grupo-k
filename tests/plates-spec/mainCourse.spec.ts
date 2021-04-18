/* eslint-disable max-len */
import 'mocha';
import {expect} from 'chai';
import {Vegetable} from "../../src/aliment/vegetable";
import {Seed} from "../../src/aliment/seed";
import {Meat} from "../../src/aliment/meat";
import {MainCourse} from "../../src/plates/mainCourse";

describe(`MainCourse Tests`, () => {
  const Apio = new Vegetable("Apio", 1.80, 1.30, 2.5, 1.3, 3.5, 0, 1.3, 1.8, 95.4, "Miramar", "Santa Cruz");
  const Lentejas = new Seed("Lentejas", 3.5, 24.3, 9.5, 48.8, 12.5, 44.5, 1.2, 11.7, 10.8, "Wuhan", "China");
  const Tocino = new Meat("Tocino", 6.50, 8.4, 85.8, 0, 55.5, 0, 0, 0, 12.5, "Sabadell", "Barcelona");

  const map = new Map();
  map.set(Apio, 15);
  map.set(Lentejas, 25);
  map.set(Tocino, 60);

  const Principal = new MainCourse("Cachopo", map);

  it('Principal.getName() returns value Cachopo', () => {
    expect(Principal.getName()).to.equal("Cachopo");
  });
  it('Principal.getPrice() returns value 11.8', () => {
    expect(Principal.getPrice()).to.equal(11.8);
  });
  it('Principal.getPredominantAlimentGroup() returns value [Meat, 60]', () => {
    expect(Principal.getPredominantAlimentGroup()).to.deep.equal(['Meat', 60]);
  });
  it('Principal.getIngredients() returns value -Ingrediente: Apio, Cantidad: 15 -Ingrediente: Lentejas, Cantidad: 25 -Ingrediente: Tocino, Cantidad: 60', () => {
    expect(Principal.getIngredients()).to.equal("Ingrediente: Apio, Cantidad: 15\nIngrediente: Lentejas, Cantidad: 25\nIngrediente: Tocino, Cantidad: 60\n");
  });
  it('Principal.getCalories() returns value 71.5', () => {
    expect(Principal.getCalories()).to.equal(71.5);
  });
  it('Principal.getCarbohydrates() returns value 50.099999999999994', () => {
    expect(Principal.getCarbohydrates()).to.equal(50.099999999999994);
  });
  it('Principal.getFats() returns value 97.8', () => {
    expect(Principal.getFats()).to.equal(97.8);
  });
  it('Principal.getFiber() returns value 13.5', () => {
    expect(Principal.getFiber()).to.equal(13.5);
  });
  it('Principal.getProtein() returns value 34', () => {
    expect(Principal.getProtein()).to.equal(34);
  });
  it('Principal.getStarch() returns value 44.5', () => {
    expect(Principal.getStarch()).to.equal(44.5);
  });
  it('Principal.getSugars() returns value 2.5', () => {
    expect(Principal.getSugars()).to.equal(2.5);
  });
  it('Principal.getWater() returns value 118.7', () => {
    expect(Principal.getWater()).to.equal(118.7);
  });
});
