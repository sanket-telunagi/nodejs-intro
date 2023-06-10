// Echma script modules --> ESM 

// import object in case of multiple imports 
// import math from "./math.mjs";

// for named exports 
// import * as math from "./math.mjs" ;
import { add, subtract} from "./math.mjs" ;
console.log(add(3,2), subtract(5,2));


// console.log(math.add(3,2), math.subtract(5,2));

// const {add, subtract} = math ;

console.log(add(3,2), subtract(5,2));


/*
    ES Modules :
        ECMA script standart for modules
        introdused in ES2015
        Node.js 14 and above supports ES Modules 
        Instead of "module.exports", we use the "export" kayword
        export can be default or named
        import using "import" keyword
        "default export" : assign any name while importing
        "named export" : import name must be same 
*/