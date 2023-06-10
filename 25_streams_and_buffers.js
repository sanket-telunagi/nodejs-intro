/*
    - Streams :
        - A sequence of data that being moved from one point to another over time

            - ex : 
                - a stream of data over the internet being moved from one computer to another 
                - a stream of data being transferred from one file to another within the same computer 
        
        - Process streams of data in chunks as they arrive instead of waiting for entire data to be available before processing 
        - This prevents unnecessary data downloads and memory usage 
        
    - Buffers : 
        - Area where data waits befoer being sent of processed is buffers 
        - can only deside when is the right time to send data for processing 
        - if data is already processed of to little data to process node puts it into buffer 
        - intentionally small area that Node maintains in runtime to process stream of data 
        - Eg :
            - streaming a video online 
                - if internet connection is fast, speed of stream will be fast enough to instantly fill up the buffer and send out for processing 
                - that will repeat till the stream is finished 
                - for slow connection, after processing first chunk of data that arrived, video player will display loading spinner which indicates that it is waiting for more data to arrive
                - Once the buffer is flled up and data is processed, the video player shows the video while the video is playing, more data will arrive and wait in the buffer 
            
        
    ```js
    
    // create buffer 

    const buffer = new Buffer.from("Buffer", "utf-8") ;

    console.log(buffer); // <Buffer 42 75 66 66 65 72>
    // hexadecimal values (base16 string)

    console.log(buffer.toJSON()); // displays json data 
    console.log(buffer.toString()); // display actual data inside buffer 

    // writing to buffer 
    buffer.write("Code") ; // writes four places 
    console.log(buffer.toString()); 

    buffer.write("javascript") ;
    console.log(buffer.toString()); // only displays 6 characters as the buffer is created for only six characters 
    ```
*/

// Node.js provides buffer feature as the global feature so no need to import 

// create buffer 

const buffer = new Buffer.from("Buffer", "utf-8") ;

console.log(buffer); // <Buffer 42 75 66 66 65 72>
// hexadecimal values (base16 string)

console.log(buffer.toJSON()); // displays json data 
console.log(buffer.toString()); // display actual data inside buffer 

// writing to buffer 
buffer.write("Code") ; // writes four places 
console.log(buffer.toString()); 

buffer.write("javascript") ;
console.log(buffer.toString()); // only displays 6 characters as the buffer is created for only six characters 