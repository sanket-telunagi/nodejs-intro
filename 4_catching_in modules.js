/*
    Instead of loading same module each time the js uses cache to give the reference of that module variable

    Cache remembers that module is exported before so when the same module is require again it uses same reference to perform operation 

    so to create new instance each time we require to export class andnot the instance
*/

const sh = require("./super_hero") ;

console.log(sh.getName());
sh.setName("superman");
console.log(sh.getName());

const sh2 = require("./super_hero") ;
console.log(sh2.getName()) ;  // prints superman again 

// hence to create different instances each time use class exports 
