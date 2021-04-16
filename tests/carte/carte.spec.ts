import 'mocha';
import {expect} from 'chai';
import {Carte} from '../../src/carte/carte';
import {Menu} from '../../src/carte/menu';
import {Plate} from '../../src/carte/plate';


const plateTwo = new Plate('pasta', 10);
const plateOne = new Plate('pasta', 10);
const carte = new Carte([plateOne, plateTwo]);

describe('Carte test', ()=> {
  it('Carte must be an instantiable class', () => {
    expect(new Carte([plateOne, plateTwo])).to.not.equal(TypeError);
  });
  it('Carte must has a Plates atribute', () => {
    expect(carte).to.ownProperty('plates');
  });
  it('Carte must has a Menus atribute', () => {
    expect(carte).to.ownProperty('menus');
  });
});
