/*
    The events moduke allows us to work with events 

    Event  ;
        action or occurance that has happened, which can be responded
    
    Using events, it is possible to dispatch events abd respond to those cutome events in non blocking manner 
*/

const eventEmmiter = require("node:events") ;

const emitter = new eventEmmiter() ;

emitter.on('order-pizza', (size, toppings) => {
    console.log(`Order-received backing a ${size} pizza with ${toppings} toppings.`);
    console.log() ;
}) ;



emitter.on("order-pizza", (size) => {
    if (size == "large") console.log("Backing a large pizza.");
})

// we can register one or more responders on the top of js 

// Register a listner , pass parameters 
emitter.emit("order-pizza", "large", "mashrooms") ;
