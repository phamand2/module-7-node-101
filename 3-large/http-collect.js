const http = require('http')
const bl = require('bl')
const url = process.argv[2]


http.get(url, function (response){
  response.pipe(bl(function(error, data){
    if (error){
      console.log(error)
    }
    else {
      console.log(data.toString().length)
      console.log(data.toString())
    }

  }))
})








