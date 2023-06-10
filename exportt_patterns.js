const add = (a, b) => a+b ;
const subtract = (a, b) => a - b ;


// pattern 1
// module.exports = add ;

// Pattern 2
module.exports = (a, b) =>  a + b ;


// pattern 3
// module.exports = {
//     add : add,
//     subtract : subtract
// }
// if key and value names are same we can write without the key 
// module.exports = {
//     add,
//     subtract
// }



// pattern 4
// module.exports.add = (a,b) => a + b ;
// module.exports.subtract = (a,b) => a - b ;

// pattern 5
// exports.add = (a,b) => a + b ;
// exports.subtract = (a,b) => a - b ;