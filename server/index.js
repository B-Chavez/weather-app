const fetch = require('node-fetch');
require('dotenv/config');
const express = require('express');
const staticMiddleware = require('./static-middleware');

const apiCall = require('./APIcall')

const app = express();

const apiKey = 'a0327c2f4d091cf42558d47a87732c0b';

app.use(staticMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});

app.get('/api/weather-data', (req, res) => {
  console.log('/api/weather-data CALLED!');
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=Whittier&units=imperial&appid=${apiKey}`, {
    "method": "GET",
    "headers": {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      res.send(data);
    })
});

console.log('test')
