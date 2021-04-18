import 'mocha';
import {expect} from 'chai';
import {Fruit} from "../../src/aliment/fruit";
import {Vegetable} from "../../src/aliment/vegetable";
import {Aliment} from "../../src/aliment/aliment";



describe(`Clase Alimento`, () => {

  const aliment3 = new Fruit("arroz", 1.9, 351,8,2);
  const aliment9 = new Vegetable("lechuga", 1, 14,1.34,0.2, 15, 1.2, 3, 5, 2,"Barcelona");
  /*const aliment4 = new Alimento("bizcocho", "varios", [426,4.5,18.6], 3, "Barcelona");
  const aliment10 = new Alimento("avena", "cereales", [361,11.7,7.1], 1, "Tenerife");*/

      it('obteniendo el nombre del alimento', () => {
        expect(aliment3.getNameAliment()).to.be.equal("arroz");
      });
      it('obteniendo informacion del alimento', () => {
        expect(aliment3.printAliment()).to.be.equal("alimento:arroz, precio:1.9 cantidad de proteianas:351, cantidad de lipidos: 8, cantidad de carbohidratos: 2");
    });

    it('obteniendo información del alimento lechuga', () => {
        expect(aliment9.printAliment()).to.be.equal("alimento:lechuga, precio:1 cantidad de proteianas:14, cantidad de lipidos: 1.34, cantidad de carbohidratos: 0.2");
      });
});