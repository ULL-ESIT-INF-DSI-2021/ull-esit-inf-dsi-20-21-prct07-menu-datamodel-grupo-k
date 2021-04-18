/* eslint-disable max-len */

import 'mocha';
import {expect} from 'chai';
import {Carte} from '../../src/carte/carte';
import {Menu} from '../../src/menu/menu';
import {SetMenu} from '../../src/menu/setmenu';
import {PersonalizedMenu} from '../../src/menu/personalizedmenu';
import {Entree} from '../../src/plates/entree';
import {MainCourse} from '../../src/plates/mainCourse';
import {SecondCourse} from '../../src/plates/secondCourse';
import {Dessert} from '../../src/plates/dessert';
import {Aliment} from '../../src/aliment/aliment';
import {Cereal} from '../../src/aliment/cereal';
import {Fish} from '../../src/aliment/fish';
import {Vegetable} from '../../src/aliment/vegetable';
import {Order} from '../../src/order/order';


// Aliments
const macarron = new Cereal('macarron', 2, 2, 3, 4, 5, 6, 9, 1, 2, 'espana', 'madrid');
const salmon = new Fish('salmon', 5, 9, 3, 4, 5, 6, 9, 1, 2, 'escocia', 'escocia');
const tomate = new Vegetable('tomate', 4, 2, 3, 5, 21, 5, 6, 4, 5, 'escocia', 'escocia');

const arroz = new Cereal('arroz', 2, 2, 3, 4, 5, 6, 9, 1, 2, 'arroz', 'arroz');
const atun = new Fish('atun', 5, 9, 3, 4, 5, 6, 9, 1, 2, 'atun', 'atun');
const albahaca = new Vegetable('albahaca', 4, 2, 3, 5, 21, 5, 6, 4, 5, 'albahaca', 'albahaca');

// Ingridients for Plate
const ingredientesParaMacarronConTomate = new Map<Aliment, number>();
ingredientesParaMacarronConTomate.set(macarron, 50);
ingredientesParaMacarronConTomate.set(tomate, 200);

const ingredientesParaSopa = new Map<Aliment, number>();
ingredientesParaSopa.set(albahaca, 50);
ingredientesParaSopa.set(tomate, 200);

// Plates
const plate1 = new Entree('macarron con tomate', ingredientesParaMacarronConTomate);
const plate2 = new MainCourse('OtroPLato', ingredientesParaMacarronConTomate);
const plate3 = new SecondCourse('postre', ingredientesParaMacarronConTomate);
const plate4 = new Dessert('postre', ingredientesParaSopa);
const plate5 = new Dessert('Sopa', ingredientesParaSopa);

// Menus
const menuOne = new SetMenu('menuOne', plate1, plate2, plate4);
const menuTwo = new SetMenu('menuTwo', plate1, plate2, plate4, plate3);
const menuThree = new PersonalizedMenu('menuthree', [plate5, plate5, plate4]);

// Carte
const carte = new Carte([plate1, plate2], [menuOne, menuTwo]);

// Order
const order = new Order([menuOne, menuTwo, menuThree]);



describe('Waiter test', ()=> {
  it('dummy', () => {
    expect(true).to.deep.equal(true);
  });
 /* it('Waiter must be instantiable just with a client and a Carte', () => {
    expect(new Waiter(client, carte)).to.ownProperty('order');
  });
  it('Waiter must has a order atribute', () => {
    expect(waiter).to.ownProperty('order');
  });
  it('Waiter must has a client atribute', () => {
    expect(waiter).to.ownProperty('client');
  });
  it('Waiter must has a carte atribute', () => {
    expect(waiter).to.ownProperty('carte');
  });
  it('Waiter order atribute must be accesible', () => {
    expect(waiter.getOrder()).to.be.equal(client.order);
  });
  it('Waiter client atribute must be accesible', () => {
    expect(waiter.getClient()).to.be.equal(client);
  });
  it('Waiter carte atribute must be accesible', () => {
    expect(waiter.getCarte()).to.be.equal(carte);
  });
  it('Waiter can add a menu to the order', () => {
    waiter.addToOrder(client.chooseSetMenu('menu2', carte));
    expect(waiter.getOrder()).to.be.equal(client.order);
  });
  it('Waiter can print the order', () => {
    expect(waiter.printOrder()).to.be.equal(client.order.print());
  });
  it('Waiter can show the Carte', () => {
    expect(waiter.showCarte()).to.be.equal(carte.print());
  });*/
});
