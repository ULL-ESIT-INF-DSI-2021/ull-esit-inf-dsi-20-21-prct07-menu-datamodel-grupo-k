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
});
