//demo7.js


//creating class available in ES6
class Product {

    constructor(id,name,price){
        this.id = id;
        this.name = name;
        this.price = price;
    }

    show(){
        console.log(this.id +":" + this.name +":"+this.price);
    }
}


//creating a new instance
let p = new Product('11','macbook',300);
p.show();