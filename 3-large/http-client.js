const http = require('http')
const url = process.argv[2]

http.get(url, function (response){
  response.setEncoding('utf8')
  response.on('data', function(error, data){
    if (error){
      console.log(error)
    }
    else {
      console.log(data)
    }

  })
})
