//iterating through the array
var nums = [10,20,30,40];

for(var i=0;i<nums.length;i++){
    console.log(i+":"+nums[i])
}
console.log('i='+i)

//`var` is a globally scoped variables

//variable declared using `let` is visible only inside a block where it isi defined(available after ES6)

//`const` is a keyword to declared a constant value

//iterating using foreach
for(let n of nums){
    console.log(n);
}

let nsnums = [...nums,60,70] //in place explansion

for(let n of nsnums){
    console.log(n);
}