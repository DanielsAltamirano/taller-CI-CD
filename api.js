const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/suma', (req, res) => {
    const { a, b } = req.query;
    const result = Number(a) + Number(b);
    res.send(`La suma de ${a} y ${b} es ${result}`);
});

module.exports = app;