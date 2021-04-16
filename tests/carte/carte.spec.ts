import 'mocha';
import {expect} from 'chai';
import {Carte} from '../../src/carte/carte';
import {Menu} from '../../src/carte/menu';
import {Plate} from '../../src/carte/plate';


const plateOne = Plate('pasta', 10);
const plateTwo = Plate('pasta', 10);
const carte = new Carte([plateOne, plateTwo]);

describe('Carte test', ()=> {
  it('Carte must be an instantiable class', () => {
    expect(new Carte([plateOne, plateTwo])).to.not.equal(TypeError);
  });
  it('Carte must has a Plates atribute', () => {
    expect(new Carte()).to.ownProperty('plates');
  });
});
