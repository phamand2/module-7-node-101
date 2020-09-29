const fs = require('fs')

fs.readFile(process.argv[2], function(error, data){
  if (error) {
    console.log(error.message);
    return;
  }
  let convertString = data.toString()
  let stringToArray = convertString.split('\n')
  console.log(stringToArray.length - 1)
}
)
