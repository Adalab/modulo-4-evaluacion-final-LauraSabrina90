//DEPENDENCIAS:
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDb = require('./config/myConnection');
const Expenses = require('./models/expenses.models')


//ARRANCAR SERVIDOR
const myServer = express();


//CONFIGURAR SERVIDOR
myServer.use(cors());
myServer.use(express.json());

//CONEXIÓN BD
connectDb();

//ESCUCHAR SERVIDOR
const myPort = process.env.PORT || 3306;
myServer.listen(myPort, () => {
    console.log(`Thanks Gandalf my server is live at http://localhost:${myPort}/`);
});


//para los endpoints, con mongoDB hay que definir estructuras de datos por cada una de las colecciones a las que quiero acceder --> modelos

//Insertar un registro en su entidad principal.
    myServer.post('/addExpenses', async (req, res) => {
        console.log(req.body);
        try {
            const newExpense = await Expense.create(req.body);
            console.log(newExpense.month);
            res.json(newExpense);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal server error" });
        }
    });
    myServer.post('/addExpenses', async (req, res) => {
    console.log(req.body);
    try {
        const newExpense = await Expense.create(req.body);
        console.log(newExpense.month);
        res.json(newExpense);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

//Leer/Listar todos los registros existentes.
myServer.get('/getExpenses', async (req, res) => {
    const result = await Expenses.find();
    res.json(result);
    console.log(result);

});


//Leer registros filtrado por el campo de tu interés.


//Actualizar un registro existente.
 myServer.put('/updateExpenses', (req, res) => {
  Person.findOneAndUpdate(
    { name: 'pedro' },
    { $set: { name: 'Naomi' } },
    { new: true }
  )
    .then((doc) => {
      res.json(doc);
    })
    .catch((error) => {
      console.log(error);
    });
});

//Eliminar un registro existente.

myServer.delete('/delete', (req, res) => {
    Expenses.deleteOne({ 'luxuries' : '50' })
      .then((data) => {
        console.log('Delete Docs : ', docs);
        res.json(docs);
      })
      .catch((err) => {
        console.log('Ha ocurrido un error en la información' + err);
      });
  });
