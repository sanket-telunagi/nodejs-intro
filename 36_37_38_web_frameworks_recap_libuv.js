/*
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
        - Thread Pool : 
            - default threads are 4
            - we can increase the number os threads using 
                ```js
                process.env.UV_THREADPOOL_SIZE = 8 ;
                ```
            - The value should not exceed the total number of threads in the CPU
            - else it increases the average time of execution as the CPUs limited cores has to juggle to process the parallel execution and make sure that each threaed gets the sufficient amount of time

*/

const crypto = require("node:crypto") ;

const MAX_CALLS = 5 ;
process.env.UV_THREADPOOL_SIZE = 5 ;
const start = Date.now() ;
for (let i = 0 ; i < MAX_CALLS; i++) {
    crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
        console.log("Hash " + (i+1), Date.now() - start )
    })
}

