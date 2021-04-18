# ASIGNATURA DE DESARROLLO DE SISTEMAS INFORMÁTICOS
# INFORME PRÁCTICA 7


### INTRODUCCIÓN

En esta práctica grupal desarrollaremos un sistema de diseño de menú, explicando las clases que vamos a usar para llevar a cabo este diseño. Dentro del desarrollo utilizaremos TypeDoc que adoptará la metodología TDD.

### Clase Menu

Menu es una clase abstracta principal (padre) del sistema de menus, las clases SetMenu y PesonalizedMenu heredan de esta, esta clase implementa la interfaz de la composicion nutricional para que con el metodo calculateNutritionalComposition() se pueda calcular el total de la composicion nutricional del menu en base a cada plato, por otro lado, tambien tiene los metodos calculatePrice() e identifyAlimentGroupList() para calcular el precio total del menu y identificar los alimentos principales que estan en el menu respectivamente por cada plato.

~~~~
/**
 * Clase Padre que gestiona la creacion de menus personalizados o preestablecidos
 */
export abstract class Menu implements CompositionNutritional {
    public protein: number = 0;
    public fats: number = 0;
    public carbohydrates: number = 0;
    public calories: number = 0;
    public starch: number = 0;
    public sugars: number = 0;
    public fiber: number = 0;
    public water:number = 0;
    private price : number = 0;
    private alimentGroupList : [alimentGroup, number][] = [];
    protected plates : Plate[] = []
    /**
     * 
     * @param name Nombre del menu
     */
    constructor(public readonly name:string) {
    }

    /**
     * Metodo que calcula el precio total del menu en base a los platos que lo compone.
     */
    protected calculatePrice() {
      this.plates.forEach((key) => {
        this.price += key.getPrice();
      });
    }

    /**
     * Metodo que calcula la composicion nutricional del menu en base a los platos que lo conforman.
     */
    protected calculateNutritionalComposition() {
      this.plates.forEach((key) => {
        this.calories += key.getCalories();
        this.protein += key.getProtein();
        this.fats += key.getFats();
        this.carbohydrates += key.getCarbohydrates();
        this.starch += key.getStarch();
        this.sugars += key.getSugars();
        this.fiber += key.getFiber();
        this.water += key.getWater();
      });
    }

    /**
     * Metodo que obtiene el alimento predominante de cada plato en el menu.
     */
    protected identifyAlimentGroupList() {
      this.plates.forEach((key) => {
        this.alimentGroupList.push(key.getPredominantAlimentGroup());
      });
    }

    /**
     * Metodo que retorna el numero de calorias del menu.
     * @returns caloras totales del menu.
     */
    getCalories():number {
      return this.calories;
    }

    /**
     * Metodo que retorna el numero de proteinas del menu.
     * @returns Proteinas totales del menu.
     */
    getProtein(): number {
      return this.protein;
    }

    /**
     * Metodo que retorna el numero de grasas del menu.
     * @returns Grasas totales del menu.
     */
    getFats():number {
      return this.fats;
    }

    /**
     * Metodo que retorna el numero de carbohidratos del menu.
     * @returns Cabohidratos totales del menu.
     */
    getCarbohydrates(): number {
      return this.carbohydrates;
    }

    /**
     * Metodo que retorna el numero de almidon del menu.
     * @returns Almidon total del menu
     */
    getStarch():number {
      return this.starch;
    }

    /**
     * Metodo que retorna el numero de azucares del menu.
     * @returns Azucares totales del menu.
     */
    getSugars():number {
      return this.sugars;
    }

    /**
     * Metodo que retorna el numero de fibra del menu.
     * @returns Fibra total del menu
     */
    getFiber(): number {
      return this.fiber;
    }

    /**
     * Metodo que retorna el numero de agua del menu.
     * @returns Cantidad de agua total del mnu.
     */
    getWater(): number {
      return this.water;
    }

    /**
     * Metodo que retorna el precio del menu.
     * @returns Precio total del menu.
     */
    getPrice() : number {
      return this.price;
    }

    /**
     * Metodo que retorna todos los platos que conforman el menu.
     * @returns Platos que conforman el menu.
     */
    getPlates(): Plate[] {
      return this.plates;
    }

    /**
     * Metodo que devuelve el grupo de alimento predominante por cada plato que conforma el menu.
     * @returns Alimento predominante de cada plato.
     */
    getAlimentGroupList() : [alimentGroup, number][] {
      return this.alimentGroupList;
    }

