const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, pratap!');
});

app.get('/home', (req, res) => {
    res.send('This is home!');
});

app.get('/games', (req, res) => {
    res.send('This is games!');
});


app.get('/act', (req, res) => {
    res.send('This is games!');
});

app.get('/check', (req, res) => {
    res.send('This is games!');
});
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
