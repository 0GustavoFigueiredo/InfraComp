const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Demonstrando deploy automático!');
});

module.exports = app; 