const express = require('express');
const db = require('./config/db');
const cors = require('cors');

// create server
const app = express();

// Conectar a la base de datos
db.sync()
    .then(() => console.log('Database working'))
    .catch(error => console.log(error));

// enable express.json
app.use( express.json({ extended: true }));

// app port
const port = process.env.PORT || 4000;

// Import routes
app.use('/user', require('./routes/user'));


// start app
app.listen(port,  () => {
    console.log(`Server working in port; ${port}`);
});