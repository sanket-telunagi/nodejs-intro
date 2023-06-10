// import { createRequire } from "module" ;
// const require = createRequire(import.meta.url) ;

const { log } = require("node:console");
const path = require("node:path") ;

console.log((__filename),"\n",__dirname);

console.log(path.basename(__filename),"\n",
            path.basename(__dirname));

console.log(path.extname(__filename)) ;
console.log(path.extname(__dirname));

console.log(path.parse(__filename)) ;
console.log(path.parse(__dirname));

console.log(path.format(path.parse(__filename)));

console.log(path.isAbsolute(__filename)); // true : absolute path
console.log(path.isAbsolute("./data.json")); // false : relative path


console.log(path.join("folder1", "folder2", "data.json")); // joins with "\"
console.log(path.join("/folder1", "//folder2", "data.json")); 
console.log(path.join(__dirname, "data.json")); 
console.log(path.resolve("folder1", "folder2", "../data.json"));


// resolve method 
console.log(path.resolve("folder1", "folder2", "data.json"));
console.log(path.resolve("/folder1", "folder2", "data.json"));
console.log(path.resolve("/folder1", "//folder2", "data.json"));
console.log(path.resolve("/folder1", "//folder2", "../data.json"));

