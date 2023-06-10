/*
    IIFE - 

        i - Immediately 
        i - invoke 
        f - function 
        e - expression 
    
    every module has its own scope 

    Each function gets its own private scope 

    before a modules code gets execulted, Node.js will wrap it with a function wrapper that provides module scope 

    This saves us from having to worry about conflicting variables or functions 

    There is propper encapsulaton and reusability is uneffected 

    IIFE allows to repeate variable or function names without any conflicts 

    IIFE helps keep top-level variable scoped to the module rather than global object 

    Module wrapper condn ;

    (
        function(exports, require, module, __filename, __dirname) {
            // The parameters ar given by node js by default 
            // taht is why we are able to use it 
            // even the "this" as well 
        }
    )

*/

(
    function () {
        const superHero = "Batman" ;
        console.log(superHero);
    }
)() ;

(
    function () {
        const superHero = "Superman" ;
        console.log(superHero);
    }
)() ;

console.log(exports, __filename, __dirname, module, require);