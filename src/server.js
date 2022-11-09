'use strict';

const express = require('express');
const app = express();

app.use('/', (req, res) => {
    res.status(200).send('Prueba de funcionamiento La API funciona correctamente');
});

app.listen(3000);