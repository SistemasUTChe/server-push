const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Enable CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Directorio Público
app.use(express.static(publicPath));

// Rutas 
const routes = require('./routes');
app.use('/api', routes );

// setup a database connection using mongoose
// paste the connection string given from your atlas server
mongoose
  .connect('mongodb+srv://wsanchez:5qqW1V85GYxU1bW6@cluster0.o52zp.mongodb.net/Subscripciones?retryWrites=true&w=majority')
  .then(result => {
    console.log("Base de datos conectada");
//    app.listen(3000);

    app.listen(port, (err) => {

        if (err) throw new Error(err);

        console.log(`Servidor corriendo en puerto ${ port }`);

    });

  })
  .catch(err => console.log('err', err))
