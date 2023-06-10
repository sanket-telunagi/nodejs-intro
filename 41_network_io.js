/*
    - https.request is a network input output operation and not a cpu bound operation 
    - it doesnot use thread pool
    - Libuv istead delegates the work to operating system kernel and whenever possible, it will poll the kernell and see if the request has completed
*/

const http = require("node:http")

const start = Date.now() ;
const MAX_CALLS = 10 ;
for (let i = 0 ; i < MAX_CALLS; i++) {
    http
    .request("http://127.0.0.1:3000", (res) => {
        res.on("data", (err) => {}) ;
        res.on("end", () => {
            console.log("Request : "+(i+1), Date.now()-start);
        })
    })
    .end();
}