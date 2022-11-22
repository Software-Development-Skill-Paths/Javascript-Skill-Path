
'use strict';

//create Objects using object literals
display('1. Create Objects using object literals');

let cat = {
    name: 'Fluffy',
    color: 'White'
};

display(cat.name);

//create objects using constructor functions
display('2. Create Objects using constructor functions and the new keyword');

function Cat(name, color) {
	this.name = name,
	this.color = color
}

let cat2 = new Cat('Fluffy', 'White');

display(cat2);

//create objects using Object.create() method
display('3. Create Objects using Object.create()');
let cat3 =  Object.create(Object.prototype, {
    name: {
        value: 'Fluffy',
        enumerable: true,
        writable: true,
        configurable: true
    },
    color: {
        value: 'White',
        enumerable: true,
        writable: true,
        configurable: true
    } 
})

display(cat3);

//create objects using classes
display('4. Create Objects using ES6 classes');

class Cat1 {
    constructor(name, color) {
        this.name = name,
        this.color = color;
    }

    speak() {
        display('Meeoow');
    }
}

let cat4 = new Cat1('Fluffy', 'White')
display(cat4);
cat4.speak();

//work with bracket notation for properties
display('5. Accessing Object properties using bracket notations');
let cat5 =  {
    name: 'Fluffy',
    color: 'White'
}

display(cat5['color']);

//Viewing attributes of a given property
display('6. Viewing attributes of a given property');
display(Object.getOwnPropertyDescriptor(cat5, 'name'));

//Change the attribute value of a property
display('7. Changing the attribute value of a property');
Object.defineProperty(cat5, 'name', {writable: false});
//cat5.name = 'Albert'; //this throws an error because the writable attribute of the property is false
//display(cat5);

//Changing the object pointed to by a non writable property returns a valid operation
display('8. Changing the object pointed to by a non writable property returns a valid operation');

let cat6 =  {
    name:{ first: 'Fluffy', last: 'Catizo'},
    color: 'White'
}

Object.defineProperty(cat6, 'name', {writable: false});
cat6.name.first = 'Albert'; //this does not throw and error because the object that is acting as the value for the name attribute is writable
display(cat6.name);

//Prevent an object from being changed
display('9. Prevent an object from being changed with freeze()');

let cat7 =  {
    name:{ first: 'Fluffy', last: 'Catizo'},
    color: 'White'
}

Object.freeze(cat7.name);
//cat7.name.first = 'Albo';
//display(cat7.name);

//Loop through and object's properties with for.....in   loop
display('10. Loop through and object properties with for.....in loop');

let cat8 =  {
    name:{ first: 'Fluffy', last: 'Catizo'},
    color: 'White'
}

for (const propertyName in cat8) {
    if (Object.hasOwnProperty.call(cat8, propertyName)) {
        display(propertyName + `: ${cat8[propertyName]}`); 
    }
}

//make object innumerable(unable to be enumerated over)
display('11. Prevent enumeration over an object\'s property');
Object.defineProperty(cat8, 'name', {enumerable: false});

//Return an array of an object's enumerable properties
display('12. Return an array of an object\'s enumerable properties');
display(Object.keys(cat8));

//Setting enumerable attribute of a property to false stops it from being converted to json
display('13. Setting enumerable attribute of a property to false stops it from being converted to json');
display(JSON.stringify(cat8));

//changing the configurable attribute of a property
display('14. Changing the configurable attribute of a property');

let cat9 =  {
    name:{ first: 'Fluffy', last: 'Catizo'},
    color: 'White'
}

Object.defineProperty(cat9, 'name', {configurable: false});
// Object.defineProperty(cat9, 'name', {enumerable: false});
Object.defineProperty(cat9, 'name', {writable: false});

//delete cat9.name;

//getters and setters
display('15. Setting up getters and Setters on properties of objects');
let cat10 = {
    name: {first: 'Fulffy', last: 'Catizo'},
    color: 'white'
}

Object.defineProperty(cat10, 'fullName', {
    get: function () {
        return this.name.first + " " + this.name.last
    },
    set: function (value) {
        let nameParts = value.split(' ');
        this.name.first = nameParts[0];
        this.name.last = nameParts[1];
    }
})

cat10.fullName = 'Muffin Top';
display(cat10.fullName);
display(cat10.name.first);
display(cat10.name.last);

//prototypes
display('16. Working with prototypes');
let myFunc = function () {
    
}
display(myFunc.prototype);

display('17. objects do not have a prototype');

let cat11 = {name: 'fluffy'};

display(cat11.prototype);

display('18. objects have a proto property');
display(cat11.__proto__);

display('19. More prototype examples');

function Cat12(name,color) {
    this.name = name
    this.color = color
}

display(Cat12.prototype);

Cat12.prototype.age = 3;

display(Cat12.prototype);

let fluffy = new Cat12('fluffy','White');
let muffin = new Cat12('Muffin', 'Brown');

fluffy.age = 5

// display(Cat12.prototype);
// display(fluffy.__proto__);
// display(Cat12.prototype === fluffy.__proto__);
// display(muffin.__proto__);

display(fluffy.age);
display(muffin.age);
display(fluffy.__proto__.age);
display(typeof(fluffy));

display('20. Prototypes also have prototypes');
display(fluffy.__proto__.__proto__);
// display(fluffy.__proto__.__proto__.__proto__); //subsquent prototypes inherit from parent Object which has no prototype

display('21. Creating our own Prototypal Inheritance Chains');
function Animal(voice) {
    this.voice = voice || 'grunt'
}

//the Animal prototype
Animal.prototype.speak = function() {
    display(this.voice);
}

function Cat14(name, color) {
    //this calls the Animal function passing in the Cat14 that is being constructed
    Animal.call(this, 'Meow') 
    this.name = name
    this.color = color
}

//this sets the Animal prototype as the prototype for the Cat14 function
Cat14.prototype = Object.create(Animal.prototype);

Cat14.prototype.constructor = Cat14; //FOCUS ON THIS WHEN CREATING A CHAIN

let fluffy2 = new Cat14('Fluffy', 'Brown');

// fluffy2.speak();

display(fluffy2.__proto__);
display(fluffy2.__proto__.__proto__);

display('22. Creating our own Prototypal Inheritance Chains using classes');
class Animal1 {
    constructor(voice) {
        this.voice = voice || 'grunt'
    }

    speak() {
        display(this.voice)
    }
}

class Cat15 extends Animal1 {
    constructor(name, color) {
        super('Meow')
        this.name = name
        this.color = color
    }
}

let fluffy3 = new Cat15('Fluffy', 'White')
display(Object.keys(fluffy3.__proto__.__proto__))
display(fluffy3.__proto__.__proto__.hasOwnProperty('speak'));



