// event driven architecture 

const EventEmitter = require("node:events") ;

class PizzaShop extends EventEmitter {
    constructor () {
        super() ;
        this.orderNumber = 0 ;
    }

    order (size, toppings) {
        this.orderNumber ++ ;
        // 'this' keyword refers to emitter object 
        this.emit("order", size, toppings) ;
    }

    diplayOrderNumber () {
        console.log(`Current order number : ${this.orderNumber}`);
    }
}

module.exports = PizzaShop ;