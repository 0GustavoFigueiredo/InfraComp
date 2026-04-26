const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Infra Pipeline Online!');
});

module.exports = app; // Exportamos para o teste