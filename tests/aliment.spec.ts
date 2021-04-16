import 'mocha';
import {expect} from 'chai';
import {Fruit} from "../src/aliment/fruit";
import {Aliment} from "../src/aliment/aliment";



describe(`Clase Alimento`, () => {

  const aliment3 = new Fruit("arroz", 1.9);
  /*const aliment4 = new Alimento("bizcocho", "varios", [426,4.5,18.6], 3, "Barcelona");
  const aliment10 = new Alimento("avena", "cereales", [361,11.7,7.1], 1, "Tenerife");
  const aliment4 = new Alimento("Donuts", "varios", [426,6.1,23], 5, "Madrid");
  const aliment5 = new Alimento("carne de vaca", "carnes", [351,8,2.2], 12, "Barcelona");
  const aliment6 = new Alimento("pollo", "carnes", [351,8,2.2], 6, "Barcelona");
  const aliment7 = new Alimento("cebolla", "verduras", [351,8,2.2], 2, "Barcelona");
  const aliment8 = new Alimento("tomate", "verduras", [22,1,0.11], 4, "Barcelona");
  const aliment9 = new Alimento("lechuga", "verduras", [14,1.34,0.2], 1.99, "Barcelona");
  const aliment1 = new Alimento("pasta", "varios", [375,12,1.8], 0.66, "Barcelona");
  const aliment2 = new Alimento("arroz", "granos", [351,8,2.2], 2, "Barcelona");*/

      it('obteniendo el nombre del alimento', () => {
        expect(aliment3.getNameAliment()).to.be.equal("arroz");
      });

});