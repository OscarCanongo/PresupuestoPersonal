const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

// create server
const app = express();

// Conectar a la base de datos
connectDB()
// enable express.json
app.use( express.json({ extended: true }));

// app port
const port = process.env.PORT || 4000;

// Import routes

// start app
app.listen(port,  () => {
    console.log(`Server working in port; ${port}`);
});