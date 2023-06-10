// HTML content-type : text/html

const http = require("node:http") ;
const fs = require("node:fs")
const path = require("node:path")

const server = http.createServer((req, res) => {
    // as text
    // const html = "<h1>Hello World!!!</h1>" ;

    
    // reading the html file as sunc as need to read data before sending data
    // res.writeHead(200, {"Content-Type" : "text/html"}) ;
    // res.end(html) ;

    // reading as readstream 
    // create a direct pipe to the response after reading the stream of input data 
    fs.createReadStream(path.join(__dirname, "index.html")).pipe(res) ;
})

server.listen(3000, () => {
    console.log("server listening to port 3000");
})