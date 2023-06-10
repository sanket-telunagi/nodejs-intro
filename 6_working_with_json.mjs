/*
    JSON : Javascript Object notaion 
           data interchange format commanly used in web servers 

*/

// import json
// this is an experimental feature

// import * as data from "./data.json" assert {type : "json"}
// import data from "./data.json" { type : "json" }

// const { default : info } = await import ("./data.json", {
//     assert : {
//         type : "json"
//     }
// })


// another way 
import { createRequire } from "module" ;
import { sep } from "path";
const require = createRequire(import.meta.url) ;
const data = require("./data.json")

console.log(data.name,
    data.address,
    data.address.city,
    data.address.street
    );