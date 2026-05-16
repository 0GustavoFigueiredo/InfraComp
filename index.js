const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Testando automatização de deploy com render!');
});

module.exports = app; 