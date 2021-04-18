/* eslint-disable max-len */
import inquirer from "inquirer";
import {Cereal} from "./aliment/cereal";
import {Aliments} from "./main";
import {Menus} from "./main";
import {Platos} from "./main";
import {Carta} from "./main";
import {Plate} from "./plates/plate";

// Menu de Agregar
enum addMenu {
    Alimentos = "Alimentos",
    Volver = "Volver"
}
async function addPrompt(): Promise<void> {
  console.clear();
  const answers = await inquirer.prompt({
    type: "list",
    name: "command",
    message: "Elige una opcion:",
    choices: Object.values(addMenu),
  });
  switch (answers["command"]) {
    case addMenu.Alimentos:
      console.clear();
      const nombre = await inquirer.prompt({
        type: "input",
        name: "add",
        message: "Nombre: ",
      });
      const price = await inquirer.prompt({
        type: "input",
        name: "add",
        message: "Precio: ",
      });
      const proteinas = await inquirer.prompt({
        type: "input",
        name: "add",
        message: "Proteinas: ",
      });
      const grasas = await inquirer.prompt({
        type: "input",
        name: "add",
        message: "Grasas: ",
      });
      const carbohidratos = await inquirer.prompt({
        type: "input",
        name: "add",
        message: "Carbohidratos: ",
      });
      const calorias = await inquirer.prompt({
        type: "input",
        name: "add",
        message: "Calorias: ",
      });
      const almidon = await inquirer.prompt({
        type: "input",
        name: "add",
        message: "Almidon: ",
      });
      const localidad = await inquirer.prompt({
        type: "input",
        name: "add",
        message: "Localidad: ",
      });
      const ciudad = await inquirer.prompt({
        type: "input",
        name: "add",
        message: "ciudad: ",
      });
      const alimento = new Cereal(nombre["add"], price["add"], proteinas["add"], grasas["add"], carbohidratos["add"], calorias["add"], almidon["add"], 0, 0, 0, localidad["add"], ciudad["add"]);
      Aliments.push(alimento);

      mainPrompt();
      break;
    case addMenu.Volver:
      mainPrompt();
      break;
  }
}

// Wait Menu
enum WaitMenu {
    Volver = "Volver"
}
async function waitPrompt(): Promise<void> {
  const answers = await inquirer.prompt({
    type: "list",
    name: "command",
    message: "Elige una opcion:",
    choices: Object.values(WaitMenu),
  });
  switch (answers["command"]) {
    case ViewMenu.Volver:
      mainPrompt();
      break;
  }
}

// Ver Menu
enum ViewMenu {
    Alimentos = "Alimentos",
    Platos = "Platos",
    Menus = "Menus",
    Carta = "Carta",
    Volver = "Volver"
}
async function viewPrompt(): Promise<void> {
  console.clear();
  const answers = await inquirer.prompt({
    type: "list",
    name: "command",
    message: "Elige una opcion:",
    choices: Object.values(ViewMenu),
  });
  switch (answers["command"]) {
    case ViewMenu.Alimentos:
      console.clear();
      console.log("\nAlimentos:");
      Aliments.forEach((key) => {
        console.log("Nombre: " + key.getName() + ": " + key.getPriceOfAliment() + "€");
      });
      waitPrompt();
      break;
    case ViewMenu.Platos:
      console.clear();
      console.log("\nPlatos:");
      Platos.forEach((key) => {
        console.log("Plato: " + key.getName() + ": " + key.getPrice() + "€");
      });
      waitPrompt();
      break;
    case ViewMenu.Menus:
      console.clear();
      console.log("\nMenus:");
      Menus.forEach((key) => {
        console.log(key.name + ": " + key.getPrice() + "€");
      });
      waitPrompt();
      break;
    case ViewMenu.Carta:
      console.clear();
      console.log("Carta del Grupo K: ");
      console.log("\nMenus:");
      Carta.menus.forEach((key) => {
        console.log("Menu: " + key.name + ": " + key.getPrice() + "€");
      });
      console.log("\nPlatos:");
      Carta.plates.forEach((key) => {
        console.log("Plato: " + key.getName() + ": " + key.getPrice() + "€");
      });
      waitPrompt();
      break;
    case ViewMenu.Volver:
      mainPrompt();
      break;
  }
}

// Eliminar plato
function removePlate(plate: Plate) {
  const index = Platos.indexOf(plate, 0);
  if (index > -1) {
    Platos.splice(index, 1);
  }
}

// Delete Menu
enum DeleteMenu {
    Platos = "Platos",
    Volver = "Volver"
}
async function deletePrompt(): Promise<void> {
  console.clear();
  displayMenu();
  const answers = await inquirer.prompt({
    type: "list",
    name: "command",
    message: "Elige una opcion:",
    choices: Object.values(DeleteMenu),
  });
  switch (answers["command"]) {
    case DeleteMenu.Platos:
      let flag = false;
      console.clear();
      console.log("Nombre del plato a eliminar: ");
      const nombre = await inquirer.prompt({
        type: "input",
        name: "name",
        message: "Nombre: ",
      });
      Platos.forEach((key) => {
        if (key.getName() === nombre["name"]) {
          removePlate(key);
          flag = true;
        }
      });
      if (flag) {
        console.clear();
        console.log("Plato eliminado!");
        waitPrompt();
      } else {
        console.clear();
        console.log("Plato no encontrado..");
        waitPrompt();
      }
      break;
    case DeleteMenu.Volver:
      mainPrompt();
      break;
  }
}

// Main Menu
function displayMenu(): void {
  console.log("\nAlimentos: " + Aliments.length);
  console.log("Platos: " + Platos.length);
  console.log("Menus: " + Menus.length);
  console.log("Carta: 1");
}
enum MainMenu {
    Ver = "Ver",
    Agregar = "Agregar",
    Eliminar = "Eliminar",
    Salir = "Salir"
}
async function mainPrompt(): Promise<void> {
  console.clear();
  displayMenu();
  const answers = await inquirer.prompt({
    type: "list",
    name: "command",
    message: "Elige una opcion:",
    choices: Object.values(MainMenu),
  });
  switch (answers["command"]) {
    case MainMenu.Ver:
      viewPrompt();
      break;
    case MainMenu.Agregar:
      addPrompt();
      break;
    case MainMenu.Eliminar:
      deletePrompt();
      break;
  }
}

mainPrompt();
