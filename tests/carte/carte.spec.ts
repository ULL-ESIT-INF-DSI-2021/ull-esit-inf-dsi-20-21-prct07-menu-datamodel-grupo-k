import 'mocha';
import {expect} from 'chai'
import {Carte} from '../../src/carte/carte'

describe('Carte test') => {
    it('Carte must be an instantiable clas', () => {
        expect(new Carte()).to.not.eq(TypeError);
    })
}