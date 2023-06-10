const fs = require("node:fs") ;


// synchronous function 
const fileContent = fs.readFileSync("./hello.txt", "utf-8") ;


// async function 
// takes the file name , encodign , and an error first callback function as arguments 

const context = fs.readFile("./hello.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
})

// wrting into the file 
const content = "Hello Javascript!!!" ;

// flag "a" states to append in the file 
fs.writeFile("./greet_async.txt", content, {flag : "a"}, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Writing complete.");
    }
})

// syncronous writing 
fs.writeFileSync("./greet_sync.txt", content, {flag : "a"})


console.log(fileContent);