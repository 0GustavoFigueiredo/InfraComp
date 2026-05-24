const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Demonstrando pipeline and deployment com Render!');
});

module.exports = app; 