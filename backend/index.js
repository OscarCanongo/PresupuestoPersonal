const express = require('express');
//const conectarDB = require('./config/db');
const cors = require('cors');

// create server
const app = express();

// Conectar a la base de datos
//conectarDB();

// enable cors
app.use(cors());

// enable express.json
app.use( express.json({ extended: true }));

// app port
const port = process.env.PORT || 4000;

// Import routes

// start app
app.listen(port,  () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
});