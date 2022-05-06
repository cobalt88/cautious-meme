const http = require('http');
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3002;

app.use('/test', (req, res) => {
  console.log('in the middleware');
  res.send('<h1>This is the test route</h1>');
});

app.use('/hello', (req, res) => {
  console.log('in the middleware');
  res.send('<h1>Hello There! This is the Hello World Express JS Route!</h1>');
});

app.use('/', (req, res) => {
  console.log('Catchall Route');
  res.send('<h1>This is the default Route</h1>');
});

app.listen(PORT);