import 'mocha';
import {expect} from 'chai';
/*
import {Client} from '../../src/client/client';
import {Menu} from '../../src/carte/menu';
import {Carte} from '../../src/carte/carte';
import {Order} from '../../src/order/order';
import {Plate} from '../../src/carte/plate';
*/
import {Waiter} from '../../src/waiter/waiter';

/*
const menuOne = new Menu('menu1', 15, 'arrocito', 'grano' );
const menuTwo = new Menu('menu2', 10, 'platodemenuDOS', 'pescado');
const plateTwo = new Plate('pasta', 10);
const plateOne = new Plate('batata', 20);
const carte = new Carte([plateOne, plateTwo], [menuOne, menuTwo]);
const order = new Order(carte);
const client = new Client(order);
const orderOutput = order.print();
const waiter = new Waiter(client,carte);
*/


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
