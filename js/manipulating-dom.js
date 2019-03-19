// DOM - Document Object Model 

// modify documents after they have finished loading- add new content to a page, change color of an element to reflect a changing state, or remove an element the user no longer needs to see.

// interact with using, ticking boxes, commenting, or submitting forms, your users need to be able to communicate you, and JS does this

// send and recieve data to and from external API's harness the power of thousand of powerful API's that already exist or plug in your front end app into your custon backend

// Get access to the DOM

// document.getElementByTagName()
// document.getElementByClassName()
// document.querySelector()
// document.getElementById()



function changeColor (newColor) {
    let btn = document.getElementById('col');
    btn.style.backgroundColor = newColor;
}

function displayText(innerHTML) {
    let text = document.getElementById('words');
    text.innerHTML = "the words have changed";
}

// function displayText(innerHTML) {
//     let text = document.getElementById('mussel');
//     text.innerHTML = "Russel the Love Mussel"
// }


