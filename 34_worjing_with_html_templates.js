// HTML templets : to cchange the content of html page dynamically we can use the node js 


const http = require("node:http") ;
const fs = require("node:fs") ;
const path = require("node:path")

const server = http.createServer((req, res) => {
    const name = "localhost" ;
    // using "let" in this case is necessary
    let html = fs.readFileSync(path.join(__dirname, "index.html"), "utf-8") ;

    html = html.replace("{{hostname}}", name) ;
    res.end(html) ;
})

server.listen(3000, () => {
    console.log("server listening to port 3000");
})