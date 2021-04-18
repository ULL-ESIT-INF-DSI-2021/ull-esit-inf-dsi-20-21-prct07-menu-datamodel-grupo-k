/* eslint-disable max-len */
/* eslint-disable camelcase */
import {Aliment} from "./aliment/aliment";
import {Cereal} from "./aliment/cereal";
import {Fish} from "./aliment/fish";
import {Fruit} from "./aliment/fruit";
import {Meat} from "./aliment/meat";
import {Seed} from "./aliment/seed";
import {Vegetable} from "./aliment/vegetable";
import {Carte} from "./carte/carte";
import {Menu} from "./menu/menu";
import {PersonalizedMenu} from "./menu/personalizedmenu";
import {SetMenu} from "./menu/setmenu";
import {Dessert} from "./plates/dessert";
import {Entree} from "./plates/entree";
import {MainCourse} from "./plates/mainCourse";
import {Plate} from "./plates/plate";
import {SecondCourse} from "./plates/secondCourse";

const pollo = new Meat("Pollo", 10, 20, 12, 0, 32, 0, 0, 0, 70.3, "Tenerife", "Santa Cruz");
const patatas_fritas = new Cereal("Patatas fritas", 3, 6.8, 20, 66.8, 472, 65.8, 0.9, 1, 5.9, "Tenerife", "Santa Cruz");
const zanahoria = new Vegetable("Zanahoria", 2, 0.9, 10, 7.3, 40, 0, 7.3, 2.9, 88.7, "Tenerife", "Santa Cruz");
const arroz_leche = new Cereal("Arroz con leche", 2, 3, 20, 20.2, 110, 3.9, 16.3, 0.02, 74.9, "Tenerife", "Santa cruz");
const queso_gouda = new Vegetable("Queso gouda", 1, 25.5, 20, 0, 331, 0, 0, 0, 49.1, "Tenerife", "Santa Cruz");
const queso_mozarella = new Vegetable("Queso mozarella", 1, 21.1, 20, 0, 353, 0, 0, 0, 49.1, "Tenerife", "Santa Cruz");
const queso_feta = new Vegetable("Queso feta", 1, 14.2, 20, 4.1, 265, 0, 4.09, 0, 55.2, "Tenerife", "Santa Cruz");
const pan_pita = new Cereal("Pan de pita", 1.20, 7.6, 20, 53.4, 258, 40.6, 0, 1.2, 34.9, "Tenerife", "Santa Cruz");
const croquetas_cangrejo = new Fish("Croquetas de cangrejo", 2, 8.1, 20, 4.5, 116, 3.2, 1.3, 0.14, 80, "Tenerife", "Santa Cruz");
const Arroz_salvaje = new Cereal("Arroz Salvaje", 2, 4, 12, 20.5, 105, 20.6, 0.73, 1.8, 73.9, "Tenerife", "Santa Cruz");
const Rodaballo = new Fish("Rodaballo", 15, 16.1, 4, 0, 5, 0, 0, 0, 80.3, "Miramar", "Santa Cruz");
const UvasNegras = new Fruit("Uvas Negras", 12, 0.6, 0.5, 15.5, 6, 0, 15.5, 0.4, 83.5, "Wuhan", "China");
const Panceta = new Meat("Panceta", 8, 12.5, 50, 0, 45, 0, 0, 0, 40.9, "Sabadell", "Barcelona");
const Apio = new Vegetable("Apio", 1.80, 1.30, 2.5, 1.3, 3.5, 0, 1.3, 1.8, 95.4, "Miramar", "Santa Cruz");
const Lentejas = new Seed("Lentejas", 3.5, 24.3, 9.5, 48.8, 12.5, 44.5, 1.2, 11.7, 10.8, "Wuhan", "China");
const Tocino = new Meat("Tocino", 6.50, 8.4, 85.8, 0, 55.5, 0, 0, 0, 12.5, "Sabadell", "Barcelona");
const Arroz = new Cereal("Arroz Blanco", 0.25, 7, 0.12, 86, 4, 85.8, 0.2, 0.2, 5.9, "Miramar", "Santa Cruz");
const Anguila = new Fish("Anguila", 6.50, 16.3, 32, 0, 25, 0, 0, 0, 68.2, "Wuhan", "China");
const Aguacate = new Fruit("Aguacate", 2.80, 1.5, 2.5, 5.9, 13, 0, 5.9, 1.8, 78.8, "Sabadell", "Barcelona");
const Salmon = new Fish("Salmon", 9, 18.4, 12, 0, 11, 0, 0, 0, 69.6, "Miramar", "Santa Cruz");
const Chufa = new Fruit("Chufa", 7, 6.1, 5, 42.5, 24, 0, 14.7, 17.4, 10.3, "Wuhan", "China");
const Ballena = new Meat("Ballena", 43, 23.2, 80, 0, 45, 0, 0, 0, 73.4, "Sabadell", "Barcelona");
const tomate = new Vegetable('Tomate', 4, 2, 3, 5, 21, 5, 6, 4, 5, 'Escocia', 'Escocia');
const macarron = new Cereal('Macarron', 2, 2, 3, 4, 5, 6, 9, 1, 2, 'España', 'Madrid');
const atun = new Fish('Atun', 5, 9, 3, 4, 5, 6, 9, 1, 2, 'España', 'Madrid');
const albahaca = new Vegetable('Albahaca', 4, 2, 3, 5, 21, 5, 6, 4, 5, 'España', 'Barcelona');
const manzana = new Fruit("manzana", 1, 14, 1.34, 0.2, 15, 1.2, 3, 5, 2, 'España', "Barcelona");
const avena = new Cereal("avena", 1, 11, 1.2, 0.5, 2, 1.8, 4, 5, 2, 'España', "Barcelona");
const donuts = new Cereal("donuts", 1, 11, 1.2, 0.5, 2, 1.8, 4, 5, 2, 'España', "Barcelona");
const bizcocho = new Cereal("bizcocho", 1, 11, 1.2, 0.5, 2, 1.8, 4, 5, 2, 'España', "Barcelona");
const lechuga = new Vegetable("lechuga", 1, 11, 1.2, 0.5, 2, 1.8, 4, 5, 2, 'España', "Barcelona");
const pasta = new Cereal("pasta", 1, 11, 1.2, 0.5, 2, 1.8, 4, 5, 2, 'España', "Barcelona");
const cereza = new Fruit("ceraza", 1, 11, 1.2, 0.5, 2, 1.8, 4, 5, 2, 'España', "Barcelona");
const carne_cordero = new Meat("carne de cordero", 1, 11, 1.2, 0.5, 2, 1.8, 4, 5, 2, 'España', "Barcelona");
const nata = new Cereal("avena", 2, 11, 1.2, 0.5, 2, 1.8, 4, 5, 2, 'España', "Barcelona");
const pan_rallado = new Cereal("pan rallado", 1, 11, 1.2, 0.8, 2, 1.8, 4, 5, 2, 'España', "Barcelona");
const pasta_integral = new Cereal("pasta integral", 1, 11, 2.2, 0.5, 2, 2, 4, 5, 2, 'España', "Barcelona");
const arroz_integral = new Cereal("arroz integral", 1, 11, 1.9, 0.5, 2, 9, 4, 5, 2, 'España', "Barcelona");
const carne_conejo = new Meat("carne de conejo", 1, 11, 1.2, 0.2, 2, 1.8, 4, 5, 2, 'España', "Barcelona");
const gofio = new Cereal("Gofio Canario", 1, 11, 1.2, 0.5, 2, 1.8, 4, 5, 2, 'Tenerife', "Icod de los vinos");
const harina_maiz = new Seed("Harina de maiz", 2.80, 1.5, 2.5, 5.9, 13, 0, 5.9, 1.8, 78.8, "Venezuela", "Caracas");
const churros = new Cereal("Churros", 1, 11, 1.2, 0.5, 2, 1.8, 4, 5, 2, 'Tenerife', "Santa Cruz");
const batido_fresa = new Fruit("Batido de fresa", 1, 11, 1.2, 0.5, 2, 1.8, 4, 5, 2, 'Tenerife', "Santa cruz");
const batido_chocolate = new Fruit("Batido de chocolate", 1, 11, 1.2, 0.5, 2, 1.8, 4, 5, 2, 'Tenerife', "Santa cruz");
const batido_vainilla = new Fruit("Batido de vainilla", 1, 11, 1.2, 0.5, 2, 1.8, 4, 5, 2, 'Tenerife', "Santa cruz");
const yogur_griego = new Fruit("Yogur griego natural", 2.80, 1.5, 2.5, 5.9, 13, 0, 5.9, 1.8, 78.8, "Sabadell", "Barcelona");
const huevo_gallina = new Meat("Huevo de gallina", 2, 4, 12, 20.5, 105, 20.6, 0.73, 1.8, 73.9, "Tenerife", "Santa Cruz");
const base_pizza = new Seed("Base de Pizza", 2.80, 1.5, 2.5, 5.9, 13, 0, 5.9, 1.8, 78.8, "Italia", "Roma");
const aceite_soja = new Seed("Aceite de soja", 1, 11, 1.2, 0.5, 2, 1.8, 4, 5, 2, 'España', "Barcelona");
const aceite_olivo = new Seed("Aceite de Olivo", 1, 11, 1.2, 0.5, 2, 1.8, 4, 5, 2, 'España', "Barcelona");
const manteca_cerdo = new Seed("Manteca de cerdo", 1, 11, 1.2, 0.5, 2, 1.8, 4, 5, 2, 'España', "Barcelona");

