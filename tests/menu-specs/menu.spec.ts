import 'mocha';
import {expect} from 'chai';
import {Menu} from '../../src/menu/menu';
import {SetMenu} from '../../src/menu/setmenu';
import {PersonalizedMenu} from '../../src/menu/personalizedmenu';
import { Meat } from '../../src/aliment/meat';
import { Cereal } from '../../src/aliment/cereal';
import {Vegetable} from '../../src/aliment/vegetable'
import { Aliment } from '../../src/aliment/aliment';
import { Entree } from '../../src/plates/entree';
import { MainCourse } from '../../src/plates/mainCourse';
import { Dessert } from '../../src/plates/dessert';

describe('Pruebas de menu', () => {

    const pollo = new Meat("Pollo", 80, 20, 12, 25, 32, 45, 87, 98, 14, "Tenerife", "Santa Cruz");
    const papas = new Cereal("Papa", 21, 22, 23, 24, 25, 26, 27, 28, 29, "Tenerife", "Santa Cruz");
    const zanahoria = new Vegetable("Zanahoria", 38, 37, 36, 35, 34, 33, 32, 31, 30, "Tenerife", "Santa Cruz");
    const arroz = new Cereal("Arroz", 39, 40, 41, 42, 43, 44, 45, 46, 47, "Tenerife", "Santa Cruz");
    const tomate = new Vegetable("Tomate", 48, 49, 50, 51, 52, 53, 54, 55, 56, "Tenerife", "Santa Cruz")
    const lechuga = new Vegetable("Lechuga", 65, 64, 63, 62, 61, 60, 59, 58, 57, "Tenerife", "Santa Cruz");

    const ingredientes = new Map<Aliment, number>();
    ingredientes.set(lechuga, 40)
    ingredientes.set(tomate, 30);

    const pe = new Entree("Ensalada", ingredientes);

    ingredientes.clear();
    ingredientes.set(pollo, 100);
    ingredientes.set(papas, 90);
    ingredientes.set(zanahoria, 80);

    const pp = new MainCourse("Tabla Japonesa", ingredientes);

    ingredientes.clear();
    ingredientes.set(arroz, 100);

    const pd = new Dessert("Arroz con leche", ingredientes);

    const menu_predefinido = new SetMenu("Chiquito almuerzo", pe, pp, pd);
    const menu_personalizado = new PersonalizedMenu("Menu perzonalizado", [pe, pd]);

    it('menu_predefinido es un objeto de tipo menu', () => {
        expect(menu_predefinido instanceof Menu).to.be.equal(true);
    });

    it('menu_personalizado es un objeto de tipo menu', () => {
        expect(menu_personalizado instanceof Menu).to.be.equal(true);
    });

    it('menu_personalizado tiene 2 platos', () => {
        expect(menu_personalizado.getPlates().length).to.be.equal(2);
    });

    it('Calorias de menu_predefinido son 247', () => {
        expect(menu_predefinido.calories).to.be.equal(247);
    });

    it('Proteinas de menu_predefinido son 232', () => {
        expect(menu_predefinido.protein).to.be.equal(232);
    });

    it('Grasas de menu_predefinido son 225', () => {
        expect(menu_predefinido.fats).to.be.equal(225);
    });

    it('Carbohidratos de menu_predefinido son 239', () => {
        expect(menu_predefinido.carbohydrates).to.be.equal(239);
    });

    it('Almidon de menu_predefinido son 261', () => {
        expect(menu_predefinido.starch).to.be.equal(261);
    });

    it('Azucar de menu_predefinido son 304', () => {
        expect(menu_predefinido.sugars).to.be.equal(304);
    });

    it('Fibra de menu_predefinido son 316', () => {
        expect(menu_predefinido.fiber).to.be.equal(316);
    });

    it('Agua de menu_predefinido son 233', () => {
        expect(menu_predefinido.water).to.be.equal(233);
    });

    it('Alimentos predominantes de menu_predefinido son vegetales, carnes y cereales', () => {
        expect(menu_predefinido.getAlimentGroupList()).to.deep.equal([["Vegetable",70],["Meat",100],["Cereal",100]]);
    });

    it('Muestra informacion de menu_predefinido', () => {
        expect(menu_predefinido.print()).to.deep.equal('Nombre: Chiquito almuerzo\nPrecio: 291\nPlatos: \nNombre : Ensalada\n Precio : 113\nNombre : Tabla Japonesa\n Precio : 139\nNombre : Arroz con leche\n Precio : 39\nComposicion Nutricional: \nCalorias: 247\nProteinas: 232\nGrasas: 225\nCarbohidratos: 239\nAlmidon: 261\nAzucar: 304\nFibra: 316\nAgua: 233\nGrupo de alimento predominante: Vegetable,70,Meat,100,Cereal,100\n');
    });

    it('Calorias de menu_personalizado son 156', () => {
        expect(menu_personalizado.calories).to.be.equal(156);
    });

    it('Proteinas de menu_personalizado son 153', () => {
        expect(menu_personalizado.protein).to.be.equal(153);
    });

    it('Grasas de menu_personalizado son 154', () => {
        expect(menu_personalizado.fats).to.be.equal(154);
    });

    it('Carbohidratos de menu_personalizado son 155', () => {
        expect(menu_personalizado.carbohydrates).to.be.equal(155);
    });

    it('Almidon de menu_personalizado son 157', () => {
        expect(menu_personalizado.starch).to.be.equal(157);
    });

    it('Azucar de menu_personalizado son 158', () => {
        expect(menu_personalizado.sugars).to.be.equal(158);
    });

    it('Fibra de menu_personalizado son 159', () => {
        expect(menu_personalizado.fiber).to.be.equal(159);
    });

    it('Agua de menu_personalizado son 160', () => {
        expect(menu_personalizado.water).to.be.equal(160);
    });

    it('Alimentos predominantes del menu_personalizado son vegatles y cereales', () => {
        expect(menu_personalizado.getAlimentGroupList()).to.deep.equal([["Vegetable",70],["Cereal",100]]);
    });

    it('Se elimino un plato del menu_perzonalizado', () => {
        menu_personalizado.removePlate(pe)
        expect(menu_personalizado.getPlates().length).to.be.equal(1);
    });

    it('Se agrego un plato del menu_perzonalizado', () => {
        menu_personalizado.addPlate(pe)
        expect(menu_personalizado.getPlates().length).to.be.equal(2);
    });
    
});