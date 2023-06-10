// JSON content-type : application/json

const http = require("node:http") ;

const server = http.createServer((req, res) => {
    
   // req.method : GET, POST, PUT, DELETE
//    if (req.url === "/") {
//         res.writeHead(200, {
//             "Content-Type" : "test/plain"
//         })
//         res.end("Home Page") ;
//    } else if (req.url === "/about") {

//    }


    if (req.url === "/") {

        res.writeHead(200, {
            "Content-Type" : "test/plain"
        })
        res.end("Home Page") ;
    } else if (req.url === "/about") {

        res.writeHead(200, {
            "Content-Type" : "test/plain"
        })
        res.end("About Page") ;
    } else if (req.url === "/api") {

        res.writeHead(200, {
            "Content-Type" : "application/json"
        })
        
        res.end(JSON.stringify({
            firstname : "Bruce", 
            lastname : "Wayne"
        }, null, 4)) ;
    } else {

        res.writeHead(404) ;
        res.end("Requested page not found!!!") ;
    }
        
   
}) ;
       

   
  






server.listen(5000, () => {
    console.log("server listening to port 5000");
}) ;