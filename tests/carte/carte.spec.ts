import 'mocha';
import {expect} from 'chai';
import {Carte} from '../../src/carte/carte';


const carte = new Carte();

describe('Carte test', ()=> {
  it('Carte must be an instantiable class', () => {
    expect(new Carte()).to.not.equal(TypeError);
  });
});