export const Aliments: Aliment[] = [];
Aliments.push(pollo);
Aliments.push(patatas_fritas);
Aliments.push(zanahoria);
Aliments.push(arroz_leche);
Aliments.push(queso_gouda);
Aliments.push(queso_mozarella);
Aliments.push(queso_feta);
Aliments.push(pan_pita);
Aliments.push(croquetas_cangrejo);
Aliments.push(Arroz_salvaje);
Aliments.push(Rodaballo);
Aliments.push(UvasNegras);
Aliments.push(Panceta);
Aliments.push(Apio);
Aliments.push(Lentejas);
Aliments.push(Tocino);
Aliments.push(Arroz);
Aliments.push(Anguila);
Aliments.push(Aguacate);
Aliments.push(Salmon);
Aliments.push(Chufa);
Aliments.push(Ballena);
Aliments.push(tomate);
Aliments.push(macarron);
Aliments.push(atun);
Aliments.push(albahaca);
Aliments.push(manzana);
Aliments.push(avena);
Aliments.push(donuts);
Aliments.push(bizcocho);
Aliments.push(lechuga);
Aliments.push(pasta);
Aliments.push(cereza);
Aliments.push(carne_cordero);
Aliments.push(nata);
Aliments.push(pan_rallado);
Aliments.push(pasta_integral);
Aliments.push(arroz_integral);
Aliments.push(carne_conejo);
Aliments.push(gofio);
Aliments.push(harina_maiz);
Aliments.push(churros);
Aliments.push(batido_fresa);
Aliments.push(batido_chocolate);
Aliments.push(batido_vainilla);
Aliments.push(yogur_griego);
Aliments.push(huevo_gallina);
Aliments.push(base_pizza);
Aliments.push(aceite_soja);
Aliments.push(manteca_cerdo);


