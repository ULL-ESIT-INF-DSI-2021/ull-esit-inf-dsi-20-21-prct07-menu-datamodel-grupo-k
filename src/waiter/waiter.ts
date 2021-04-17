import 'mocha';
import {expect} from 'chai';
import {Client} from '../../src/client/client';
import {Menu} from '../../src/carte/menu';
import {Carte} from '../../src/carte/carte';
import {Order} from '../../src/order/order';
import {Plate} from '../../src/carte/plate';
import {Waiter} from '../../src/carte/waiter';


const menuOne = new Menu('menu1', 15, 'arrocito', 'grano' );
const menuTwo = new Menu('menu2', 10, 'platodemenuDOS', 'pescado');
const plateTwo = new Plate('pasta', 10);
const plateOne = new Plate('batata', 20);
const carte = new Carte([plateOne, plateTwo], [menuOne, menuTwo]);
const order = new Order(carte);
const client = new Client(order);
const orderOutput = order.print();
const waiter = new Waiter(client)

describe('Waiter test', ()=> {
  it('Waiter must be instantiable just with a client', () => {
    expect(waiter).to.ownProperty('order');
  });
  it('Waiter must has a order atribute', () => {
    expect(waiter).to.ownProperty('order');
  });
  it('Waiter order atribute must be accesible', () => {
    expect(waiter.getOrder()).to.be.equal([]);
  });
  it('Waiter client atribute must be accesible', () => {
    expect(waiter.getClient()).to.be.equal(client);
  });
  it('Waiter can add a menu tu the order', () => {
    waiter.addToOrder(client.chooseSetMenu('menuTwo',carte))
    expect(waiter.getOrder()).to.be.equal([menuTwo]);
  });
  it('Waiter can print the order', () => {
    expect(waiter.printOrder()).to.be.equal(client.order.print());
  });
  it('Waiter can show the Carte', () => {
    expect(waiter.showCarte()).to.be.equal(carte.print());
  });

});
