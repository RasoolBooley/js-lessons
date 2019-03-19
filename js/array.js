// an array is a datatype that can store a set of elements, normally of the same type. 

//  How do we create an array?

// we do this by creating a table []

let movies = ["Titanic", "The Notebook", "The Mask"];

//  everything within the square brackets is part of the array

// give arrays plural names since they contain several things.

console.log(movies);

console.log(movies.length);

// to access an element in an array 

// each item in an array is identified by a number called its index. We can represent an array as a set of boxes , each storing a specific value and associated with an index. Here is how one might represent the films array.

console.log(movies[0]);
console.log(movies[1]);
console.log(movies[2]);

// this is the same way you access characters in a string

// Adding an element to an array 

// to do this we use .push 

movies.push("King Kong");

console.log(movies[3]);


console.log(movies)