const ingredientes = new Map<Aliment, number>();

ingredientes.clear();
ingredientes.set(queso_gouda, 10);
ingredientes.set(queso_mozarella, 10);
ingredientes.set(queso_feta, 10);
ingredientes.set(pan_pita, 5);
const plato_tablaquesos = new Entree("Tabla de quesos", ingredientes);

ingredientes.clear();
ingredientes.set(pan_pita, 10);
ingredientes.set(aceite_olivo, 5);
ingredientes.set(queso_feta, 12);
const plato_pitaqueso = new Entree("Pita de oliva y feta", ingredientes);

ingredientes.clear();
ingredientes.set(harina_maiz, 10);
ingredientes.set(queso_gouda, 10);
const plato_arepitas = new Entree("Arepitas con queso", ingredientes);

ingredientes.clear();
ingredientes.set(lechuga, 20);
ingredientes.set(tomate, 10);
ingredientes.set(queso_feta, 13);
ingredientes.set(Aguacate, 3);
ingredientes.set(aceite_olivo, 5);
const plato_ensalada = new Entree("Ensalada Di Monte", ingredientes);

ingredientes.clear();
ingredientes.set(croquetas_cangrejo, 20);
const plato_croquetas = new Entree("Croquetas de cangrejo", ingredientes);

ingredientes.clear();
ingredientes.set(pollo, 100);
ingredientes.set(patatas_fritas, 90);
ingredientes.set(zanahoria, 80);
const plato_tablajaponesa = new MainCourse("Tabla Japonesa", ingredientes);

ingredientes.clear();
ingredientes.set(Salmon, 15);
ingredientes.set(croquetas_cangrejo, 25);
ingredientes.set(Anguila, 60);
ingredientes.set(Aguacate, 60);
ingredientes.set(Arroz, 200);
const plato_sushi = new MainCourse("Sushi de mixto", ingredientes);

ingredientes.clear();
ingredientes.set(carne_cordero, 100);
ingredientes.set(pollo, 100);
ingredientes.set(lechuga, 60);
ingredientes.set(tomate, 60);
ingredientes.set(pan_pita, 100);
const plato_kebabmixto = new MainCourse("Kebab mixto", ingredientes);

ingredientes.clear();
ingredientes.set(base_pizza, 200);
ingredientes.set(tomate, 100);
ingredientes.set(queso_mozarella, 100);
ingredientes.set(pollo, 200);
ingredientes.set(Tocino, 100);
const plato_pizza = new MainCourse("Pizza di DSI", ingredientes);

ingredientes.clear();
ingredientes.set(carne_conejo, 100);
ingredientes.set(tomate, 100);
ingredientes.set(lechuga, 10);
ingredientes.set(patatas_fritas, 200);
const plato_conejopatatas = new MainCourse("Conejo con patatas y ensalada", ingredientes);

ingredientes.clear();
ingredientes.set(croquetas_cangrejo, 200);
ingredientes.set(Arroz_salvaje, 300);
const plato_cangejosalvaje = new SecondCourse("Cangrejo Salvaje", ingredientes);

