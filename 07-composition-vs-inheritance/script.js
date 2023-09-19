// > 1.Inheritance
/* 
- inheritance structure describes what something "is"
    eg: a user, an animal, a dog, a cat

* Advantages:
    + Performance advantage when creating a lot of instances > 10,000

* Disadvantages:
    + when a modification is needed a complete overhaul might be required
    + developer is expected to predict what might be necessitated in the future
    + when a subclass requires additional functionality, a new class need to be created
    + code is tightly coupled

? Summary of inheritance:
"You wanted a banana but what you got was a gorilla holding a banana and the entire jungle" - John Armstrong


*/

// ^ Example - Inheritance

function Animal(name, energy) {
  this.name = name;
  this.energy = energy;
}

Animal.prototype.eat = function () {
  console.log(`${this.name} is eating`);
  this.energy += 1;
};

Animal.prototype.sleep = function () {
  console.log(`${this.name} is sleeping`);
  this.energy += 3;
};

Animal.prototype.play = function () {
  console.log(`${this.name} is playing`);
  this.energy -= 1;
};

// create dog child class
function Dog(name, energy) {
  Animal.call(this, name, energy);
}

// link the prototypes
Object.setPrototypeOf(Dog.prototype, Animal.prototype);
console.log(Dog.prototype);

// create cat child class
function Cat(name, energy) {
  Animal.call(this, name, energy);
}

// instances
const yoko = new Dog("yoko", 10);
const piorun = new Cat("piorun", 15);

console.log(yoko);
console.log(piorun);

// > 2. Composition
/* 
- composition structure describes what something can "do"
    eg: dog ==> is a sleeper, eater and a barker
    eg: cat ==> is a sleeper, eater and a meower

Instead of defining the methods and coupling them to a class, we can create separate functions which ...
... can be assigned to the particular objects (dog / cat). 
*/
