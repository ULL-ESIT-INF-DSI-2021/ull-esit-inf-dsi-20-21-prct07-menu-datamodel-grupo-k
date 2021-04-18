/* eslint-disable max-len */

import 'mocha';
import {expect} from 'chai';
import {Carte} from '../../src/carte/carte';
import {Menu} from '../../src/menu/menu';
import {SetMenu} from '../../src/menu/setmenu';
import {PersonalizedMenu} from '../../src/menu/personalizedmenu';
import {Entree} from '../../src/plates/entree';
import {MainCourse} from '../../src/plates/mainCourse';
import {SecondCourse} from '../../src/plates/secondCourse';
import {Dessert} from '../../src/plates/dessert';
import {Aliment} from '../../src/aliment/aliment';
import {Cereal} from '../../src/aliment/cereal';
import {Fish} from '../../src/aliment/fish';
import {Vegetable} from '../../src/aliment/vegetable';


// Aliments
const macarron = new Cereal('macarron', 2, 2, 3, 4, 5, 6, 9, 1, 2, 'espana', 'madrid');
const salmon = new Fish('salmon', 5, 9, 3, 4, 5, 6, 9, 1, 2, 'escocia', 'escocia');
const tomate = new Vegetable('tomate', 4, 2, 3, 5, 21, 5, 6, 4, 5, 'escocia', 'escocia');

const arroz = new Cereal('arroz', 2, 2, 3, 4, 5, 6, 9, 1, 2, 'arroz', 'arroz');
const atun = new Fish('atun', 5, 9, 3, 4, 5, 6, 9, 1, 2, 'atun', 'atun');
const albahaca = new Vegetable('albahaca', 4, 2, 3, 5, 21, 5, 6, 4, 5, 'albahaca', 'albahaca');

// Ingridients for Plate
const ingredientesParaMacarronConTomate = new Map<Aliment, number>();
ingredientesParaMacarronConTomate.set(macarron, 50);
ingredientesParaMacarronConTomate.set(tomate, 200);

const ingredientesParaSopa = new Map<Aliment, number>();
ingredientesParaSopa.set(albahaca, 50);
ingredientesParaSopa.set(tomate, 200);

// Plates
const plate1 = new Entree('macarron con tomate', ingredientesParaMacarronConTomate);
const plate2 = new MainCourse('OtroPLato', ingredientesParaMacarronConTomate);
const plate3 = new SecondCourse('postre', ingredientesParaMacarronConTomate);
const plate4 = new Dessert('postre', ingredientesParaSopa);
const plate5 = new Dessert('Sopa', ingredientesParaSopa);


// Menus
const menuOne = new SetMenu('menuOne', plate1, plate2, plate4);
const menuTwo = new SetMenu('menuTwo', plate1, plate2, plate4, plate3);
const menuThree = new PersonalizedMenu('menuthree', [plate5, plate5, plate4]);

// Carte

const carte = new Carte([plate1, plate2], [menuOne, menuTwo]);

const output = carte.print();

describe('Carte test ...', ()=> {
  it('Carte must be an instantiable class', () => {
    expect(new Carte([plate1, plate2], [menuOne, menuTwo])).to.not.equal(TypeError);
  });
  it('Carte must has a Plates atribute', () => {
    expect(carte).to.ownProperty('plates');
  });
  it('Carte must has a Menus atribute', () => {
    expect(carte).to.ownProperty('menus');
  });
  it('Carte Menus atribute must be accesible', () => {
    expect(carte.menus).to.deep.equal([menuOne, menuTwo]);
  });
  it('Carte Plates atribute must be accesible', () => {
    expect(carte.plates).to.deep.equal([plate1, plate2]);
  });
  it('Carte must show all the menus and plates information', () => {
    expect(carte.print()).to.deep.equal(output);
  });
});
