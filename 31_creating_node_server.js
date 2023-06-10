const http = require("node:http") ;

const crypto = require("node:crypto") ;

const fun = () => {
    const MAX_CALLS = 5 ;
    process.env.UV_THREADPOOL_SIZE = 5 ;
    const start = Date.now() ;
    for (let i = 0 ; i < MAX_CALLS; i++) {
        crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
            console.log("Hash " + (i+1), Date.now() - start )
        })
    }
}

// http extends the event emitter class and waits for request 
// # it gets executed on every request 
const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type" : "text/plain"}) ;
    fun() ;
    res.end(`Hello World!!!`);
    
});

server.listen(3000 , () => {
    console.log("Server running on  port 3000");
});