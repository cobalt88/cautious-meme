const http = require('http');
const express = require('express')
const app = express()
const server = http.createServer(app);


app.use((req, res, next) => {
  console.log('in the middleware');
  next(); //allows the request to continue ti the next middleware in line

});

app.use((req, res, next) => {
  console.log('in the middleware 2')
})
server.listen(3001);