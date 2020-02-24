//demo6.js

// creating classes in javascript
// supported by ES6
function Laptop(id, make, processor){
    this.id = id;
    this.make = make;
    this.processor = processor;
    this.show = function () {
        console.log(this.id +":" + this.make +":"+this.processor);
    }
}


let l = new Laptop('1','lenovo','15');
l.show();


