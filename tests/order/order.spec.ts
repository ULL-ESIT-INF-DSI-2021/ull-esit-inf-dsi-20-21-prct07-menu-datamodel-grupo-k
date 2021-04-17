import 'mocha';
import {expect} from 'chai';
import {Order} from '../../src/order/order';
import {Menu} from '../../src/carte/menu';
import {Carte} from '../../src/carte/carte';
import {Plate} from '../../src/carte/plate';

const menuOne = new Menu('menu1', 15, 'arrocito', 'grano' );
const menuTwo = new Menu('menu2', 10, 'platodemenuDOS', 'pescado');
const menuThree = new Menu('menu3', 14, 'plato3', 'grano');
const plateTwo = new Plate('pasta', 10);
const plateOne = new Plate('batata', 20);
const carte = new Carte([plateOne, plateTwo], [menuOne, menuTwo]);
const order = new Order(carte, [menuOne, menuTwo]);
const orderOutput = order.print();
console.log(orderOutput);

describe('Order test', ()=> {
  /* it('Order must be an instantiable class', () => {
    expect(new Order([plateOne, plateTwo])).to.not.equal(TypeError);
  });*/
  it('Order must be  instantiable without a Menu, just with a Carte', () => {
    expect(new Order(carte)).to.not.equal(TypeError);
  });
  it('Order must has a Plates atribute', () => {
    expect(order).to.ownProperty('carte');
  });
  it('Order must has a Menus atribute', () => {
    expect(order).to.ownProperty('menus');
  });
  it('Order Menus atribute must be accesible', () => {
    expect(order.menus).to.deep.equal([menuOne, menuTwo]);
  });
  it('Order Plates atribute must be accesible', () => {
    expect(order.carte).to.be.equal(carte);
  });
  it('Order  must print it information', () => {
    expect(order.print()).to.be.equal(orderOutput);
  });
  it('Order  must print it a void order, if it has not order', () => {
    expect(new Order(carte).print()).to.be.equal('Order Empty:' + '\n');
  });
  it('Order must add a menu', () => {
    order.addMenu(menuThree);
    expect(order.menus).to.deep.equal([menuOne, menuTwo, menuThree]);
  });
});
