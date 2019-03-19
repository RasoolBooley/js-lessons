
// OBJECTS AND PROTOTYPES

// In addition to its special properties, every JS object has an internL property called a prototype. This is a link (known as a reference) to another object . When trying to access a property that does not exist in an object, JS tried to find a this property in the prototype of this object. 


let wolverine = {
    metal: "adamantium",
    claws: "hands"
};

// We can create another object using anObject as a prototype

let lilspanishgirl = Object.create(wolverine);

console.log(lilspanishgirl.metal);
console.log(lilspanishgirl.claws)

let pastry = {
    type: "",
    flavour: "",
    layers: "",
    price: "",
    occasion: "",

    describe: function() {
        let description = "The " + this.type + " is a " + this.occasion + " pastry has a " + this.flavour + " flavour, " + this.layers + " layer(s), and costs " + this.price + ".";
        return description; 
    }
};

let muffin = Object.create(pastry);

    muffin.type = "Muffin";
    muffin.flavour = "blueberry";
    muffin.layers = 1;
    muffin.price = "R20";
    muffin.occasion = "Breakfast";

let cake = Object.create(pastry);

    cake.type = "Cake";
    cake.flavour = "Chocolate";
    cake.layers = 3;
    cake.price = "R200";
    cake.occasion = "Birthday";


// console.log(muffin.describe());
// console.log(cake.describe());

//  We created an Object named pastry , which brings together the properties common to all the characters. The cake and muffin are created via Pastry as a prototype, which delegates its features to them.

// The Process of creating a Pastry is a little repetitive: for each character, you must successively give a value to each of its properties. You can do better by creating an initialisation function.

let pastry = {
    // initialising the pastry
    init: function(type, flavour, layers, price, occasion) {
        this.type = type;
        this.flavour = flavour;
        this.layers = layers;
        this.price = price;
        this.occasion = occasion;
    },

    // Describe the Pastry
    describe: function() {
        let description = "The " + this.type + " is a " + this.occasion + " pastry has a " + this.flavour + " flavour, " + this.layers + " layer(s), and costs " + this.price 
    },

    bake: function() {
        let bake = "The " + this.type + " is placed in the oven for over 7 minutes and it's done."
        return bake;
    },
    eat: function() {
        let eat = "Shove your entire face in the " + cake.flavour + " " + cake.type + " and enjoy!"
        return eat;
    }
};

let muffin = Object.create(pastry);
muffin.init("Muffin", "blueberry", 1, "R20", "breakfast");

let cake = Object.create(pastry);
cake.init("cake", "choc", 2, "R2000", "Birthday");

console.log(muffin.eat());

 

