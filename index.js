var express = require('express')
var app = express()
const port = 3000

app.get('/main', function (req, res) {
    var a = 1
    var b = 2
    var c = a + b + c
  res.send('hello world')
})

app.listen(port, () => console.log(`this is port : ${port}`))