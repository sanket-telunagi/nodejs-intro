# About Node.js 

### Node js creates an artificial environment to run the javascript code outside the browser 

### REPL 
- R : Read 
- E : Evaluate 
- P : Print
- L : Loop 

### Return value of <b>console</b> is <b>undefined</b>

### IIFE 
- 
    -    i - Immediately 
    -    i - invoke 
    -    f - function 
    -    e - expression 
    
    - every module has its own scope 

    - Each function gets its own private scope 

    - before a modules code gets execulted, Node.js will wrap it with a function wrapper that provides module scope 

    - This saves us from having to worry about conflicting variables or functions 

    - There is propper encapsulaton and reusability is uneffected 

    - IIFE allows to repeate variable or function names without any conflicts 

    - IIFE helps keep top-level variable scoped to the module rather than global object 

    - [ ] Module wrapper condn ;
        ```javascript
        (
            function(exports, require, module, __filename, __dirname) {
                // The parameters ar given by node js by default 
                // taht is why we are able to use it 
                // even the "this" as well 
            }
        )

        ```

### Modules - 
- A module is an encapsulated and reusable chunk of code that has its own context 

- in node js each file is treated as seperate node module 

- types - 

    1. Local Modules : Modules that we create in our application 
    2. Built-in Modules : Modules that Node.js ships with out of the box 
    3. Third party modules : Modules written by other developers that we can use in our application 


- Common JS - A standard that states how a module should be structured and shared 

### Export and Import patterns in Common JS modules 

- Export patterns 
    - Pattern 1

        ```javascript
        const add = (a,b) => a + b ;
        module.exports = add ;
        ```

    - Pattern 2

        ```javascript
        module.exports = (a, b) => a + b ;
        ```

    - Pattern 3

        ```javascript
        const add = (a, b) => a + b ;
        const subtract = (a, b) => a - b ;

        // if key values pairs are of same name we can write only values 
        module.exports = {
            add, 
            subtract
        }
        ```

    - pattern 4 

        ```javascript 
        module.exports.add = (a,b) => a+b ;
        module.exports.subtract = (a,b) => a-b ;
        ```

    - Pattern 5

        ```javascript 
        module.exports.add = (a,b) => a+b ;
        module.exports.subtract = (a,b) => a-b ;
        ```

- Import patterns 

    - Importing using <b>require</b> function 

        ```javascript 
        const math = require("./math") ; // if filename is '*.js' then extension is not required 
        ```
    
    - Destructuring while importing 

        ```javascript
        const {add, subtract} = require("./math");
        ```
        or 
        ```javascript 
        const math = require("./math") ;
        const {add, subtract} = math ;
        ```

 

### Catching in Modules 

-   Instead of loading same module each time the js uses cache to give the reference of that module variable

-   Cache remembers that module is exported before so when the same module is require again it uses same reference to perform operation 

-   so to create new instance each time we require to export class andnot the instance

### Es Modules 

- ECMA script standart for modules introdused in ES2015
- Node.js 14 and above supports ES Modules 
- Instead of "module.exports", we use the "export" kayword
- export can be default or named
    - import using "import" keyword
    - "default export" : assign any name while importing
    - "named export" : import name must be same 

- Exporting and imporing in ES modules 

    - importing modules, files 

        ```js 
        import * as data from "./data.json" assert {type : "json"}
        import data from "./data.json" { type : "json" }

        const { default : info } = await import ("./data.json", {
            assert : {
                type : "json"
            }
        })
        ```
    - Exporting modules 

        ```js
        // Default named exports 

        export default add = (a,b) => a+b ;
        export default subtract = (a,b) => a-b ;
        ```

        ```js
        // exprting single function 
        const add = (a,b) => a+b ;
        export default add ;
        ```

        ```js 
        // exporting multiple unnamed exports 
        const add = (a,b) => a+b ;
        const subtract = (a,b) => a-b ;
        export default {
            add, 
            subtract
        }
        ```

### Working with JSON formats 

- JSON : Javascript Object notaion 
- data interchange format commanly used in web servers 

### Builtin Moudules 

- Modules that node.js ships with also refferd as <b>core modules</b>
- import the module sbefore you can use it 

    - important modules are : 
        1. Path
        2. events 
        3. fs
        4. stream 
        5. http

    - sourse code for all of these builtin modules present in "lib" folder

### Callback Functions 
- In javascript, function are first clas objects 

- First Class Objects - 
    - A function can be passed as an argument to a function 
    - A function can also be returned as values from other functions 

- Callback Functions : 
    - Any function that can be passed as an argument to other function 
    - or returns a function is called higher order function 

    - Types : 
        1. Synchronous Callback 
        2. Asynchronous Callback 
    
    - Synchronous Callbacks : 
        - A callback which is executed immediately

        - Examples : 
        ```
            let numbers = [1,2,7,3,5,6]
            numbers.sort((a,b) -> a-b)
            numbers.filter(n => n % 2 == 0)
            numbers.map(n => n / 2)
        ```
    - Asynchronous Callbacks :

        - A callback often used to continue or resume code execution after an asynchronous has completed

        - Callbacks are used to delay the execution of a function until a particular time or event has occured 

        - In node.js have an asynchronous nature to prevent blocking of execution 

        - Examples : 
            1. Reading data from a file 
            2. Fetching data from a database 
            3. handling a network request 

            - Event handlers :
            ```
                function callback () {
                    document.getElementById('demo').innerHTML = "hello World" ;
                }
                document.getElementById('btn').addEventListner('click', callback) ;
            ```

            - Loading data by JQuery
            ```
                $.get('url', function (data) {
                    $('.result').html(data) ;
                    alert("Load was performed.");
                })
            ```

