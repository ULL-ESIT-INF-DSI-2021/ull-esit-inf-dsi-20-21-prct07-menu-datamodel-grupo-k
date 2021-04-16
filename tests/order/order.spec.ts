import 'mocha';
import {expect} from 'chai';
import {Order} from '../../src/order/order';
import {Menu} from '../../src/order/menu';
import {Carte} from '../../src/carte/carte';
import {Plate} from '../../src/carte/plate';

const menuOne = new Menu('menu1', 15, 'arrocito', 'grano' );
const menuTwo = new Menu('menu2', 10, 'platodemenuDOS','pescado');
const plateTwo = new Plate('pasta', 10);
const plateOne = new Plate('batata', 20);
const carte = new Carte([plateOne, plateTwo],[menuOne,menuTwo]);
const order = new Order(carte,[menuOne,menuTwo]);
const orderOutput = order.print();

describe('Order test', ()=> {
  /*it('Order must be an instantiable class', () => {
    expect(new Order([plateOne, plateTwo])).to.not.equal(TypeError);
  });*/
  it('Order must has a Plates atribute', () => {
    expect(order).to.ownProperty('carte');
  });
  it('Order must has a Menus atribute', () => {
    expect(order).to.ownProperty('menus');
  });
  it('Order Menus atribute must be accesible', () => {
    expect(order.menus).to.deep.equal([menuOne,menuTwo]);
  });
  it('Order Plates atribute must be accesible', () => {
    expect(order.carte).to.deep.equal(carte);
  });
  it('Order must show all the menus and plates information', () => {
    expect(order.print()).to.deep.equal(carteOutput);
  });
});
