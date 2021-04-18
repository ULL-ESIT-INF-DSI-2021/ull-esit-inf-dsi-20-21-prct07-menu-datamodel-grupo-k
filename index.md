# ASIGNATURA DE DESARROLLO DE SISTEMAS INFORMÁTICOS
# INFORME PRÁCTICA 7


### INTRODUCCIÓN

En esta práctica grupal desarrollaremos un sistema de diseño de menú, que a continuación explicaremos las clases a usar para llevar a cabo este diseño. Dentro del desarrollo utilizaremos TypeDoc que adoptará la metodología TDD, *Inquerir* y *LowDB*.

### DESARROLLO DE LAS CLASES:

1) CLASE ABSTRACTA `<ALIMENT>`.

Hemos desarrollado una clase **abstracta aliment** para que a partir de ella podamos implementar las categorias de los alimentos. A demás, tiene la implementación de dos interfaces, esto es para si en un futuro queremos añadir o quitar código sin que afecte a la clase `<Aliment>` como tal.

La clase Aliment contiene dos atributos: `<name>` el nombre del alimento, y `<price>` el precio del alimento. 

```
     public readonly name: string;
     public readonly price: number;
```

A parte hemos declarado un `<enum>` llamado grupo de alimento, para identificar el tipo de alimento que es.

```
export enum alimentGroup {
    Fruit = 'Fruit',
    Meat = 'Meat',
    Fish = 'Fish',
    Seed = 'Seed',
    Legume = 'Legume',
    Cereal = "Cereal",
    Vegetable = "Vegetable"
  }
```

Ahora veremos la implementación de las demas clases, las cuales definen la categoria de un alimento.

Estas clases están implementadas con la clase abstracta **aliment**.
* CLASE FRUIT
* CLASE VEGETABLE
* CLASE LEGUME
* CLASE SEED
* CLASE FISH
* CLASE MEAT

Explicaremos el desarrollo de una de estas clases:

**CLASE FISH**

Esta clase representa a la categoria de un alimento. En este caso representa a carnes de pescado.

Esta contiene como atributos a:
```
private readonly AlimentGroup: alimentGroup = alimentGroup.Fish
```
Que es de tipo de grupo de alimentos, para identificar que es alimemto Fish.

El constructor está desarrollado de la siguiete manera:
```
constructor( public readonly name: string,
        public readonly price: number,
        public readonly protein: number,
        public readonly fats: number,
        public readonly carbohydrates: number,
        public readonly calories:number,
        public readonly starch: number,
        public readonly sugars: number,
        public readonly fiber: number,
        public readonly water: number,
        public readonly locality: string,
        public readonly city: string) {
      super(name, price, protein, fats, carbohydrates, calories, starch, sugars, fiber, water, locality, city);
    }
```
donde `<name>` y `<price>` sos atributos que tiene que llevar porque estas clases son un extends de `<Aliment>`, y por ende deben tener estos atributos. Tambien tienen los atributos `<protein>` , `<fats>`, `<sugars>`, `<water>`, `<fiber>`, `<starch>`, `<calories>` y `<carbohydrates>`, que son de la interfaz llamada **composicion_nutritional** que acontinuiación veremos a detalle estas interfaces. Los atributos `<locality>` y `<city>` son para especificar de donde proceden esos alimentos.

Las funciones que implementan estas clases extendidas son las siguientes:

```
 printAliment(): string {
      const aliment_aux = new Fish(this.getName(), this.getPriceOfAliment(), this.getProtein(), this.getFats(), this.getCarbohydrates(), this.getCalories(), this.getStarch(), this.getSugars(), this.getFiber(), this.getWater(), this.getLocality(), this.getCity());
      if (typeof aliment_aux == "undefined") {
        return ("error, no definido");
      }
      console.log(`${aliment_aux.getName()}` + "precio:" + `${aliment_aux.getPriceOfAliment()}`);
      return (`alimento:${aliment_aux.getName()},` + " " + "precio:" + `${aliment_aux.getPriceOfAliment()}` + " " + `cantidad de proteianas:${aliment_aux.getProtein()}, cantidad de lipidos: ${aliment_aux.getFats()}, cantidad de carbohidratos: ${aliment_aux.getCarbohydrates()}`);
    }
```
Esta función imprime el alimento formateado, es decir, el nombre de dicho alimento, la composición nutricional y el origen del alimento. La salida seria esta:

> alimento:lechuga, precio:1 cantidad de proteianas:14, cantidad de lipidos: 1.34, cantidad de carbohidratos: 0.2 

Esta función es de tipo alimentGroup porque queremos que nos retorne el tipo de alimento que es.

```
  getAlimentGroup(): alimentGroup {
      return this.AlimentGroup;
    }
```

Ahora explicaremos las interfaces que hemos implementado para llevar a cabo el alimento.

**INTERFAZ COMPOSISCION NUTRICIONAL**

```
export interface CompositionNutritional {
    protein: number;
    fats: number;
    carbohydrates: number;
    calories: number;
    starch: number;
    sugars: number;
    fiber: number;
    water:number;
    getCalories():number | undefined;
    getProtein(): number;
    getFats():number;
    getCarbohydrates(): number;
    getStarch():number | undefined;
    getSugars():number | undefined;
    getFiber(): number | undefined;
    getWater(): number | undefined;
}
``` 

Como podemos apreciar, esta interfaz implementa la composisción del alimento; las calorias, carbohidratos, proteinas,etc. para luego calcular el valor nutricional del plato y de los menus formados por estos alimentos.

**INTERFAZ GENRAL INFO**
Esta interfaz representa la información adicional de un alimento, es decir, lugar de donde provien y demas. Se ha diseñado de esta manera para que en un futuro podamos agregar con facilidad.
```
export interface GeneralInfo{
    locality?: string;
    city?: string;
    getLocality(): string | undefined;
    getCity(): string | undefined;
}
```