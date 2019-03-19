// to create an object using constructor functions, we simply write a standalone function the init functionality that we want for our object. Instead of calling it init, this function will have the name of our objects "class"

//     let Pastry = {
//     // initialise the pastry
//     init: function (type, flavour, levels, price, occasion) {
//         this.type = type;
//         this.flavour = flavour;
//         this.levels = levels;
//         this.price = price;
//         this.occasion = occasion;
//     }
// }

// // it will now be like this

// function Pastry(type, flavour, levels, price, occasion) {
//     this.type = type;
//     this.flavour = flavour;
//     this.levels = levels;
//     this.price = price;
//     this.occasion = occasion;
// }

// now to instantiate interface, instead of calling and then an init function, we'll simply do

// new Pastry(type, flavour, levels, price, occasion);

// what about the other function that was defined by our Pastry object? Remember that our pastries had a describe function:

// this is where the prototype comes in again.

// Remember that the Pastry object in the previous example served as the prototype for all the pastries we've created. All the functions, like init and describe , that we had defined on the Pastry object , were automatically available on all the pastries because we passed pastry into Object.create when we created them.

// Using the constructor function is slightly different though we cant just add properties to out Pastry constructor function and expect them to be present on the instantiated instances of our class, becuase constructors arent the same thing as the prototype of the objects they create

// now that were using a constructor function, we'll asign our describe functionto the Pastry prototype like this

// function Pastry(type, flavour, levels, price, occasion) {
//     this.type = type;
//     this.flavour = flavour;
//     this.levels = levels;
//     this.price = price;
//     this.occasion = occasion;
// }

// Pastry.prototype.describe = function () {
//     let description = "The " + this.type + " is a " + this.occasion + " pastry, has a " + this.flavour + " flavour " + this.levels + " layer(s)."
//     return description;
// }

// // before we had

// // --------------------

// // let muffin = Object.create(Pastry);
// // muffin.init("muffin", "blueberry", 1, "R20", "breakfast");

// // let cake = Object.create(Pastry);
// // cake.inti = Object.create("cake", "choc", 3, "R300", "Wedding");


// // --------------------

// // Now, using constructor functions we can instantiate our objects on just one line and have the same result:


// let muffin = new Pastry("muffin", "blueberry", 1, "R30", "Breakfast");
// let cake = new Pastry("cake", "vanilla", 3, "R300", "Wedding");

// console.log(muffin.describe());
// console.log(cake.describe());

// function Intern(name, age, gender, race, laptop) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.race = race;
//     this.laptop = laptop;
// }

// Intern.prototype.describe = function () {
//     let description = "The new interns name is " + this.name + " who is " + this.age + " years old, and is a " + this.race + ", " + this.gender + " who will recieve a " + this.laptop + " laptop." 
//     return description;
// }

// let dev = new Intern("Dev", 24, "Male", "Coloured", "Dell");

// console.log(dev.describe());

function Guitar(brand, wood, frets, shape, pickups) {
    this.brand = brand;
    this.wood = wood;
    this.frets = frets;
    this.shape = shape;
    this.pickups = pickups;
}

Guitar.prototype.describe = function () {
    let description = "This is a " + this.brand + " guitar, with a " + this.wood + " body and a " + this.frets + " fretboard. It has a " + this.shape + " shape, featuring " + this.pickups + " pickups."
    return description;
}

let strandberg = new Guitar("Strandberg", "mahogany", "rosewood", "flying V", "Seymour Duncan");
let fender = new Guitar("Fender", "maple", "rosewood", "classic strat", "single coil");

console.log(strandberg.describe());
console.log(fender.describe());
