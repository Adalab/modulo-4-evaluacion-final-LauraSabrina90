//DEPENDENCIAS:
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDb = require('./config/myConnection.js');


//ARRANCAR SERVIDOR
const myServer = express();


//CONFIGURAR SERVIDOR
myServer.use(cors());
myServer.use(express.json( { limit: '25mb ' }));

//CONEXIÓN BD
connectDb();

//ESCUCHAR SERVIDOR
const myPort = process.env.PORT || 3306;
myServer.listen(myPort, () => {
    console.log(`Thanks Gandalf my server is live at http://localhost:${myPort}/`);
});



