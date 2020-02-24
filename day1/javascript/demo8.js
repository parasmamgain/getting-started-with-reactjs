//demo8.js

function add(a,b){
    return a+b;
}


//EMCA 6 syntax
//arrow function
let addx = (a,b) => {
    return a+b;
}

console.log(add(10,20))
console.log(addx(100,200))

let sq = n => n*n
console.log(sq(10))


//variable hoisting
x=1001;
var x;
console.log(x);

//template literals/variables

let x1 = 1000;
let y1 = 2000;
console.log(`x= ${x1} y= ${y1}`);