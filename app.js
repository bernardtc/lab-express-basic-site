const express = require('express');
const app = express();
const port = 3000;

// Setting the static files directory
app.use(express.static(__dirname));


app.get('/', (request, response) => {
    response.send('Home Page of my Idol!');
  });

app.get('/about', (request, response) => {
    response.send('About Page of my Idol!');
  });

app.get('/works', (request, response) => {
    response.send('Works Page about my Idol!');
  });

// to start my server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });