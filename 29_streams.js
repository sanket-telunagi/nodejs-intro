/*
    - Types of streams :
        1. Readable streams : Reading from files
        2. Writable Streams : Writing to file
        3. Duplex Streams   : Sockets as duplex system
        4. Transform strema : file compression where write compressed data and read de-compressed data to and from a file as transform stream
*/

const fs = require("node:fs") ;

const readableSTream = fs.createReadStream("file1.txt", {
    encoding : "utf-8" ,
    highWaterMark : 2 // change defult value to 2 Bytes
}) ;

// buffer has default size of 64 KB



const writableStream = fs.createWriteStream("./file2.txt") ;

readableSTream.on("data", (dataChunk) => {
    console.log(dataChunk);
    writableStream.write(dataChunk)
})

