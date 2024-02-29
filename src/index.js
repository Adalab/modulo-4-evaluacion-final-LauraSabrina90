//DEPENDENCIAS:
const express = require('express');
const cors = require('cors');
require('dotenv').config();

//ARRANCAR SERVIDOR
const myServer = express();


//CONFIGURAR SERVIDOR
myServer.use(cors());
myServer.use(express.json( { limit: '25mb ' }));

//CONEXIÓN BD
async function connectDB() {
    const connection 
}

//ESCUCHAR SERVIDOR
const myPort = process.env.PORT || 3306;
myServer.listen(myPort, () => {
    console.log(`Thanks Gandalf my server is live at http://localhost:${myPort}/`);
});



