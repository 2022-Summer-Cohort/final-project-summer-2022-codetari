/* exported allRecipes, allIngredients */
'use strict';


// Ingredient Construction

class Egg {
    constructor(pointValue) {
        this.image = 'Egg.png';
        this.pointValue = pointValue;
    }
}

class Ham {
    constructor(pointValue) {
        this.image = 'Ham.png';
        this.pointValue = pointValue;
    }
}

class Bacon {
    constructor(pointValue) {
        this.image = 'Bacon.png';
        this.pointValue = pointValue;
    }
}

class Sausage {
    constructor(pointValue) {
        this.image = 'Sausage.png';
        this.pointValue = pointValue;
    }
}

class Bread {
    constructor(pointValue) {
        this.image = 'Bread.png';
        this.pointValue = pointValue;
    }
}

class Cheese {
    constructor(pointValue) {
        this.image = 'Cheese.png';
        this.pointValue = pointValue;
    }
}

class Tomatoes {
    constructor(pointValue) {
        this.image = 'Tomatoes.png';
        this.pointValue = pointValue;
    }
}

class Potatoes {
    constructor(pointValue) {
        this.image = 'Potatoes.png';
        this.pointValue = pointValue;
    }
}

class ButternutSquash {
    constructor(pointValue) {
        this.image = 'Butternut.png';
        this.pointValue = pointValue;
    }
}

class Beans {
    constructor(pointValue) {
        this.image = 'Beans.png';
        this.pointValue = pointValue;
    }
}

class Mushrooms {
    constructor(pointValue) {
        this.image = 'Mushrooms.png';
        this.pointValue = pointValue;
    }
}

class Lemon {
    constructor(pointValue) {
        this.image = 'Lemon.png';
        this.pointValue = pointValue;
    }
}

class Tortilla {
    constructor(pointValue) {
        this.image = 'Tortillas.png';
        this.pointValue = pointValue;
    }
}

class Avocado {
    constructor(pointValue) {
        this.image = 'Avocado.png';
        this.pointValue = pointValue;
    }
}

class Onion {
    constructor(pointValue) {
        this.image = 'Onion.png';
        this.pointValue = pointValue;
    }
}

class Beef {
    constructor(pointValue) {
        this.image = 'Beef.png';
        this.pointValue = pointValue;
    }
}

class Fish {
    constructor(pointValue) {
        this.image = 'Fish.png';
        this.pointValue = pointValue;
    }
}

class Chicken {
    constructor(pointValue) {
        this.image = 'Chicken.png';
        this.pointValue = pointValue;
    }
}

class Lettuce {
    constructor(pointValue) {
        this.image = 'Lettuce.png';
        this.pointValue = pointValue;
    }
}

class Lime {
    constructor(pointValue) {
        this.image = 'Lime.png';
        this.pointValue = pointValue;
    }
}




//Recipe Construction 
class Recipe {
    constructor(name, ingredients) {
        this.name = name;
        this.ingredients = ingredients;
    }
}


const allIngredients = [
    new Egg(0),
    new Ham(0),
    new Bacon(0),
    new Sausage(0),
    new Bread(0),
    new Cheese(0),
    new Tomatoes(0),
    new Potatoes(0),
    new ButternutSquash(0),
    new Beans(0),
    new Mushrooms(0),
    new Lemon(0),
    new Tortilla(0),
    new Avocado(0),
    new Onion(0),
    new Beef(0),
    new Chicken(0),
    new Fish(0),
    new Lettuce(0),
    new Lime(0)
];




// BREAKFAST RECIPES

const omelet = new Recipe('Omelet',
    [
        new Egg(50),
        new Ham(30),
        new Cheese(30),
        new Bacon(20),
        new Avocado(20)
    ]);
        
const fullEnglish = new Recipe('Full English Breakfast',
    [
        new Egg(30),
        new Beans(30),
        new Sausage(30),
        new Bread(30),
        new Bacon(30)
    ]);

const benedict = new Recipe('Benedict',
    [
        new Egg(50),
        new Ham(40),
        new Bread(30),
        new Lemon(20),
        new Potatoes(10)
    ]);

const breakfastBurrito = new Recipe('Breakfast Burrito',
    [
        new Tortilla(40),
        new Egg(40),
        new Potatoes(40),
        new Avocado(10),
        new Sausage(20)
    ]);

const hash = new Recipe('Hash',
    [
        new ButternutSquash(50),
        new Potatoes(30),
        new Mushrooms(30),
        new Onion(20),
        new Bacon(20)
    ]);

const breakfast = [omelet, fullEnglish, benedict, breakfastBurrito, hash];








// LUNCH RECIPES

const tacos = new Recipe('Carne Asada Tacos',
    [
        new Tortilla(50),
        new Beef(40),
        new Onion(20),
        new Cheese(20),
        new Lime(20)
    ]);
    
const salad = new Recipe('Cobb Salad',
    [
        new Lettuce(40),
        new Tomatoes(30),
        new Bacon(30),
        new Egg(30),
        new Avocado(20)
    ]);

const ceviche = new Recipe('Ceviche',
    [
        new Fish(50),
        new Lime(40),
        new Onion(30),
        new Tomatoes(20),
        new Tortilla(10)
    ]);

const hamburger = new Recipe('Hamburger',
    [
        new Beef(50),
        new Bread(40),
        new Lettuce(30),
        new Tomatoes(20),
        new Onion(10)
    ]);
    
const nachos = new Recipe('Nachos',
    [
        new Tortilla(50),
        new Cheese(40),
        new Beans(30),
        new Tomatoes(20),
        new Bacon(10)
    ]);
    
const lunch = [tacos, salad, ceviche, hamburger, nachos];


// DINNER RECIPES

const chickenSandwich = new Recipe('Chicken Sandwich',
    [
        new Chicken(50),
        new Bread(40),
        new Lettuce(30),
        new Tomatoes(20),
        new Cheese(10)
    ]);

const caesarSalad = new Recipe('Caesar Salad',
    [
        new Lettuce(50),
        new Chicken(40),
        new Fish(30),
        new Bread(20),
        new Bacon(10)
    ]);
const cheeseburger = new Recipe('Cheeseburger',
    [
        new Beef(50),
        new Bread(30),
        new Cheese(30),
        new Lettuce(20),
        new Tomatoes(20)
    ]);
    
const beefStew = new Recipe('Beef Stew',
    [
        new Beef(50),
        new Onion(30),
        new Potatoes(30),
        new ButternutSquash(20),
        new Mushrooms(20)
    ]);

const chili = new Recipe('Chili',
    [
        new Beef(50),
        new Beans(40),
        new Tomatoes(30),
        new Cheese(20),
        new Onion(10)
    ]);


const dinner = [chickenSandwich, caesarSalad, cheeseburger, beefStew, chili];

const allRecipes = [breakfast, lunch, dinner];