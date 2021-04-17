import 'mocha';
import {expect} from 'chai';
import {Client} from '../../src/client/client';
import {Menu} from '../../src/carte/menu';
import {Carte} from '../../src/carte/carte';
import {Order} from '../../src/order/order';
import {Plate} from '../../src/carte/plate';


const menuOne = new Menu('menu1', 15, 'arrocito', 'grano' );
const menuTwo = new Menu('menu2', 10, 'platodemenuDOS', 'pescado');
const plateTwo = new Plate('pasta', 10);
const plateOne = new Plate('batata', 20);
const carte = new Carte([plateOne, plateTwo], [menuOne, menuTwo]);
const order = new Order(carte);
const client = new Client(order);
const orderOutput = order.print();
console.log(orderOutput);

describe('Client test', ()=> {
  it('Client must has a order atribute', () => {
    expect(client).to.ownProperty('order');
  });
  it('Client must has a order atribute', () => {
    expect(client).to.ownProperty('totalPrice');
  });
  it('Client order atribute must be accesible', () => {
    expect(client.order).to.deep.equal(order);
  });
  it('Client totalPrice atribute must be accesible', () => {
    expect(client.getTotalPrice()).to.be.equal(0);
  });
  it('Client should choose a menu by its name', () => {
    expect(client.chooseSetMenu('menu1', carte)).to.be.equal(menuOne);
    expect(client.chooseSetMenu('menu6', carte)).to.be.equal(undefined);
  });
  it('Client should choose a plate by its name', () => {
    expect(client.choosePlate('batata', carte)).to.be.equal(plateOne);
    expect(client.choosePlate('mojo', carte)).to.be.equal(undefined);
  });
  it('Client totalPrice must increase when choosing a plate', () => {
    const client22 = new Client(new Order(carte));
    client22.choosePlate('batata', carte);
    expect(client22.getTotalPrice()).to.be.equal(20);
  });
  // it('Client should choose a set menu and be able add a plate to the menu, () => {
  //  expect(client.chooseSetMenuWithEdition('add',pasta,menu1).to.be.equal(personalizeMenu1WithPasta);
  // });
  // it('Client should choose a set menu and be able remove a plate to the menu, () => {
  //  expect(client.chooseSetMenuWithEdition('remove',pasta,menu1).to.be.equal(personalizeMenu1WithoutPasta);
  // });
  // it('Client should choose a set menu and be able add a plate, adding the total value () => {
  // client.chooseSetMenuWithEdition('add',pasta,menu1);
  //  expect(client.getTotalPrice()).to.be.equal(999);
  // });
  // it('Client should choose a set menu and be able remove a plate, substracting the total value () => {
  // client.chooseSetMenuWithEdition('remove',pasta,menu1);
  // expect(client.getTotalPrice()).to.be.equal(500);
  // });





});
