const pizzashop = require("./22_pizza_shop") ;
const DrinkMachine = require("./drink_machine") ;


const pizzas = new pizzashop() ;
const drinkMachine = new DrinkMachine() ;

pizzas.on("order", (size, toppings) => {
    console.log(`backing pizza of ${size} and ${toppings} toppings.`);
    drinkMachine.serveDrink(size) ;
})

pizzas.order("large", "mushrooms") ;
pizzas.diplayOrderNumber() ;