ingredientes.clear();
ingredientes.set(harina_maiz, 200);
ingredientes.set(carne_cordero, 300);
const plato_arepacordero = new SecondCourse("Arepa de cordero", ingredientes);

ingredientes.clear();
ingredientes.set(harina_maiz, 200);
ingredientes.set(carne_conejo, 300);
const plato_arepaconejo = new SecondCourse("Arepa de conejo", ingredientes);

ingredientes.clear();
ingredientes.set(macarron, 200);
ingredientes.set(queso_gouda, 300);
const plato_macarronesqueso = new SecondCourse("Macarrones con queso", ingredientes);

ingredientes.clear();
ingredientes.set(pasta, 200);
ingredientes.set(atun, 300);
ingredientes.set(tomate, 100);
const plato_pastatuna = new SecondCourse("Pastatuna", ingredientes);

ingredientes.clear();
ingredientes.set(arroz_leche, 100);
const plato_arrozleche = new Dessert("Arroz con leche", ingredientes);

ingredientes.clear();
ingredientes.set(donuts, 30);
ingredientes.set(manzana, 9);
const plato_donutsmanzana = new Dessert("Donuts de Manzana", ingredientes);

ingredientes.clear();
ingredientes.set(churros, 100);
ingredientes.set(batido_chocolate, 10);
const plato_churroschocolate = new Dessert("Churros con Chocolate", ingredientes);

ingredientes.clear();
ingredientes.set(batido_fresa, 100);
ingredientes.set(batido_chocolate, 100);
ingredientes.set(batido_vainilla, 100);
const plato_heladosabores = new Dessert("Helado 3 sabores", ingredientes);

ingredientes.clear();
ingredientes.set(batido_vainilla, 100);
ingredientes.set(huevo_gallina, 159);
ingredientes.set(avena, 120);
ingredientes.set(bizcocho, 30);
const plato_tartavegana = new Dessert("Tarta Vegana", ingredientes);

const menu_predefinido1 = new SetMenu("Almuerzo de poseidon", plato_croquetas, plato_sushi, plato_arrozleche, plato_pastatuna);
const menu_predefinido2 = new SetMenu("Almuerzo de zeus", plato_ensalada, plato_tablajaponesa, plato_churroschocolate, plato_arepacordero);
const menu_predefinido3 = new SetMenu("Almuerzo de hades", plato_arepitas, plato_kebabmixto, plato_donutsmanzana, plato_arepaconejo);
const menu_predefinido4 = new SetMenu("Almuerzo de hera", plato_tablaquesos, plato_conejopatatas, plato_heladosabores, plato_cangejosalvaje);
const menu_predefinido5 = new SetMenu("Almuerzo de mou", plato_pitaqueso, plato_pizza, plato_tartavegana, plato_macarronesqueso);
const menu_personalizado = new PersonalizedMenu("Menu perzonalizado", [plato_croquetas, plato_tablajaponesa, plato_donutsmanzana, plato_heladosabores]);

export const Menus: Menu[] = [];
Menus.push(menu_predefinido1);
Menus.push(menu_predefinido2);
Menus.push(menu_predefinido3);
Menus.push(menu_predefinido4);
Menus.push(menu_predefinido5);

export const Platos: Plate[] = [];
Platos.push(plato_pitaqueso);
Platos.push(plato_croquetas);
Platos.push(plato_ensalada);
Platos.push(plato_arepitas);
Platos.push(plato_tablajaponesa);
Platos.push(plato_sushi);
Platos.push(plato_kebabmixto);
Platos.push(plato_pizza);
Platos.push(plato_conejopatatas);
Platos.push(plato_arepaconejo);
Platos.push(plato_arepacordero);
Platos.push(plato_macarronesqueso);
Platos.push(plato_cangejosalvaje);
Platos.push(plato_pastatuna);
Platos.push(plato_arrozleche);
Platos.push(plato_donutsmanzana);
Platos.push(plato_churroschocolate);
Platos.push(plato_tartavegana);
Platos.push(plato_heladosabores);

export const Carta = new Carte([plato_tablaquesos,
  plato_pitaqueso,
  plato_croquetas,
  plato_ensalada,
  plato_arepitas,
  plato_tablajaponesa,
  plato_sushi,
  plato_kebabmixto,
  plato_pizza,
  plato_conejopatatas,
  plato_arepaconejo,
  plato_arepacordero,
  plato_macarronesqueso,
  plato_cangejosalvaje,
  plato_pastatuna,
  plato_arrozleche,
  plato_donutsmanzana,
  plato_churroschocolate,
  plato_tartavegana,
  plato_heladosabores,
],
[
  menu_predefinido1,
  menu_predefinido2,
  menu_predefinido3,
  menu_predefinido4,
  menu_predefinido5,
]);
