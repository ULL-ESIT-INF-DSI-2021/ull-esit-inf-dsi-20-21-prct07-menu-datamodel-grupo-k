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
import {Client} from '../../src/client/client';
import {Waiter} from '../../src/waiter/waiter';


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
const menuFour = new PersonalizedMenu(plate1.getName(), [plate1, plate2, plate4]);
const menuFive = new PersonalizedMenu(plate2.getName(), [plate1, plate2, plate4]);
menuFour.addPlate(plate1);
menuFive.removePlate(plate2);


// Carte
const carte = new Carte([plate1, plate2, plate4], [menuOne, menuTwo]);

// Order
const order = new Order([menuOne]);
const voidOrder = new Order();
const waiterOrder = new Order();

// Client
const client = new Client();
const output:string = client.print();

// waiter
const waiter = new Waiter(client, carte);


describe('Waiter test', ()=> {
  it('Waiter must be instantiable just with a client and a Carte', () => {
    expect(new Waiter(client, carte)).to.not.equal(TypeError);
  });
  it('Waiter must has a client atribute', () => {
    expect(waiter).to.ownProperty('client');
  });
  it('Waiter must has a carte atribute', () => {
    expect(waiter).to.ownProperty('carte');
  });
  it('Waiter client atribute must be accesible', () => {
    expect(waiter.getClient()).to.be.equal(client);
  });
  it('Waiter carte atribute must be accesible', () => {
    expect(waiter.getCarte()).to.be.equal(carte);
  });
  it('Waiter can add a menu to the order, the order and the client order must be update. ', () => {
    waiterOrder.addMenu(menuOne);
    expect(waiter.findAndAddSetMenu(menuOne.name)).to.be.equal(menuOne);
    expect(waiter.getClientOrder()).to.deep.equal(waiter.getClient().getOrder());
    expect(waiter.getClient().getOrder()).to.deep.equal(waiterOrder);
  });

  it('Waiter can add a plate to the order, the order and the client order must be update. ', () => {
    waiterOrder.addMenu(new PersonalizedMenu(plate4.getName(), [plate4]));
    expect(waiter.findAndAddPlate(plate4.getName())).to.deep.equal(new PersonalizedMenu(plate4.getName(), [plate4])); // adding plate
    expect(waiter.getClientOrder()).to.deep.equal(waiter.getClient().getOrder()); // client order update
    expect(waiter.getClient().getOrder()).to.deep.equal(waiterOrder); // checking that is the right order
  });

  it('Waiter can add a Menu with edition to the order, the order and the client order must be update. ', () => {
    waiterOrder.addMenu(menuFour);
    expect(waiter.createAndAddMenuWithEditions('add', plate1, menuOne)).to.deep.equal(menuFour); // adding plate
    expect(waiter.getClientOrder()).to.deep.equal(waiter.getClient().getOrder()); // client order update
    expect(waiter.getClient().getOrder()).to.deep.equal(waiterOrder); // checking that is the right order
  });

  it('Waiter can create a Menu with a remove edition to the order, the order and the client order must be update. ', () => {
    waiterOrder.addMenu(menuFive);
    expect(waiter.createAndAddMenuWithEditions('remove', plate2, menuOne)).to.deep.equal(menuFive); // adding plate
    expect(waiter.getClientOrder()).to.deep.equal(waiter.getClient().getOrder()); // client order update
    expect(waiter.getClient().getOrder()).to.deep.equal(waiterOrder); // checking that is the right order
  });

  it('Waiter can print the order', () => {
    expect(waiter.printOrder()).to.be.equal(client.getOrder().print());
  });
  it('Waiter can show the Carte', () => {
    expect(waiter.showCarte()).to.be.equal(carte.print());
  });
});
