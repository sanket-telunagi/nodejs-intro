/*
    In javascript, function are first clas objects 

    First Class Objects - 
        A function can be passed as an argument to a function 
        A function can also be returned as values from other functions 

    Callback Functions : 
        Any function that can be passed as an argument to other function 
        or returns a function is called higher order function 

    Types : 
        1. Synchronous Callback 
        2. Asynchronous Callback 
    
    Synchronous Callbacks : 
        A callback which is executed immediately

        Examples : 

        let numbers = [1,2,7,3,5,6]
        numbers.sort((a,b) -> a-b)
        numbers.filter(n => n % 2 == 0)
        numbers.map(n => n / 2)

    Asynchronous Callbacks :

        A callback often used to continue or resume code execution after an asynchronous has completed

        Callbacks are used to delay the execution of a function until a particular time or event has occured 

        In node.js have an asynchronous nature to prevent blocking of execution 

        Examples : 
            1. Reading data from a file 
            2. Fetching data from a database 
            3. handling a network request 

            - Evnet handlers :

                function callback () {
                    document.getElementById('demo').innerHTML = "hello World" ;
                }
                document.getElementById('btn').addEventListner('click', callback) ;
            
            - Loading data by JQuery
                
                $.get('url', function (data) {
                    $('.result').html(data) ;
                    alert("Load was performed.");
                })

*/

const greet_name = (name) => console.log(`Hello, ${name}`);

const greet_me = (greets) => {
    const name = "king";
    greets(name) ;
}

greet_me(greet_name)