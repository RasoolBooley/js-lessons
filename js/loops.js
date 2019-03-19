// console.log("start program");

// let number = 1;
// while (number<=5) {
//     console.log(number);
//     number++;
// }

// console.log("end of program")


// while condition makes the code run as long as the condition is true

// before each loop iteration, the condition in parenthesis is evaluated to determine whether it is true or not. The code associated with a loop is called its body

// if the condition is true, in the code while the loops body runs. Afterward the condition is re-evaulated to see if its still true or not. 

// if the condition is false, the code in the loop stops running or doesnt run

// ///// FOR LOOPS /////////

// You'll often need to write loops with conditions that are based on what happeneds in the loop body, like in our example. JS offers another loop type to account for this: the for loop

// ------------------

// for initialisation; condition; final - expression) {
    // the code to run when the condition is true
// }

// -----------

// this is a little more complicated than while loop syntax:

// initialisation only  happens once, when the code first kicks off.

//  the condition is evaluated after the loop runs each time. It's often used to update a counter variable, as we saw in the while loop example.

for (let counter = 1; counter <=5; counter++) {
    console.log(counter);
}

for (let subtract = -3; subtract >-8; subtract--){
    console.log(subtract);
}

// which loops should i use? 

// var letters =["X","Y"];
let letter = "";
while (letter !== "X") {
    letter = prompt ("Type any letter or type X to exit")
    console.log(letter)
}

let number = "";
while (number !== "12") {
    number = prompt ("press 12 to close this box")
    console.log(number)
}