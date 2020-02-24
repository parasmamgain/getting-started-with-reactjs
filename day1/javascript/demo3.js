//demo3.js

function add(a,b){
    return a+b;
}

console.log(add(10,20));

//process arguments to pass the variable from the cli while running the nodesJS from cli

let res = add(100,200);
console.log(res);
console.log('------------------------------------------')
function addWithTimeour(a,b){
    setTimeout(function(){
        return a+b;
    },3000);
}

let res1 = addWithTimeour(100,200);
console.log(res1);
console.log('------------------------------------------')

//ECMA 4 and 5 syntax
function addWithTimeour1(a,b,c){
    setTimeout(function(){
        c(a+b);
    },3000);
}

addWithTimeour1(10,20,function (res){
    console.log(res);
});
console.log('------------------------------------------')


