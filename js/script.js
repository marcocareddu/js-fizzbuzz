console.log('JS OK');

// * PHASE 1 ******************
// Link to DOM element
const blocksElement = document.getElementById('blocks-box');

// Declare Calc Variables
const divisibileBy3 = 3;
const divisibileBy5 = 5;



// * PHASE 2 ******************
// FOR Calc cicle
for (let i = 1; i <= 100; i++) {
    if (((i % divisibileBy5) === 0) && ((i % divisibileBy3) === 0)) {
        console.log('FizzBuzz');
        // Add Div into DOM
        const tag = '<div>FizzBuzz</div>';
        blocksElement.innerHTML += tag;
    } else if ((i % divisibileBy3) === 0) {
        console.log('Fizz');
        // Add Div into DOM
        const tag = '<div>Fizz</div>';
        blocksElement.innerHTML += tag;
    } else if ((i % divisibileBy5) === 0) {
        console.log('Buzz');
        // Add Div into DOM
        const tag = '<div>Buzz</div>';
        blocksElement.innerHTML += tag;
    } else {
        console.log(i);
        // Add Div into DOM
        const tag = '<div>' + i + '</div>';
        blocksElement.innerHTML += tag;
    }
}