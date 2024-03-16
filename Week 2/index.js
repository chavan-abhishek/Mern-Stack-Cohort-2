const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const port = 3000


app.use(bodyParser.json());
app.get('/', function (req, res) {
  res.send('Hello its cristiano ')
})

app.listen(port)

//req  whenever there isa request on a specific port i will give you two arguments  req, res 