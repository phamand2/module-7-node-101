const fs = require('fs')

let buffer = fs.readFileSync(process.argv[2])
let convertString = buffer.toString()
let stringToArray = convertString.split('\n')
console.log(stringToArray.length - 1)