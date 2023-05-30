console.log('JS OK');

// * PHASE 1 ******************
// Link to DOM element
const blocksElement = document.getElementById('blocks-box');

// Declare Calc Variables
const dividendFizz = 3;
const dividendBuzz = 5;


// * PHASE 2 ******************
// FOR Calc cicle
for (let i = 1; i <= 100; i++) {
    if (i % dividendBuzz === 0 && i % dividendFizz === 0) {
        console.log('FizzBuzz');
        // Add Div into DOM
        const tag = '<div class="box fizzbuzz">FizzBuzz</div>';
        blocksElement.innerHTML += tag;
    } else if ((i % dividendFizz) === 0) {
        console.log('Fizz');
        // Add Div into DOM
        const tag = '<div class="box fizz">Fizz</div>';
        blocksElement.innerHTML += tag;
    } else if ((i % dividendBuzz) === 0) {
        console.log('Buzz');
        // Add Div into DOM
        const tag = '<div class="box buzz">Buzz</div>';
        blocksElement.innerHTML += tag;
    } else {
        console.log(i);
        // Add Div into DOM
        const tag = '<div class="box">' + i + '</div>';
        blocksElement.innerHTML += tag;
    }
}