    /**
     * Metodo que devuelve la informacion del menu.
     * @returns 
     */
    print() : string {
      let output = "";
      output += "Nombre: " + this.name + "\n";
      output += "Precio: " + this.getPrice() + "\n";
      output += "Platos: \n" 
      this.plates.forEach((element) => {
        output += "Nombre : " + element.getName() + "\n Precio : " + element.getPrice() + "\n";
      }); + "\n";
      output += "Composicion Nutricional: " + "\n";
      output += "Calorias: " + this.getCalories() + "\n";
      output += "Proteinas: " + this.getProtein() + "\n";
      output += "Grasas: " + this.getFats() + "\n";
      output += "Carbohidratos: " + this.getCarbohydrates() + "\n";
      output += "Almidon: " + this.getStarch() + "\n";
      output += "Azucar: " + this.getSugars() + "\n";
      output += "Fibra: " + this.getFiber() + "\n";
      output += "Agua: " + this.getWater() + "\n";
      output += "Grupo de alimento predominante: " + this.getAlimentGroupList() + "\n";
      return output;
    }
}

~~~~


### SetMenu

La clase SetMenu esta pensada para la creacion de menus predefinidos por el local, para ello el constructor pide el nombre del menu, un plato de entrada, un plato principal, un postre y un plato secundario que es opcional, al ser esta clase hija de la clase Menu se llaman a las clases calculatePrice(), calculateNutritionalComposition() y identifyAlimentGroupList() para calcular todos los atributos.

~~~
/**
 * Clase para crear Menus preestablecidos segun el plato de entrada, plato principal, segundo plato si es que tiene y postre.
 */
export class SetMenu extends Menu {
  constructor(name: string, private entree: Entree, private mainCourse: MainCourse, private dessert: Dessert, private secondCourse?: SecondCourse) {
    super(name);
    if (secondCourse) {
      this.setPlates(entree, mainCourse, dessert, secondCourse);
    } else {
      this.setPlates(entree, mainCourse, dessert);
    }

    this.calculatePrice();
    this.calculateNutritionalComposition();
    this.identifyAlimentGroupList();
  }

  /**
   * Metodo que obtiene el plato de entrada.
   * @returns Plato de entrada.
   */
  getEntree() : Entree {
    return this.entree;
  }

  /**
   * Metodo que obtiene el plato principal.
   * @returns Plato principal.
   */
  getMainCourse() : MainCourse {
    return this.mainCourse;
  }

  /**
   * Metodo que obtiene el plato postre.
   * @returns Plato postre.
   */
  getdDessert() : Dessert {
    return this.dessert;
  }

  /**
   * Metodo que obtiene el plato secundario, en caso de no tener, devuelve el plato principal.
   * @returns Plato secundario si posee alguno, si no, el plato principal.
   */
  getSecondCourse() : SecondCourse {
    return this.secondCourse == undefined ? this.mainCourse : this.secondCourse;
  }

  /**
   * Metodo que almacena los platos en un vector para usar en la clase menu.
   * @param entree Plato de entrada.
   * @param mainCourse Plato principal.
   * @param dessert Plato de postre.
   * @param secondCourse Plato secundario (No boligatorio).
   */
  setPlates(entree:Entree, mainCourse:MainCourse, dessert:Dessert, secondCourse?:SecondCourse):void {
    this.plates.push(entree);
    this.plates.push(mainCourse);
    this.plates.push(dessert);
    if (secondCourse) {
      this.plates.push(secondCourse);
    }
  }
}
~~~


### Clase PersonalizedMenu

Esta clase esta pensada para la creacion de menus personalizados en donde su constructor unicamente nos pide el nombre con el que se va a registrar el menu y un array de platos que conformaran este menu, de esta forma podemos crear menus con todos los platos que se quieran a gusto del cliente y con los metodos addPlate() y removePlate() podemos agregar o eliminar platos si se requiere.

~~~
/**
 * Clase para crear menus personalizados.
 */
export class PersonalizedMenu extends Menu {
  constructor(name: string, plates: Plate[]) {
    super(name);
    this.plates = plates;
    this.calculatePrice();
    this.calculateNutritionalComposition();
    this.identifyAlimentGroupList();
  }

  /**
   * Metodo que agrega un plato al menu.
   * @param plate Plato a agregar al menu.
   */
  addPlate(plate : Plate) {
    this.plates.push(plate);
    this.calculatePrice();
    this.calculateNutritionalComposition();
    this.identifyAlimentGroupList();
  }

  /**
   * Metodo que elimina un plato del menu.
   * @param plate Plato a eliminar del menu.
   */
  removePlate(plate : Plate) {
    const index = this.plates.indexOf(plate, 0);
    if (index > -1) {
      this.plates.splice(index, 1);
      this.calculatePrice();
      this.calculateNutritionalComposition();
      this.identifyAlimentGroupList();
    }
  }
}
~~~