// JSON content-type : application/json

const http = require("node:http") ;

const server = http.createServer((req, res) => {
    
    // json data 
    data = {
        firstname : "Bruce", 
        lastname : "wayne"
    }

    res.writeHead(200, {"Content-Type" : "application/json"}) ;
    res.end(JSON.stringify(data, null, 4)) ;
})

server.listen(3000, () => {
    console.log("server listening to port 3000");
})