### Events Module

- The events module allows us to work with events 

    - Event  :
        - action or occurance that has happened, which can be responded
    
        - Using events, it is possible to dispatch events abd respond to those cutome events in non blocking manner 

- this module can be extended by another class 
- It can be used emmit response over custom events using <b>"this"</b> keyword

### Character sets 
- Binary data : 
    - computer stores data in binary format 

- Character sets :
    - Predefined sets of character represented by numbers 
    - Popular character sets are : 
        1. unicode 
        2. ASCII
    
- Character Encoding :
    - Dictates how to represent a number in character set as binary data before it can be stored in computer 
    - It dictates how many bits to use to represent the number 
    - Ex : UTF - 8
    - UTF-8 States that charcter should be encoded in bytes (8 bits)

```js
console.log("A".charCodeAt()) ; // 65
```

### Streams and buffers 
- Streams :
    - A sequence of data that being moved from one point to another over time

        - ex : 
            - a stream of data over the internet being moved from one computer to another 
            - a stream of data being transferred from one file to another within the same computer 
    
    - Process streams of data in chunks as they arrive instead of waiting for entire data to be available before processing 
    - This prevents unnecessary data downloads and memory usage 
    
- Buffers : 
    - Area where data waits befoer being sent of processed is buffers 
    - can only deside when is the right time to send data for processing 
    - if data is already processed of to little data to process node puts it into buffer 
    - intentionally small area that Node maintains in runtime to process stream of data 
    - Eg :
        - streaming a video online 
            - if internet connection is fast, speed of stream will be fast enough to instantly fill up the buffer and send out for processing 
            - that will repeat till the stream is finished 
            - for slow connection, after processing first chunk of data that arrived, video player will display loading spinner which indicates that it is waiting for more data to arrive
            - Once the buffer is flled up and data is processed, the video player shows the video while the video is playing, more data will arrive and wait in the buffer 
        
    
```js

// create buffer 

const buffer = new Buffer.from("Buffer", "utf-8") ;

console.log(buffer); // <Buffer 42 75 66 66 65 72>
// hexadecimal values (base16 string)

console.log(buffer.toJSON()); // displays json data 
console.log(buffer.toString()); // display actual data inside buffer 

// writing to buffer 
buffer.write("Code") ; // writes four places 
console.log(buffer.toString()); 

buffer.write("javascript") ;
console.log(buffer.toString()); // only displays 6 characters as the buffer is created for only six characters 
```

### Asynchrnous java script 
- javascript is synchronous, blocking, single threaded language 

- Synchronous :
    - jsvascript waits untill the previous function finishes its job
    - Only one line executing at a time

- blocking :
    - No matter how long the previous process takes, subsequent process is not initialised untill the previous is finished 

- Single threaded :
    - A thread is a process that javascript program can use to run the task 
    - Each thread can do only one task at a time
    - java script has only one thread called the main thread for executing any time 


### fs modules 
- file system module
- provide synchronous and asyncrnous imlementations 
- "fs/promises" provies promise base implementations for better performance 
- functions are 
    - Reading file 
    ```js
    const fileContent = fs.readFileSync("./hello.txt", "utf-8") ;
    console.log(fileContent) ;
    ```
    ```js
    const context = fs.readFile("./hello.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
    })
    ```

    - Promised based functions
    ```js
    async function readFile () {
        try {
            const data = await fs.readFile("./hello.txt", "utf-8") ;
            console.log(data) ;
        } catch (err) {
            console.log(err);
        }
    }
    ```
    ```js 
    const fs = require("node:fs/promises") ;

    fs.readFile ("./hello.txt", "utf-8")
    .then((data) => {
        console.log(data);
    }) // promise resolved 
    .catch (err => {
        console.log(err);
    }) // error while returning
    ```

    - writing file

    ```js
    fs.writeFile("./greet_async.txt", content, {flag : "a"}, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Writing complete.");
    }
    })
    ```
    ```js
    fs.writeFileSync("./greet_sync.txt", content, {flag : "a"});
    console.log(fileContent);
    ```

### Streams 
- Types of streams :
    1. Readable streams : Reading from files
    2. Writable Streams : Writing to file
    3. Duplex Streams   : Sockets as duplex system
    4. Transform strema : file compression where write compressed data and read de-compressed data to and from a file as transform stream

- Default size of stream is 64KB
- we can change the stream size by <b>highWaterMark</b>
```js
const fs = require("node:fs") ;

const readableSTream = fs.createReadStream("file1.txt", {
    encoding : "utf-8" ,
    highWaterMark : 2 // change defult value to 2 Bytes
}) ;
const writableStream = fs.createWriteStream("./file2.txt") ;

readableSTream.on("data", (dataChunk) => {
    console.log(dataChunk);
    writableStream.write(dataChunk)
})
```



### Web Frameworks:
        - frameworks abstracts the lower level code allowing you to focus on the requirements than the code

### Asuncrnous feature of javascript : 
    - javascript is blocking by default
    - but to acheive the asynchrnous power it uses libuv

### Libuv 
    - a crossplatform opensource library written in c language 
    - handle synchronous no-blocking operation in node.js
    - it is dont by using : 
        - Thread Pool
        - Event Loop

