//  An object in programming is an entity that has properties. Each property defines a characteristic of the object. A property can be information associated with each object or action. (color of an object and/or what it can do)

// Object - oriented programming (OOP) is a way to write programs using objects. When using OOP,  you write, create, and modify, and the objects make up your program.

// OOP changes the way a program is written and organised, instead of procedural programming used so far.

//  Like many other languages, JS involves programming objects, so we can its an object oriented language. It provides a number of predefined objects while also letting you create your own.

// creating an object

// here is an example of an object

let pen = {
    type: "Ballpoint",
    brand: "Bic",
    color:"Blue"
};

console.log(pen);

console.log(pen.type) // will only display the type of the object
console.log(pen.brand) // will only display the brand of the object
console.log(pen.color) // will only display the color of the object

// write a paragrah that will explain the pen

console.log("this is a " + pen.color + " pen with a " + pen.type + " tip from the " + pen.brand + " company")

// -----------------------------

let cake = {
    flavour: "chocolate",
    price: "R1000",
    layers: "two",
    occasion: "Wedding"
};

console.log(cake.layers);

    cake.layers = 2+2;

console.log("The " + cake.occasion + " cake will cost about " + cake.price + " it will be a " + cake.flavour + " cake with " + cake.layers +  " Layers");



// Objects and methods 

// we had to write lengthy console.log statements each time to show the cake description. There is a cleaner way to accomplish this, by adding a method to the object.

// --------

//  Describe a cake

function describe(cake) {
    let description = "The " + cake.occasion + " cake will cost about " + cake.price + " it will be a " + cake.flavour + " cake with " + cake.layers +  " Layers";
    return description;
}

console.log(describe(cake));

//  the function describe() takes an object as a parameter. We pass it the cake, and it accesses that objects' properties and prints them out in that sentence.

// Now for an alternate approace: Creating a describe property that houses a method

    cake = {
    flavor: "caramel",
    layers: 5,
    price: "R12",
    occasion: "wedding",

    // describing the cake

    describe: function() {
        let description = "The " + this.occasion + " cake has a " + this.flavor + " flavor, " + this.layers + " layers and costs " + this.price + ".";
        return description;
    }
}

console.log(cake.describe());

cake.occasion = "birthday";

console.log(cake.describe());

    guitar = {
        wood: "Mahogany",
        fretboard: "Rosewood",
        color: "Cherryburst",
        bridge: "Floyd Rose",
        brand: "Jackson",
        price: "R34 000",

        describe: function() {
            let description = "This is a " + this.color + " " + this.brand + " with a " + this.wood + " body and a " + this.fretboard + " fretboard. Featuring a " + this.bridge + " bridge for " + this.price + ".";
            return description;
        }
    
    }

    console.log(guitar.describe());

