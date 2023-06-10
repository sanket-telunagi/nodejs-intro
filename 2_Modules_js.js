/*
    Modules - 
        A module is an encapsulated and reusable chunk of code that has its own context 

    in node js each file is treated as seperate node module 

    types - 

        1. Local Modules : Modules that we create in our application 
        2. Built-in Modules : Modules that Node.js ships with out of the box 
        3. Third party modules : Modules written by other developers that we 
           can use in our application 
*/

/*
    Common JS - A standard that states how a module should be 
                structured and shared 


*/

const add = (a, b) => a+b ;
const addition = (a, b) => {
    return a+b ;
};
// console.log(add(1,2));


module.exports = add ;