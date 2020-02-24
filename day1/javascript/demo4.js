//ECMA 6 syntax for callback called as promise
function add(a,b){
    let p = new Promise(function(resolve,reject){
        if(a<0||b<0){
            reject('Invalid number');
        } else{
            resolve(a+b);
        }
        
    });
    return p;
}
console.log('------------------------------------------')


add(-100,200).then(function(res){
    console.log(res);
},function (err){
    console.log(err);
});

console.log('------------------------------------------')
console.log('------------------------------------------')