'use strict';

// let items = documents.getElementByClassName('item');
// console.log(items)

let cart = [
    // { name: name, price: price,},
    // { name: name, price: price,},
    // { name: name, price: price,},
    // { name: name, price: price,},
    // { name: name, price: price,},
    // { name: name, price: price,},
    // { name: name, price: price,},
    // { name: name, price: price,},
];


function addCart (name, price) {
    // create item

    let item = {
        name: name,
        price: price,
    };

    // check array if empty

    if (cart.length !=0) {
        // search item in an array
        let check = false;
        for (let cartItem in cart) {
            if (cart[cartItem].name === item.name) {
                check = true;
            }
        }

        // if check returns false, item was not found in the array
        if (!check) { cart.push(item) }

        // else push to array
}   else {
    cart.push(item);
}

// get cart div

let div = document.getElementById('cart');

// clear cart
div.innerHTML = "";

// show cart with updated array
for (let value in cart) {

    // create a <li> node 
    let node = document.createElement("LI");
    // create text node
    let textnode = document.createTextNode(cart[value].name);

    // append the text to <li> 
    node.appendChild(textnode);

    // append <li> to <ul> with id="mylist"
    div.appendChild(node);
}

// STILL TO DO 
// remove an item from cart 
// write a function that calculates the total of the cart 
// add a quantity to cart items 
// be able to increase and decrease quantity 
// REMEMBER the cart total must update as the quantity changes 