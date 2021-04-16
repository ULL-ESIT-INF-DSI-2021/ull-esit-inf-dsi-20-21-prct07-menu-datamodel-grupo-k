import 'mocha';
import {expect} from 'chai';
import {Carte} from '../../src/carte/carte';
import {Menu} from '../../src/carte/menu';
import {Plate} from '../../src/carte/plate';


const plateTwo = new Plate('pasta', 10);
const plateOne = new Plate('batata', 20);
const menuOne = new Menu('menu1', 15, 'arrocito', 'grano' );
const menuTwo = new Menu('menu2', 10, 'platodemenuDOS','pescado');
const carte = new Carte([plateOne, plateTwo],[menuOne,menuTwo]);
const carteOutput = carte.print();
console.log(carteOutput);

describe('Carte test', ()=> {
  /*it('Carte must be an instantiable class', () => {
    expect(new Carte([plateOne, plateTwo])).to.not.equal(TypeError);
  });*/
  it('Carte must has a Plates atribute', () => {
    expect(carte).to.ownProperty('plates');
  });
  it('Carte must has a Menus atribute', () => {
    expect(carte).to.ownProperty('menus');
  });
  it('Carte Menus atribute must be accesible', () => {
    expect(carte.menus).to.deep.equal([menuOne,menuTwo]);
  });
  it('Carte Plates atribute must be accesible', () => {
    expect(carte.plates).to.deep.equal([plateOne, plateTwo]);
  });
  it('Carte must show all the menus and plates information', () => {
    expect(carte.print()).to.deep.equal(carteOutput);
  });
});
