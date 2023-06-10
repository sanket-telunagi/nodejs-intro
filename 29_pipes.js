/*
    Pipes :
        - Takes a readable stream and connects it to writtable stream 
        - It returns the destination stream which enables chaining provided the destination stream mustne readable, duplex or tranform stream 


*/
const fs = require("node:fs") ;
const zlib = require("node:zlib") ;
// compression algorithm implemented using gzip algo

const gzip = zlib.createGzip() ;

const readableSTream = fs.createReadStream("file1.txt", {
    encoding : "utf-8" ,
    highWaterMark : 2 // change defult value to 2 Bytes
}) ;

readableSTream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"))

// buffer has default size of 64 KB
const writableStream = fs.createWriteStream("./file2.txt") ;

readableSTream.pipe(writableStream)