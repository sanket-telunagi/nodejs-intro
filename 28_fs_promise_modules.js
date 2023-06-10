const fs = require("node:fs/promises") ;

// fs.readFile ("./hello.txt", "utf-8")
//   .then((data) => {
//     console.log(data);
//   }) // promise resolved 
//   .catch (err => {
//     console.log(err);
//   }) // error while returning

async function readFile () {
    try {
        const data = await fs.readFile("./hello.txt", "utf-8") ;
        console.log(data) ;
    } catch (err) {
        console.log(err);
    }
}

readFile() ;