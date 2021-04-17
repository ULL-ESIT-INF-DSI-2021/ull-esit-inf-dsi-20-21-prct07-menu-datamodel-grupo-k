/*
import 'mocha';
import {expect} from 'chai';
import {Client} from '../../src/client/client';
import {Menu} from '../../src/carte/menu';
import {Carte} from '../../src/carte/carte';
import {Plate} from '../../src/carte/plate';



const menuOne = new Menu('menu1', 15, 'arrocito', 'grano' );
const menuTwo = new Menu('menu2', 10, 'platodemenuDOS','pescado');
const plateTwo = new Plate('pasta', 10);
const plateOne = new Plate('batata', 20);
const carte = new Carte([plateOne, plateTwo], [menuOne,menuTwo]);
const order = new Client(carte,[menuOne, menuTwo]);
const client = new Client(carte,[menuOne, menuTwo]);
const orderOutput = order.print();
console.log(orderOutput);

describe('Client test', ()=> {

  it('Client must has a Plates atribute', () => {
    expect(order).to.ownProperty('carte');
  });
  it('Client must has a Menus atribute', () => {
    expect(order).to.ownProperty('menus');
  });
  it('Client Menus atribute must be accesible', () => {
    expect(order.menus).to.deep.equal([menuOne,menuTwo]);
  });
  it('Client Plates atribute must be accesible', () => {
    expect(order.carte).to.be.equal(carte);
  });
  it('Client Plates atribute must be accesible', () => {
    expect(order.print()).to.be.equal(orderOutput);
  });
  it('Client should chooose a menu by its name', () => {
    expect(carte.findMenu('menu1')).to.be.equal(menuOne);
  });
  it('Client should chooose a plate by its name', () => {
    expect(carte.findPlate('batata')).to.be.equal(plateOne);
  });
}); 

*/